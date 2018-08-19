//visit a Page

//is user logged in?
//YES -> Does User have a Username? -> YES -> Go to the page visited (logged in as that user)
//NO -> Does User have Userame? -> YES -> Go to the Page
//NO -> Does User have Username? -> NO -> send to Username Selection page

//All pages reset and start from the beginning flow above, is user logged in?

import React from 'react';

const Authenticate = () => {
  return (


        <meta name="google-signin-scope" content="profile email">
          <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            <body>
              <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
              <script>
                function onSignIn(googleUser) {
                  // The ID token you need to pass to your backend:
                  const id_token = googleUser.getAuthResponse().id_token;
                  console.log("ID Token: " + id_token);
                };
              </script>
            </body>

  )
}
