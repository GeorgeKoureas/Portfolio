import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { motion } from 'framer-motion'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { Hidden } from '@material-ui/core'
import { Divider } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';




import { projectInfo } from '../../constants'









export default function DetailCard(props){

    const projectID = props.match.params.projectID
    const project = projectInfo[projectID]
    console.log(project)

    const useStyles = makeStyles((theme) => ({
        arrow: {
            background: project.color,
        },
        divider: {
            background: project.color,
        },
        wrapper: {
            marginTop: "8em",
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 15,
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
    
        },
        stack: {
            marginTop: 13,
            padding: 0,
            color: project.color,
            borderColor: project.color,
        },
        text:{
            marginTop: 15,
        },
        fl:{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 15,
        },
        root: {
          display: 'flex',
          width: '75%',
          [theme.breakpoints.down("xs")] : {
            width: '95%',
            height: 'auto'}
    
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

    return(
        <motion.div
            initial={{ opacity: 0.5, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <div className={classes.wrapper}>
        <Card className={classes.root} elevation={2}>
            <Hidden xsDown>
            <CardMedia
             data-src={project.imagemin}
             component="img"
             className={classes.media}
             image={project.image}
             title =  {project.title}
            />
            </Hidden>
            <Grid container spacing={0} style={{paddingRight: 15}}>
            <Grid container item xs={12} style={{paddingBottom: 0, marginBottom: 0}}>
            <Grid item xs={11}>
            <CardContent style={{paddingBottom: 0, marginBottom: 0}}>
                <Typography gutterBottom variant="h5" component="h2">
                {project.title}
                </Typography>
                <Typography wrap variant="body2" component="p">
                {project.description}
                </Typography>
            </CardContent>
            </Grid>
            <Grid item xs={1}>
            <CardActions >
                <IconButton
                    component={Link}
                    to='/what'>
                    <ArrowBackIcon style={{ color: project.color }}/>
                </IconButton>
            </CardActions>
            </Grid>
            <Grid container item xs={12}>
            <CardContent style={{paddingBottom: 0, marginBottom: 0}}>
                <Grid item xs={12}>
                <Divider classes={{root: classes.divider}} variant="fullWidth" />
                </Grid>
                <Grid item xs={12}>
                <Typography className={classes.text} wrap variant="body1" component="p" style={{ color: project.color }}>
                Description:
                </Typography>
                <Typography className={classes.text} wrap variant="body2" component="p">
                {project.description_large}
                </Typography>
                <Typography className={classes.text} wrap variant="body1" component="p" style={{ color: project.color }}>
                Stack:
                </Typography>
                <div className={classes.fl}>
                {project.stack.map(stack => (<Chip size='small' style={{ marginLeft: 5}} variant="outlined" classes={{root: classes.stack}} label={stack} />))}
                </div>
                <Typography className={classes.text} wrap variant="body1" component="p" style={{ color: project.color }}>
                Links:
                </Typography>
                <div className={classes.fl}>
                {Object.keys(project.links).map((linkName, link) => (<Button size="small" href={project.links[linkName]} target="_blank" color="default">{linkName}</Button>))}
                </div>
                </Grid>
            </CardContent>
            </Grid>
            </Grid>
            </Grid>
        </Card>
        </div>
        </motion.div>
    )
}
