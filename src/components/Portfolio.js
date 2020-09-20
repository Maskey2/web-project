import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Particle from './Particle'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function Portfolio() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
           <Navbar/>
           <Particle/>
           <br/>
           <Paper className={classes.root}>
           <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Web Development" />
        <Tab label="Graphic Design" />
      </Tabs>
    </Paper>
           <Footer/>
        </div>
    )
}
