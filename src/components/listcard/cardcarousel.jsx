import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Zoom from '@material-ui/core/Zoom';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion'

import {
    FaChevronLeft,
    FaChevronRight,
  } from 'react-icons/fa';
import { projectInfo } from '../../constants'

import './cardcarousel.scss'






export default function MediaCard() {

    
    const leftArrow = useRef();
    const rightArrow = useRef();

    const Arrow = (props) => {
        const { icon: Icon, clickFunction, myRef, arrowClass } = props;
        return (
          <div
            className={`arrow-container ${arrowClass}`}
            onClick={clickFunction}
            ref={myRef}
          >
            <Icon color="grey" size='3rem' />
          </div>
        );
    };
    
    const handleClick = (direction) => {
        const numProjects = projectInfo.length;
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numProjects) % numProjects;

        setSlideIn(false)

        setTimeout(() => {
          setIndex(newIndex)
          setSlideIn(true)
        }, 500) 
    }
    
    const useStyles = makeStyles(theme => ({
      mainwrapper:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
    },
        wrapper: {
            width: "100%",
            marginTop: "10em",
            justifyContent: "center",
        },
        gridroot: {
            flexGrow: 1
        },
        media: {
          height: 270,
          padding: 3,
          [theme.breakpoints.down("xs")] : {
            height: 220
          }
        },
        mediamain: {
          height: 370,
          width: "100%",
          padding: 3,
          [theme.breakpoints.down("xs")] : {
            height: 270
          }
        },
        content: {
            width: "100%",
            height: "130px",
        },
        carsl: {
          width: '100%',
          [theme.breakpoints.down("xs")] : {
            width: '100%',
            }
        },
    }));

    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true)



    function checkActive(obj) {
      return (
        index > 0 && index < projectInfo.length - 1 ?
        (obj.id === index + 1 || obj.id === index - 1 || obj.id === index)
        :
        (index === 0 ?
        (obj.id === index + 1 || obj.id === projectInfo.length - 1 || obj.id === index)
        :
        (obj.id === index || obj.id === index - 1 || obj.id === 0 )
        )
      )
    }

    function orderActive(array){
      const [first, second, third] = array;
      return (
        index > 0 && index < projectInfo.length - 1 ?
        array
        :
        (index === 0 ?
        array = [third, first, second]
        :
        array = [second, third, first]        
        )
      )
    }

    return (
    <div className={classes.mainwrapper} style={{ paddingLeft: 40, paddingRight: 40 }}>
    <Grid container spacing = {5}>
    <Grid item xs={12}>
    <motion.div
      initial={{ opacity: 1, scaleX: 1 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 2 }}
      transition={{duration: 0.5}}
    >
      <Grid container item direction="column" >
        <Grid container item xs={12}  spacing={1} className={classes.wrapper} justify="center" alignItems="center">
          <Grid container item xs={1} justify="center" alignItems="center">
          <Arrow
              icon={FaChevronLeft}
              clickFunction = {() => handleClick('left')}
              myRef={leftArrow}
          />
          </Grid>
          <Grid container justify="center"  alignItems="center" xs={10} sm={10} spacing={0}> 
            {orderActive(projectInfo.filter(checkActive)).map((project, newindex) => (
              <Grid item justify="center"  alignItems="center" key={project.id} xs={12} sm={4} style={newindex === 1 ? {zIndex:2} : {opacity:0.7, zIndex:0} }>
                    <Zoom in={slideIn} timeout={600}>
                      <Paper elevation = { newindex === 1 ? 15: 0 } 
                              className={ newindex === 1 ? 'maincard' 
                                                          :
                                                          (newindex === 0 ? 'sidecardleft' 
                                                          : 'sidecardright') } >
                          { newindex === 1 ? 
                          <Link to={{
                                      pathname:`/what/${project.id}`, 
                                    }}
                                      style={{ textDecoration: 'none' }}>
                          <Card className={classes.carsl}>
                              <CardActionArea>
                              <CardMedia
                                  data-src={project.imagemin}
                                  component="img"
                                  className={classes.mediamain}
                                  image={project.image}
                                  title =  {project.title}
                              />
                              <CardContent className={classes.content}>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  {project.title}
                                  </Typography>
                                  <Typography variant="body2" color="#2CB67D" component="p">
                                  {project.description}
                                  </Typography>
                              </CardContent>
                              </CardActionArea>
                          </Card>
                          </Link>
                           :
                           <Card variant="outlined" >
                              <CardMedia
                                  data-src={project.imagemin}
                                  component="img"
                                  className={classes.media}
                                  image={project.image}
                                  title =  {project.title}
                              />
                              <CardContent className={classes.content}>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  {project.title}
                                  </Typography>
                                  <Typography noWrap variant="body2" color="#2CB67D" component="p">
                                  {project.description}
                                  </Typography>
                              </CardContent>
                          </Card> }
                      </Paper>
                    </Zoom>
                  </Grid>
            ))}
          </Grid>
          <Grid container item xs={1} justify="center" alignItems="center">
          <Arrow
            icon={FaChevronRight}
            clickFunction = {() => handleClick('right')}
            myRef={rightArrow}
          />
          </Grid>
        </Grid>
        </Grid>
    </motion.div>
    </Grid>
    <Zoom in={true} timeout={600}>
    <Grid container item xs={12} spacing={2} justify="center" alignItems="center">
    <Grid item xs={10} sm={5}>
    <Paper elevation={15}>
    <Card>
    </Card>
    </Paper>
</Grid>
<Grid item xs={10} sm={5}>
    <Card>
    </Card>
</Grid>
</Grid>
</Zoom>
</Grid>
</div>
    );
}
