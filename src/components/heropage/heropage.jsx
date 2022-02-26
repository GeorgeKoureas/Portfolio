import React, { useEffect } from 'react';
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Item from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import George from "../../assets/hero.png";
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';





export default function HeroPage(props){




    const useStyles = makeStyles((theme) => ({
        mainwrapper:{
            display: 'flex',
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
        card:{
            height: '100%',
            padding: 0,
        },
        divider: {
            background: '#2CB67D',
        },
        hero: {

            margin: 4,
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
            width: '100%',
          [theme.breakpoints.down("xs")] : {
            width: '100%',
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
        <div className={classes.mainwrapper} style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Grid container xs={12} sm={10} spacing = {3} style={{ marginTop: '6em' }}>
        <Grid item xs={12}>
        <Card elevation={2}>
        <Grid container item spacing={1}  direction='column' justify='center'>
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
        <Grid container item xs={12} direction='column' justify='center'>
        <Grid container item direction="column" justify='center' alignItems='center'>
        <Grid item>
        <Hidden smUp>
        <Typography Wrap variant="h5" component="p" style={{ padding: 10, color: '#2CB67D' }}> 
            George.Koureas
        </Typography>
        </Hidden>
        </Grid>
        <Grid item xs={12}>
        <Typography Wrap variant="subtitle1" component="p" style={{ padding: 10 }}> 
            Product <span style={{ color:'#2CB67D' }}>|</span> Engineering <span style={{ color:'#2CB67D' }}>|</span> Business
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <Item>
        <Typography Wrap variant="body2" component="p" style={{marginBottom: 15, padding: 15}}>
          Transitioned from Mechanical Engineering to Product management with the sole purpose of turning data into scalable and impactful software products either to solve a problem, or simply for fun.
          <br/>
          <br/>
          Welcome to my private portfolio. Here you can find things I write or read as well as the projects that I have been working on. If you are interested feel free to get in touch!
        </Typography>
        </Item>
        </Grid>
        <Grid container item xs={12} style={{ paddingBottom: 5 }} direction="column" alignItems='center' justify='center'>
          <Grid item xs={12}>
          <Typography Wrap variant="subtitle1" component="p" style={{ padding: 5 }}>
          Skills <span style={{ color:'#2CB67D' }}>|</span> Tools:
          </Typography>
          </Grid>
          <Grid container item xs={12} spacing={2}>
          <Grid container direction="column" item xs={6} sm={3}>
          <Chip size='small' variant="outlined" color="primary" label="Figma" />
          <br/>
          <Chip size='small' variant="outlined" color="primary" label="AdobeXD" />
          <br/>
          <Chip size='small' variant="outlined" color="primary" label="Customer Development" />
          </Grid>
          <Grid container direction="column" item xs={6} sm={3}>
          <Chip size='small' variant="outlined" color="primary" label="Django" />
          <br/>
          <Chip size='small' variant="outlined" color="primary" label="React" />
          <br/>
          <Chip size='small' variant="outlined" color="primary" label="Prioritization" />
          </Grid>
          <Grid container direction="column" item xs={6} sm={3}>
          <Chip size='small' variant="outlined" color="primary" label="Wireframing" />
          <br/>
          <Chip size='small' variant="outlined" color="primary" label="Jira" />
          <br/>
          <Chip size='small' variant="outlined" color="primary" label="Project Management" />
          </Grid>
          <Grid container direction="column" item xs={6} sm={3}>
          <Chip size='small' variant="outlined" color="primary" label="Notion" />
          </Grid>
          </Grid>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
        <br />
        </Card>
        </Grid>
            <Grid item xs={12} sm={6}>
                <Card elevation={2} className={classes.card}>
                <Typography style={{ paddingTop: 10, color: '#2CB67D' }} align="center" gutterBottom variant="h5" component="h2">
                 Things I write:
                </Typography>
                <Divider classes={{root: classes.divider}}  variant="middle"></Divider>
                <div style={{ padding: 10}}>
                </div>
                </Card>
            </Grid>
            <Grid item  alignItems="stretch" xs={12} sm={5}>
                {/* <Card elevation={2} className={classes.card}>
                    Test
                </Card> */}
            </Grid>
            </Grid>
        </div>
        </Fade>
      );
}
