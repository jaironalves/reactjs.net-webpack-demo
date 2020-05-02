import React, { Fragment, useEffect } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Helmet } from 'react-helmet';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

const useStyles = makeStyles({
    root: {        
        color: '#222',             
        textShadow: '0 0 5px lightgray',        
    },
    link: {
        transition: 'color 0.2s ease',
        color: 'palevioletred',
        textDecoration: 'none',
        '&:hover': {
            color: '#888',
        }
    },
});

export function MaterialUIDemo() {
    useEffect(() => {
        const jssStyles = document.querySelector('#material-ui-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const classes = useStyles();

    return (
        <Fragment>
            <Helmet>
                <title>ReactJS.NET Demos | Material-UI</title>
            </Helmet>
            <ThemeProvider theme={theme}>
                <Typography className={classes.root} variant="h3">
                    Hello from
                    <Link className={classes.link} href="https://github.com/mui-org/material-ui">Material-UI</Link>!
			    </Typography>
            </ThemeProvider>
        </Fragment>
    );
}
