import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    graphic: {
        maxWidth: '100%',
        height: 'auto'
    },
}));

export default function Graphic() {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12} lg={12} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://i.imgur.com/D6rrZQv.jpg" className={classes.graphic} />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={6} lg={6} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://i.imgur.com/E5fO5xa.jpg" className={classes.graphic} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://i.imgur.com/jTH5oay.jpg" className={classes.graphic} />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={6} lg={4} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://i.imgur.com/Ew3JcpG.jpg" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4}>
                        <img src="https://i.imgur.com/Rt726uM.jpg" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={4}>
                        <img src="https://i.imgur.com/2IhAFWP.jpg" className={classes.graphic} />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={6} lg={4} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://i.imgur.com/xHm907o.jpg" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4}>
                        <img src="https://i.imgur.com/v3x9CIh.jpg" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={4}>
                        <img src="https://i.imgur.com/WBhkmNo.jpg" className={classes.graphic} />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={6} lg={4} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://drive.google.com/uc?id=1jqxj5COjhN8KxJPJnIGURqDhETFq2JhI" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4}>
                        <img src="https://drive.google.com/uc?id=1Gy4Nyw8lddhkQG0R1yxRrobZbgkKRphc" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={4}>
                        <img src="https://drive.google.com/uc?id=1Vvr3u4ggIPyhtLOl5HaU2J77DrJOSNeJ" className={classes.graphic} />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={6} lg={4} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://drive.google.com/uc?id=1auiyEQ5CEd28aVgRZE6oQQG3HOV60fSz" className={classes.graphic} style={{ maxWidth: '85%' }} alt="Nepal night" />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4}>
                        <img src="https://drive.google.com/uc?id=1tA266BvzQBRywDzlws_nxqqPPShwYlR0" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={4}>
                        <img src="https://drive.google.com/uc?id=1nDYem-_i_dGtfcXyUBmhq4nrdutuY6Sq" className={classes.graphic} />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6} md={6} lg={6} align="center" className="animate__animated animate__jackInTheBox" >
                        <img src="https://drive.google.com/uc?id=1NA5lv9TZd-osnvJm8tZBmemuI-honjj0" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <img src="https://drive.google.com/uc?id=1wQQ32oYKc2rLLS_TDCZRXzNW6fs5-j0-" className={classes.graphic} />

                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6}>
                        <img src="https://drive.google.com/uc?id=1LafIoz8UOibERcOKb7mNY2i5s73tld-x" className={classes.graphic} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6}>
                        <img src="https://drive.google.com/uc?id=1n0Gb7ek7sl92oOYL3rHtt-P8jugMLiNS" className={classes.graphic} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6}>
                        <img src="https://drive.google.com/uc?id=1VWipdk2pwVQfmmU9XLpFXVbmlFapWyte" className={classes.graphic} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6}>
                        <img src="https://drive.google.com/uc?id=1HmqqjCAG9jsAnoNL4kSBt0Y2SF-TfnMi" className={classes.graphic} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6}>
                        <img src="https://drive.google.com/uc?id=1X__1MdmXvPtclMIdf1hpG-9aSvgjn3bW" className={classes.graphic} style={{ maxWidth: '80%' }} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3} lg={6}>
                        <img src="https://drive.google.com/uc?id=1_MMHBW9d3pZPvvxt_V7i3epLqMMONgmi" className={classes.graphic} />
                    </Grid>
                </Grid>
            </Container>
        </div >
    )
}
