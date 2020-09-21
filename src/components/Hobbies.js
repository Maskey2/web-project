import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Particle from './Particle'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from '@material-ui/core';
import art from './../assets/art.jpg'
import art2 from './../assets/art2.jpg'
import art3 from './../assets/art3.jpg'
import art4 from './../assets/art4.jpg'
import food from './../assets/food.jpg'
import food2 from './../assets/food2.jpg'
import food3 from './../assets/food3.jpg'
import food4 from './../assets/food4.jpg'
import design from './../assets/design.jpg'
import design3 from './../assets/design3.jpg'
import design4 from './../assets/design4.jpg'
import design2 from './../assets/design2.jpg'
import explore from './../assets/explore.jpg'
import explore2 from './../assets/explore2.jpg'
import explore3 from './../assets/explore3.jpg'
import explore4 from './../assets/explore4.jpg'

const useStyles = makeStyles((theme) => ({
  hobimg: {
    maxWidth: '300px',
    height: 'auto',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '140px',
    },
  },

}));

export default function Hobbies() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Particle />
      <Container>
        <p align="center" style={{ fontSize: '50px', marginBottom: '0px' }} className="animate__animated animate__zoomIn">Art</p>
        <p align="center" style={{ fontSize: '20px', marginTop: '0px' }}>
        </p>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={art} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={art2} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={art3} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={art4} alt="" className={classes.hobimg} />
          </Grid>
        </Grid>

        <p align="center" style={{ fontSize: '50px' }} className="animate__animated animate__zoomIn">Design</p>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={design} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={design2} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={design3} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={design4} alt="" className={classes.hobimg} />
          </Grid>
        </Grid>

        <p align="center" style={{ fontSize: '50px', marginBottom: '0px' }} className="animate__animated animate__zoomIn">Cooking</p>
        <p align="center" style={{ fontSize: '20px', marginTop: '0px' }}><a href="https://www.instagram.com/bae_is_hangry/" target="_blank" style={{ textDecoration: 'none', color: 'black' }}>@bae_is_hangry</a></p>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={6} lg={3} className="animate__animated animate__jackInTheBox" >
            <img src={food} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={food2} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={food3} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={food4} alt="" className={classes.hobimg} />
          </Grid>
        </Grid>

        <p align="center" style={{ fontSize: '50px' }} className="animate__animated animate__zoomIn">Explore</p>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center" className="animate__animated animate__jackInTheBox" >
            <img src={explore} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={explore2} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={explore3} alt="" className={classes.hobimg} />
          </Grid>
          <Grid item xs={6} sm={4} md={6} lg={3} align="center">
            <img src={explore4} alt="" className={classes.hobimg} />
          </Grid>
        </Grid>
      </Container>
      <Footer />

    </div>
  )
}
