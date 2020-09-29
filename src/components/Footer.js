
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { Box } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
function Copyright() {
  return (
    <Typography component={'span'} variant="body2" style={{ color: '#aaadaa' }}>
      <Box display={{ xs: 'block', sm: 'none' }}><br /></Box>
      {'Copyright ©     '}

         NM

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  footer: {

    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  headerlink: {
    textDecoration: 'none',
    fontSize: '25px',
  },
  link:
  {
    textDecoration: 'none',
    color: 'black',
    fontSize: '18px',
    lineHeight: '1.5',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    }
  },
  textfield: {
    margin: '5px',
    backgroundColor: 'white',
    color: '#213C54',
    borderRadius: '20px',
    paddingLeft: '8px'
  },
  signup: {
    border: '2px solid white',
    padding: '4px',
    margin: '3px',
  },
}));




export default function Footer() {
  const classes = useStyles();
  return (
    <Grid style={{ backgroundColor: '#e4e4e4', marginTop: '50px' }}>
      <Container maxWidth="lg" component="footer" className={classes.footer} >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} md={4} lg={4} >
            {/* <Typography component={'span'} className={classes.headerlink}>
              NM
              </Typography> */}
            <ul>
              
              <Link to='/about' className={classes.link}><li>About  </li>  </Link>
              <Link to='/skills' className={classes.link}><li>Skills  </li></Link>
              <a href="mailto:maskeynishma@gmail.com" className={classes.link}><li>Contact  </li> </a>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <Typography component={'span'} gutterBottom className={classes.headerlink}>

            </Typography>
            <ul>
              
              <Link to='/workhistory' className={classes.link}><li>Work History </li></Link>
              <Link to='/portfolio' className={classes.link}><li>Portfolio  </li></Link>
              <Link to='/hobbies' className={classes.link}><li>Hobbies </li></Link>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>


            <Typography component="h2" className={classes.headerlink} style={{ paddingBottom: '5px', fontSize: '26px' }}> C O N T A C T   {" "} M E </Typography>
            <p><EmailIcon style={{ verticalAlign: 'middle' }} fontSize="large" />
              <a href="mailto:maskeynishma@gmail.com" className={classes.link}> maskeynishma@gmail.com</a></p>
            <div>
              <a href="https://www.linkedin.com/in/nishmamaskey/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><LinkedInIcon fontSize="large" /></a>
              <a href="https://www.instagram.com/neesmamask" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><InstagramIcon fontSize="large" /></a>
              {/* <a href="https://www.facebook.com/neesma.mask" target="_blank" rel="noopener noreferrer" style={{color:'black'}}>  <FacebookIcon fontSize="large"/></a> */}

              <a href="https://github.com/Maskey2/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>  <GitHubIcon fontSize="large" /></a>
            </div>

          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
        <Grid style={{ paddingBottom: '30px' }}></Grid>
      </Container>
    </Grid>
  );
}