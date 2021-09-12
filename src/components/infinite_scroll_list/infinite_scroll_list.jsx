import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';



import { projectInfo } from '../../constants'



export default function InfiniteScrollList() {

    const perPage = 6;
    const [lastPosition, setLastPosition] = useState(perPage);
    const [allProjects, setAllProjects] = useState(projectInfo.slice(0, perPage));
    const [hasMore, setHasmore] = useState(true);
    
    

    const loadProducts = () => {
      setTimeout(() => {
        setAllProjects((prev) => [...prev, ...projectInfo.slice(lastPosition, lastPosition + perPage)]);
      }, 2000);

      setLastPosition(lastPosition + perPage);
    };
    

    const useStyles = makeStyles(theme => ({
        mainwrapper:{
            display: 'flex',
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
      [theme.breakpoints.down("xs")] : {
        height: 220
      }
    },
    mediamain: {
      height: 370,
      width: "100%",
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


return (
    <Fade in={true} timeout={1200}>
    <div className={classes.mainwrapper} style={{ paddingLeft: 15, paddingRight: 15 }}>
    <Grid container sm={10} spacing = {3} alignItems="stretch" style={{ marginTop: '6em' }}>
            {allProjects.map((project) => (
              <Grid item justify="center"  alignItems="center" key={project.id} xs={12} sm={6} md={4} style={{ zIndex: 2 }}>
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
                  </Grid>
            ))}
          </Grid>
    </div>
    </Fade>
 );
}

