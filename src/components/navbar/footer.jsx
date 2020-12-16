import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseIcon from '@material-ui/icons/Close';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Zoom from '@material-ui/core/Zoom';
import { SiDribbble } from 'react-icons/si'
import { projectInfo } from '../../constants'
import './footer.scss'



export default function FloatingActionButtons(props) {

  const projectID = window.location.pathname
  var id = projectID.split('/')
  var currid=''
  { id.length === 3 ?  currid = id[2] : currid = '' }
  const project = projectInfo[currid]

  const useStyles = makeStyles((theme) => ({
    projectactive: {
      background: project ? project.color : theme.palette.primary.main
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    error: {
      backgroundColor: '#e53e3e',
  
      "&:hover": {
        background: "#e53e3e"
      }
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const [showChildren, setShowChildren] = React.useState(false)
  const onClick = () => 
  {
    setShowChildren((prev) => !prev)
  }
  const fabStyle = {
    right: 40,
    bottom: 20,
    position: 'fixed'
};
  const fabChildStyle = {
    right: 48,
    bottom: 85,
    position: 'fixed'
  }
  const fab2ChildStyle = {
    right: 48,
    bottom: 135,
    position: 'fixed'
  }

  const fab3ChildStyle = {
    right: 48,
    bottom: 185,
    position: 'fixed'
  }

  return (
    <div className = {'footer'}>
            <Zoom in={showChildren} unmountOnExit style={{ transitionDelay: showChildren ? '200ms' : '0ms' }}>
            <Fab classes={{ root: classes.projectactive }} aria-label="linkedin" size="small" style={fab3ChildStyle} href="https://www.linkedin.com/in/georgekoureas/" target="_blank">
              <LinkedInIcon color="secondary" />
            </Fab>
            </Zoom>
            <Zoom in={showChildren} unmountOnExit style={{ transitionDelay: showChildren ? '150ms' : '0ms' }}>
            <Fab classes={{ root: classes.projectactive }} aria-label="github" size="small" style={fab2ChildStyle} href="https://github.com/GeorgeKoureas" target="_blank">
              <GitHubIcon color="secondary" />
            </Fab>
            </Zoom>
            <Zoom in={showChildren} unmountOnExit style={{ transitionDelay: showChildren ? '100ms' : '0ms' }}>
            <Fab classes={{ root: classes.projectactive }} aria-label="github" size="small" style={fabChildStyle} href="https://dribbble.com/GeorgeKoureas" target="_blank">
              <SiDribbble style={{color: "white" }} />
            </Fab>
            </Zoom>
        <Fab classes={{ root: showChildren ? classes.error : classes.projectactive }}  aria-label="share" onClick={onClick} style={fabStyle}>
          { showChildren ? <CloseIcon color="secondary" className={ showChildren ? "rotatein" : ""}  /> : <LinkIcon color="secondary" className={ showChildren ? "" : "rotateout"}  /> }
        </Fab>
    </div>
  );
}
