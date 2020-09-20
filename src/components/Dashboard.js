import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({


}));

const cards = [
    {
      id: 1,
      src: "https://source.unsplash.com/random",
      backsrc: "https://media2.giphy.com/media/Dr1ZZREmna8lTAmVwM/giphy.gif",
      title: "About Me",
      link: "/about",
      color: "#2ec4b6",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/random",
      backsrc: "https://i.imgur.com/u0gwbTT.gif",
      title: "Skills",
      link: "/skills",
      color: "#EB9647",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/random",
      backsrc:
        "https://thumbs.gfycat.com/PerfectCalculatingAxisdeer-size_restricted.gif",
      title: "Work ",
      link: "/workhistory",
      color: "#8CB26C",
    },
    {
      id: 4,
      src: "https://source.unsplash.com/random",
      backsrc: "https://i.gifer.com/9e7D.gif",
      title: "Portfolio",
      link: "/portfolio",
      color: "#465775",
    },
    {
      id: 5,
      src: "https://source.unsplash.com/random",
      backsrc:
        "https://thumbs.gfycat.com/GrouchyMelodicIsabellinewheatear-size_restricted.gif",
      title: "Hobbies ",
      link: "/hobbies",
      color: "#ffca3a",
    },
    {
      id: 6,
      src: "https://source.unsplash.com/random",
      backsrc:
        "https://tribereport.com/upload/media/entries/2016-01/31/25-6-063c8b2dc9ecb7ec7313cf38478d0248.gif",
      title: "Contact",
      link: "/contact",
      color: "#EF6F6C",
    },
  ];
  


export default function Pricing() {
  const classes = useStyles();

  return (
    <div className="dashboard" >    
      <Container>
        <Grid container spacing={5} >
          {cards.map((card) => (        
            <Grid item key={card.id} xs={6} sm={6} md={4} >
                  <Link to={card.link} style={{textDecoration:'none'}}>
              <Card style={{backgroundColor: card.color, height:'200px', display:'flex', alignItems:'center', justifyContent:'center', verticalAlign:'middle'}}>               
                <CardContent style={{color:'white'}}>                
                    {card.title}                  
                </CardContent>
                <CardActions>                 
                </CardActions>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </div>
  );
}