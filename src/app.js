import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga'
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Brightness7Icon  from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import InfiniteScrollList from './components/infinite_scroll_list/infinite_scroll_list'
import DetailCard from './components/detailcard/detailcard';
import HeroPage from './components/heropage/heropage';
import WhyPage from './components/whypage/whypage';  
import { AnimatePresence } from 'framer-motion'
import Footer from './components/navbar/footer';

import './components/listcard/cardcarousel.scss'


export const light = {

  palette: {

  type: 'light',
  primary: {
    main: '#2CB67D',
  },
  secondary: {
    main: '#fff',
  },
  background: {
    default: '#e9e5df',
  }
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

ReactGA.initialize('G-9DC5CVYT6R')

function App() {
    const [theme, setTheme] = useState(false)

    const handleEvent = event => {
      setTheme(!theme); 
  }






    const icon = !theme ? <Brightness7Icon  fontSize='small' /> : <Brightness3Icon fontSize='small' /> 

    const appliedTheme = createMuiTheme(theme ? light : dark)

    useEffect(() => {

      ReactGA.pageview(window.location.pathname + window.location.search)
  
    });

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
                component = {InfiniteScrollList}
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
