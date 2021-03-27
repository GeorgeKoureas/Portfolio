import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import George from "../../assets/hero.png";
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';

import './heropage.scss'





export default function HeroPage(props){


    useEffect (() => {
        window.mediumWidget();
      });


    const useStyles = makeStyles((theme) => ({
        mainwrapper:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
        },
        wrapper: {
            marginTop: "8em",
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        tools: {
            display: 'flex',
        },
        divider: {
            background: '#2CB67D',
        },
        hero: {

            margin: 4,
        },
        heroquote: {
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 17,
            marginRight: 17,
        },
        heroavatar: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-6em',
            
        },
        pic:{
            boxShadow: theme.shadows[3],
        },
        large: {
                width: theme.spacing(20),
                height: theme.spacing(20),

        },
        content: {
            display: 'flex',
            flexDirection: 'column',
        },
        root: {
            width: '95%',
          [theme.breakpoints.down("xs")] : {
            width: '95%',
            height: 'auto',
            marginBottom: 50,}
        },
        media: {
            width: '50%',
            height: 'auto',
              [theme.breakpoints.down("xs")] : {
                height: '100%'
              }
        },
    }))

    const classes = useStyles();


    return (
        <Fade in={true} timeout={1200}>
        <div className={classes.mainwrapper} style={{ paddingLeft: 40, paddingRight: 40 }}>
        <Grid container spacing = {3} alignItems="center" justify='center'>
        <Grid item xs={12} sm={10}>
        <div className={classes.wrapper}>
        <Card elevation={2}>
        <Grid container item spacing={1}  direction='column' alignItems="stretch" justify='center'>
        <Grid item xs={12} classes={{ root: classes.hero }}>
           <br/>
           <br/>
           <br/>
           <br/>
        <Divider classes={{root: classes.divider}} variant="middle"/>
        </Grid>
        <Grid item xs={12}>
            <div className={classes.heroavatar}>
            <Avatar component={Paper} elevation={5} variant='circular' alt="George" src={George} className={classes.large} />
            </div>
        </Grid>
        <Grid item xs={12}  justify='center'>
        <div className={classes.heroquote}>
        <Typography Wrap variant="body1" component="p" style={{marginBottom: 15}}>
          Welcome to my personal Portfolio! My name is George and I am 
          a 25-year old Mechanical Engineer turned Product Enthusiast.
          I am really passionate about turning data into scalable and impactful software products either to solve a problem, or simply for fun.
          <br/>
          <br/>
          Ever since I found out what Product Management is all about, I've been focusing on honing my Tech, UI\UX and Business skills.
          I created this portfolio to showcase my progress and actually practice a bit on my React skills.

         
          <br/>
          <br/>
          In my free time, I like to enjoy a warm cup of coffe and a good book or video game. You can also often find me blasting Hip-Hop as loud as possible,
          roaming around town with my friends or writing about ideas and products.
          <br/>
          <br/>
          <div classeName={classes.tools}>
          Skills/Tools:
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Figma" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="AdobeXD" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Customer Development" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Django" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="React" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Prioritization" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Wireframing" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Jira" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Project Management" />
          <Chip size='small' style={{ marginLeft: 5}} variant="outlined" color="primary" label="Notion" />
          </div>
          <br/>

          Get in touch if you want to discuss Products, Tech, Business or Music, and let's start with Why!
        </Typography>
        </div>
        </Grid>
        </Grid>
        </Card>
        </div>
        </Grid>
            <Grid container item xs={12} sm={10}>
            <Grid item xs={12} sm={6}>
                <Card elevation={2}>
                <Typography style={{ paddingTop: 10, color: '#2CB67D' }} align="center" gutterBottom variant="h5" component="h2">
                 Things I write:
                </Typography>
                <Divider classes={{root: classes.divider}}  variant="middle"></Divider>
                <div style={{ padding: 10}} id="medium-widget">
                </div>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card elevation={2}>
                </Card>
            </Grid>
            </Grid>
        </Grid>
        </div>
        </Fade>
      );
}
