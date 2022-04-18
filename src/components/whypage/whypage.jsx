import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';




export default function WhyPage(props){

    const useStyles = makeStyles((theme) => ({
        wrapper: {
            marginTop: "8em",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        },
        root: {
            width: '60vw',
            height: '20vh',
            [theme.breakpoints.down("xs")] : {
              width: '90vw',
              height: 'auto',
             }
          },
          divider: {
            background: '#2CB67D',
        },
        title: {
            marginLeft: 9,
            marginTop: '0.2em',
            marginRight: 9,
        },
        text: {
            marginLeft: 9,
            marginTop: '0.3em',
            marginBottom: '0.3em',
        },
        }))

    const classes = useStyles();

    return (
            <Fade in={true} timeout={1200}>
            <Grid container spacing={2} alignItems="stretch" justify='center'  className={classes.wrapper}>
            <Grid item xs={12}>
            <Card className={classes.root} elevation={2}>
            <Typography className={classes.title} variant="h6" component="h3">
                Technolgy
                <Divider classes={{root: classes.divider}} variant="width"/>
            </Typography>
            <Typography className={classes.text} wrap variant="body2" component="p">
                - To learn the technologies that shape our present and future.
                <br/>
                - To understand engineer's pain points and promote collaboration and problem solving.
                <br/>
                - To build
            </Typography>
            </Card>
            </Grid>
            <Grid item xs={12}>
            <Card className={classes.root} elevation={2}>
            <Typography className={classes.title} variant="h6" component="h3">
                Design
                <Divider classes={{root: classes.divider}} variant="width"/>
            </Typography>
            <Typography className={classes.text} wrap variant="body2" component="p">
                - To learn how we interact with the world around us and the products that we use.
                <br/>
                - To create user-centric designs that inspire and enable a unique experience.
                <br/>
                - To experience
                
            </Typography>
            </Card>
            </Grid>
            <Grid item xs={12}>
            <Card className={classes.root} elevation={2}>
            <Typography className={classes.title} variant="h6" component="h3">
                Business
                <Divider classes={{root: classes.divider}} variant="width"/>

            </Typography>
            <Typography className={classes.text} wrap variant="body2" component="p">
                - To learn how to acquire financial freedom.
                <br/>
                - To use this wealth to add value and impact.
                <br/>
                - To expand
            </Typography>
            </Card>
            </Grid>
            </Grid>
            </Fade>
    );
    
}
