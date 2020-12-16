import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import './navbar.scss'
import { projectInfo } from '../../constants'






const NavLink = ({ title, selected, edge, color, theme }) => {
    const link = title
    const padding = edge ? '0rem' : '0.9rem'

    return (
        <div className={theme ? 'header-link-light' : 'header-link-dark'} >
                <Link
                    to = {`/${link}`}
                    style={{ textDecoration: 'none'}}
                    className={selected ? 'header-no-link' : null}
                >
                  <div className={"header-content"}>
                    <h3 style={selected ? { color, paddingRight: padding }  : { paddingRight: padding }}>{title}</h3>
                    <div className={selected ? 'header-dot-active' : 'header-dot'}>
                        <h3 style={{ color }}>•</h3>
                    </div>
                  </div>
                </Link>
        </div>
    )
}


export default function ButtonAppBar(props) {



    const { page } = props.match.params
    const projectID = window.location.pathname
    var id = projectID.split('/')
    var currid=''
    { id.length === 3 ?  currid = id[2] : currid = '' }
    const project = projectInfo[currid]

    const useStyles = makeStyles((theme) => ({
      projectactive: {
        color: project ? project.color : theme.palette.primary.main
      },

      root: {
          flexGrow: 1,
      },
      title: {
          flexGrow: 1,
      },
      headerLink: {
        [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
      },
    }));

    console.log(props.theme)
    

    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={1} position="fixed" style={ props.theme ? { marginBottom: 50, background: '#fff' } : { marginBottom: 50, background: '#424242' }}>
        <Toolbar className={classes.headerLink}>
          <Hidden xsDown>
          <Typography variant="h5" component="h2" className={classes.title} style={ project ? {color: project.color} : {color:"#2CB67D"}}>
            George.Koureas
          </Typography>
          </Hidden>
          <NavLink title='who' color = { project ? project.color : "#2CB67D" } selected={ page === 'who' ? true : false } theme={props.theme} />
          <NavLink title='what' color = { project ? project.color : "#2CB67D" } selected={ page === 'what' ? true : false } theme={props.theme} />
          <NavLink title='why' color = { project ? project.color : "#2CB67D" } selected={page === 'why' ? true : false } theme={props.theme} />
          <IconButton
            edge="end"
            classes={{ root: classes.projectactive }}
            aria-label="mode"
            onClick={props.clicked}
          >
            {props.icon}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
