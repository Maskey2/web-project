import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Particle from './Particle'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from '@material-ui/core';
export default function Hobbies() {
    return (
        <div>
           <Navbar/>
           <Particle/>
        <Container>
        <p align="center" style={{fontSize:'50px'}} className="animate__animated animate__zoomIn">Art</p>
           <Grid container spacing={4}>          
          <Grid item xs={12} sm={4} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img  src=""   alt=""   style={{ maxWidth: "200px" }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
        </Grid>

        <p align="center" style={{fontSize:'50px'}} className="animate__animated animate__zoomIn">Design</p>
           <Grid container spacing={4}>          
          <Grid item xs={12} sm={4} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img  src=""   alt=""   style={{ maxWidth: "200px" }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
        </Grid>

        <p align="center" style={{fontSize:'50px'}} className="animate__animated animate__zoomIn">Music</p>
           <Grid container spacing={4}>          
          <Grid item xs={12} sm={4} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img  src=""   alt=""   style={{ maxWidth: "200px" }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
        </Grid>

        <p align="center" style={{fontSize:'50px'}} className="animate__animated animate__zoomIn">Explore</p>
           <Grid container spacing={4}>          
          <Grid item xs={12} sm={4} md={6} lg={3} align="center"  className="animate__animated animate__jackInTheBox" >
            <img  src=""   alt=""   style={{ maxWidth: "200px" }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={3}>           
           
          </Grid>
        </Grid>
        </Container>
           <Footer/>
        
        </div>
    )
}
