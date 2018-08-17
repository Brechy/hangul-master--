import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class NavBar extends Component {
	state = {};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<div id="NavBar">
				<Menu stackable>
					<Menu.Item>
						<img src={require("./hm_logo.png")} />
					</Menu.Item>

					<Menu.Item
						name="features"
						active={activeItem === 'features'}
						onClick={this.handleItemClick}>
						Home
					</Menu.Item>
					<Menu.Item
						name="Login"
						active={activeItem === 'Login'}
						onClick={this.handleItemClick}>
						Login
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default NavBar;
