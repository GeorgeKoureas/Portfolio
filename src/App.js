import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Brightness7Icon  from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom'
import Navbar from '../src/components/Navbar/navbar';
import MediaCard from '../src/components/ListCard/cardcarousel';
import DetailCard from '../src/components/DetailCard/detailcard';
import HeroPage from '../src/components/HeroPage/heropage';
import WhyPage from '../src/components/WhyPage/whypage';  
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../src/components/Navbar/footer';

import './components/ListCard/cardcarousel.scss'


export const light = {

  palette: {

  type: 'light',
  primary: {
    main: '#2CB67D',
  },
  secondary: {
    main: '#fff',
  },
  },
}

export const dark = {

  palette: {

  type: 'dark',
  primary: {
    main: '#2CB67D',
  },
  secondary: {
    main: '#fff',
  },
  },

}


  function App() {
    const [theme, setTheme] = useState(false)

    const handleEvent = event => {
      setTheme(!theme); 
  }

    const icon = !theme ? <Brightness7Icon  fontSize='small' /> : <Brightness3Icon fontSize='small' /> 

    const appliedTheme = createMuiTheme(theme ? light : dark)


      return(
        <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route 
              path={'/:page'}
              render={({ match }) => <Navbar icon={icon} match={match} theme={theme} clicked={handleEvent}/>}
            />
            <Redirect to={'/who'} />
          </Switch>
          <Switch>
            <Route 
              exact path={'/who'}
              component = {HeroPage}
            />
          </Switch>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route
                exact path={'/what'}
                component = {MediaCard}
              />
              <Route
                exact path={'/what/:projectID'}
                component = {DetailCard}
              />
            </Switch>
          </AnimatePresence>
        <Switch>
            <Route 
              exact path={'/why'}
              component = {WhyPage}
            />
        </Switch>
        <Route 
              path={'/:page'}
              render={({ match }) => <Footer match={match} />}
            />
        </Router>
        </ThemeProvider>
      )
  }


export default App