import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = () => {

		return (
			<div className="navbar">
				<Menu size="massive" stackable className="ui top fixed menu">
					<Menu.Item>
						<img src={require("./hm_logo.png")} />
					</Menu.Item>

					<Menu.Item
						name="features"
					href="/Dashboard">
						Home
					</Menu.Item>
					<Menu.Item
						name="Login"
					href="/Login">
						Login
					</Menu.Item>
					<Menu.Menu position='right'>
            <Menu.Item
              name='Signup'
							href="/"
            />
          </Menu.Menu>
				</Menu>
			</div>
		);
	}

export default NavBar;
