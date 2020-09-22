import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import sea from "./../assets/sea.JPG"
import thor from "./../assets/thor.JPG"
import wit from "./../assets/wit.JPG"

const useStyles = makeStyles((theme) => ({
    graphic: {
        maxWidth: '50%',
        height: 'auto'
    },
    web: {
        maxWidth: '100%',
        height: 'auto'
    },
}));

export default function Web() {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="lg">

                <p style={{ textAlign: 'center' }}>
                    <a href="https://www.wit-selu.com/" target="_blank" style={{ textAlign: 'center', fontSize: '30px' }}>Women in Technology
                    <img id="myImg" src={wit} alt="Snow" className={classes.web} /></a>
                    <h3 style={{ textAlign: 'center' }}>Women in Technology website for Southeastern LA University.</h3>

                </p>
                <br /><br />
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4} md={6} lg={6} className="animate__animated animate__jackInTheBox" >
                        <img src="https://drive.google.com/uc?id=1qK8PUtTLGa1f2XMgg0Av0ZHPhure-0pS" className={classes.graphic} />
                        <div>
                            <h4>Lion's Feed is the semester long group project (four members) in CMPS 285- Software Engineering class.</h4>
                            <ul><li>'Lions Feed' is built in MVC - ASP.Net Core 2.0 environment using Visual Studio 2017.</li>                        <li> Lion's Feed is a platform for Southeastern Louisiana University students to share their creativity via posts which includes texts and images.</li>
                                <li>It is a social networking website for students with the functionality of Home, User Profile, activities such as like, comments, etc.</li>
                            </ul>
                            <br />
                            <img id="myImg" src="https://drive.google.com/uc?id=1nvPVfh3VptldCGoLhkzWWSwNTtfGdPmD" alt="Snow" className={classes.web} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={6} lg={6}>
                        <img src="https://drive.google.com/uc?id=1oD5rEdxF33a4xOYN0emEcaewZdEl4ddW" className={classes.graphic} />
                        <div>
                            <h4>iForgot is the group project in CMPS 401- Survey of Programming Languages class.</h4>
                            <ul><li>'iForgot' is built in MVC - ASP.Net environment using Visual Studio 2017.</li>
                                <li> iForgot is a schedule reminder app with functionality of reminding people about their dues via email/ messages.</li>
                                <li>It is a web-app where users are able to CRUD (Create/ Edit/ Update/ Delete) the events.</li>
                                <li>Designed a logo for the web- app, developed responsive front- end and helped with the server side. </li>
                            </ul>
                            <img src="https://drive.google.com/uc?id=1aaei3DC8RohDHeZpqb9oIwSHDZG3UuL7" alt="Snow" className={classes.web} />
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div >
    )
}
