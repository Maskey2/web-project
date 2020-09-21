import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Particle from "./Particle";
import main from './../assets/main.jpg'
import david from './../assets/isa.jpg'
import disting from './../assets/dr.jpg'
import tceq from './../assets/tceq.jpg'
import tceq2 from './../assets/tceq.jpeg'
import nsa1 from './../assets/nsa1.jpg'
import nsa2 from './../assets/nsa2.jpg'
import tangc from './../assets/tangc.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import wit from './../assets/2.jpg'
import wit2 from './../assets/dxc.jpg'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "220px",
    maxWidth: "300px",
    padding: "15px",
    margin: '1px',
    backgroundColor: '#e4e4e4',
    display: 'flex',
    alignItems: 'center',

  },
  title: {
    color: "black",
    textAlign: "center",
    padding: '0px 20px',
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  subtitle: {
    color: "black",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  img: {
    maxWidth: '500px',
    height: 'auto',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '340px',
    },
  },
  awardimg: {
    maxWidth: '250px',
    height: 'auto',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '140px',
    },
  },
  witimg: {
    maxWidth: '450px',
    height: 'auto',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '140px',
    },
  },

}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Particle />
      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={6} lg={6} align="center" className="animate__animated animate__jackInTheBox" >
            <img
              src={main}
              alt="Main image" className={classes.img} />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={6}>
            <p align="center" style={{ fontSize: '50px' }} className="animate__animated animate__zoomIn">About Me</p>
            <Typography className="animate__animated animate__fadeInDown animate__delay-1s">
              <h2>I am Nishma Maskey.</h2>
              <p>I graduated from Southeastern Louisiana University with Bachelors degree in Computer Science with minor in Mathematics.</p>
              <p>I am a Front-End Developer and a Graphic Designer.</p>
              <p>Besides Designing and Coding, I love to watch movies, cook, play guitar and paint!</p>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <div style={{ backgroundColor: '#d3e4e3', padding: '30px 0px' }}>
        <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '50px' }}>Awards and Achievements</p>
        <Grid container spacing={0} justify="center" style={{ margin: '20px 0' }} className="animate__animated fadeIn animate__delay-1s">

          <Grid item xs={6} sm={4} md={3} lg={3} align="center" >
            <div className={classes.card}>
              <div style={{ flexBasis: 'none' }}>
                <img
                  src="https://i.ya-webdesign.com/images/award-transparent-animated-4.gif"
                  alt="award"
                  height="40px"
                  align="center"
                />
                <p className={classes.title}>
                  Thomas F. Higginbotham Scholarship in Computing Science
            </p><hr />
                <p className={classes.subtitle}>Spring 2020</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3} align="center">
            <div >
              <Zoom>
                <img src={david} alt="david" className={classes.awardimg} /></Zoom>
              <div style={{ flexBasis: 'none' }}>

                <p className={classes.title} >
                  David Ware & Associates Outstanding International Student Award
                  2019
            </p>
                <p className={classes.subtitle} >Spring 2019</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3} align="center">
            <div><Zoom>
              <img
                src={disting} className={classes.awardimg} alt="award" /></Zoom>
              <div style={{ flexBasis: 'none' }}>

                <p className={classes.title} >
                  Distinguished Research Presentation Award PROFIT Asset Program
            </p>
                <p className={classes.subtitle} >Spring 2019</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3} align="center">
            <div ><Zoom>
              <img src={tangc} className={classes.awardimg} alt="award" /></Zoom>
              <div style={{ flexBasis: 'none' }}>
                <p className={classes.title} >
                  Tangipahoa Professional Women's Organization Annual Scholarship
            </p>
                <p className={classes.subtitle} >Summer 2019</p>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="center" style={{ margin: '30px 0' }} className="animate__animated fadeIn animate__delay-2s">
          <Grid item xs={6} sm={4} md={3} lg={3} align="center">
            <div ><Zoom>
              <img src={nsa1} className={classes.awardimg} alt="award" /></Zoom>
              <div style={{ flexBasis: 'none' }}>
                <p className={classes.title} >
                  Certificate of Appreciation by NSA - St Cloud State University
            </p>
                <p className={classes.subtitle} >Summer 2019</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3} align="center">
            <div ><Zoom>
              <img src={nsa2} className={classes.awardimg} alt="award" /></Zoom>
              <div style={{ flexBasis: 'none' }}>
                <p className={classes.title} >
                  Certificate of Appreciation by NSA - St Cloud State University
            </p>
                <p className={classes.subtitle} >Summer 2019</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3} align="center">
            <div ><Zoom>
              <img src={tceq} className={classes.awardimg} alt="award" /></Zoom>
              <div style={{ flexBasis: 'none' }}>
                <p className={classes.title} >
                  Certificate of Participation by TCEQ - Mickey LeLand Environmental Program
            </p>
                <p className={classes.subtitle} >Summer 2019</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={3} align="center">
            <div ><Zoom>
              <img src={tceq2} className={classes.awardimg} alt="award" style={{ border: '1px solid grey' }} /></Zoom>
              <div style={{ flexBasis: 'none' }}>
                <p className={classes.title} >
                  Certificate of Appreciation by TCEQ - Water Quality Division
            </p>
                <p className={classes.subtitle} >Summer 2019</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <Container>
        <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px' }}>Women in Technology, Southeastern Louisiana University</p>
        <p style={{ textAlign: 'center', fontSize: '20px' }}>President - Fall 2017 - Spring 2020</p>
        <Grid container spacing={0} justify="center" style={{ margin: '20px 0' }} className="animate__animated fadeIn animate__delay-3s">

          <Grid item xs={6} sm={6} md={6} lg={6} align="center" >
            <div>
              <div style={{ flexBasis: 'none' }}>
                <Zoom><img
                  src={wit} className={classes.witimg}
                  alt="award"
                /></Zoom>

              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} align="center" >
            <div>
              <div style={{ flexBasis: 'none' }}>
                <Zoom> <img
                  src={wit2} className={classes.witimg}
                  alt="award"
                /></Zoom>

              </div>
            </div>
          </Grid>


        </Grid>
        <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px' }}>Check out our website <a href="https://www.wit-selu.com/" target="_blank">WIT.SELU.COM </a>for more information.</p>

      </Container>
      <Footer />
    </React.Fragment>
  );
}
