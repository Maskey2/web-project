import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from './Navbar'
import Footer from "./Footer";
import Particle from "./Particle";
import cer from './../assets/responsive.png'
import cer2 from './../assets/gd.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <div>

      <Navbar />
      <Particle />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} style={{ marginBottom: '70px' }}>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__lightSpeedInLeft"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8630c5f-6e77-4132-ae49-efd987a44020/dake8d1-5a55fb49-3b92-4387-8699-75703019948a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTg2MzBjNWYtNmU3Ny00MTMyLWFlNDktZWZkOTg3YTQ0MDIwXC9kYWtlOGQxLTVhNTVmYjQ5LTNiOTItNDM4Ny04Njk5LTc1NzAzMDE5OTQ4YS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.berRABM_UVULOx_H4b48aQBV_X1WZZ8Sv2udxNJC8mU"
                alt="PS"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__jackInTheBox "
                src="https://cdn.mos.cms.futurecdn.net/KQPV2TFnwvt5K4KBzGMHAF-1200-80.png"
                alt="AI"

              />
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__rollIn"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png"
                alt="ID"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__zoomIn"
                src="https://cdn.worldvectorlogo.com/logos/react.svg"
                alt="React"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__slideInLeft"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                alt="Redux"

              />
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInDown"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                alt="CSS"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInLeft"
                src="https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png"
                alt="JS"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInDown"
                src="https://miro.medium.com/max/683/1*HFYKWq92BcXJIdata7d-JQ.png" 
                alt="Sass"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInDown"
                src="https://material-ui.com/static/logo.png"
                alt="MaterialUI"

              />
            </Grid> <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInDown"
                src="https://react.semantic-ui.com/logo.png"
                alt="SemanticUI"

              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInDown"
                src="https://codilime.com/wp-content/uploads/2020/03/codilime_A-CI_CD-process-2.png"
                alt="CICD"

              />
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInTopLeft"
                src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
                alt="Redux"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__fadeInTopLeft"
                src="https://miro.medium.com/max/1024/1*9HanDsRU11ZMsgDGJwN96w.png"
                alt="boots"
              /></Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__zoomIn" 
                src="https://www.tutorialspoint.com/css/images/responsive.jpg"
                alt="responsive"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">
              <img className="skill-img animate__animated animate__lightSpeedInLeft"
                src="https://www.ebsco.com/files/post/assets/eBooks-Accessibility-MOBILE-Blog-Image.png"
                alt="accessibility"
              />

            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} align="center">

              <img className="skill-img animate__animated animate__jackInTheBox"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjFBi6UHNBVzafID6sc5dV8wIozs9_1kz8eg&usqp=CAUg"
                alt="leadership"
              />
          </Grid>
          </Grid>
          {/* <h1 style={{ textAlign: 'center' }}>Certifications</h1>
          <Grid container spacing={4} >
            <Grid item xs={6} sm={6} md={6} lg={6} align="center">
              <Zoom><img className=" animate__animated animate__jackInTheBox"
                src={cer} style={{ maxWidth: '100%' }} /></Zoom>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} align="center" justify="center">
              <Zoom>
                <img className=" animate__animated animate__jackInTheBox"
                  src={cer2} style={{ maxWidth: '50%', textAlign: 'center' }}
                  alt="leadership"
                /></Zoom>
            </Grid>
          </Grid> */}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
