import React from 'react';
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from 'semantic-ui-react';

const LoginForm = () => (
	<div id="wrapper" className="login-form">
		<Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="teal" textAlign="center">
					Login to your account
				</Header>
				<Form size="large">
					<Segment stacked>
						<br />
						<Form.Input
							fluid
							icon="user"
							iconPosition="left"
							placeholder="Username"
						/>
						<br />
						<Form.Input
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
						/>
						<br />
						<Button color="teal" fluid size="large">
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					Don't have an account yet? <a href="#">Sign Up!</a>
				</Message>
			</Grid.Column>
		</Grid>
	</div>
);

export default LoginForm;
