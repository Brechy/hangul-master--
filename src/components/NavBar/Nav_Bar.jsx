import React from 'react';

const NavBar = () => {
	return(
	<nav name="navbar is-transparent">
		<div className="navbar-brand">
			<a className="navbar-item">
				<img
					src={require('./hm_logo.png')}
					alt="hangul master logo"
    />
			</a>
			<div
				className="navbar-burger burger"
   data-target="navbarExampleTransparentExample">
				<span />
				<span />
				<span />
			</div>
		</div>

		<div id="navbarExampleTransparentExample" className="navbar-menu">
			<div className="navbar-start">
				<a className="navbar-item" href="">
					Home
				</a>
				<div className="navbar-item has-dropdown is-hoverable">
					<a className="navbar-link" href="">
						Docs
					</a>
					<div className="navbar-dropdown is-boxed">
						<a className="navbar-item" href="">
							Overview
						</a>
						<a
							className="navbar-item"
      href="">
							Modifiers
						</a>
						<a
							className="navbar-item"
      href="">
							Columns
						</a>
						<a
							className="navbar-item"
      href="">
							Layout
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
)};

export default NavBar;
