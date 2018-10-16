import jwt from 'jsonwebtoken';
import jtp from 'jwk-to-pem';

const isAuthenticated = async() => {
	if (isGoogleAuthenticated()) return true;
	return isFloopyAuthenticated();
}

const isGoogleAuthenticated = async() => {
	try {
		//get token from local storage
		const token = localStorage.getItem('jwt token');
		if (!token) {
			//if no token present, be false
			return false;
		}
		const decoded = jwt.decode(token, { complete: true });
		//check if token is legit by asking google to verify based on kid matching
		let kidkey = localStorage.getItem(`kid-${decoded.header.kid}`);
		if (!kidkey) {
			const certs = await fetch('https://www.googleapis.com/oauth2/v3/certs');
			const certsJSON = await certs.json();
			let [publicJWK] = certsJSON.keys.filter(
				(e) => e.kid === decoded.header.kid
			);

			kidkey = jtp(publicJWK);
			localStorage.setItem(`kid-${decoded.header.kid}`, kidkey);
		}
		jwt.verify(token, kidkey);
		return true;
	} catch (err) {
		return false;
	}
};

const isFloopyAuthenticated = async() => {
		try {
			//get token from local storage
			const token = localStorage.getItem('floopy token');
			if (!token) {
				//if no token present, be false
				return false;
			}
			const decoded = jwt.decode(token, { complete: true });
			//check if token is legit by asking google to verify based on kid matching
			let kidkey = localStorage.getItem(`floopy-cert`);
			if (!kidkey) {
				const kidkey = await fetch('/publickey');
				localStorage.setItem(`floopy-cert`, kidkey);
			}
			jwt.verify(token, kidkey);
			return true;
		} catch (err) {
			return false;
		}
}

export default isAuthenticated;
