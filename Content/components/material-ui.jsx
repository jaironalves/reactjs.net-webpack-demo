import React, { Fragment, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';

export function MaterialUIDemo() {
	//useEffect(() => {
	//	//const jssStyles = document.querySelector('#material-ui-server-side');
	//	//if (jssStyles) {
	//		//jssStyles.parentElement.removeChild(jssStyles);
	//	}
	//}, []);

	return (
		<Fragment>
			<Helmet>
				<title>ReactJS.NET Demos | Material-UI</title>
			</Helmet>
			<Container maxWidth="sm">
				Hello from{' '}
				<a href="https://github.com/mui-org/material-ui">Material-UI</a>!
			</Container>
		</Fragment>
	);
}
