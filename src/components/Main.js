import React, { Component } from 'react';
import Header from './header/Header'
import Footer from './footer/Footer'
import Body from './body/Body'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { orange500, deepOrange500, orange700 } from 'material-ui/styles/colors';
import { orange900 } from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
  palette:{
    primary1Color: orange700,
    primary2Color: orange700,
    primary3Color: orange700,
    accent1Color: orange700,
    accent2Color: orange700,
    accent3Color: orange700,
    pickerHeaderColor : orange700
  }
})
class Main extends Component {
  render() {
    return (     
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="fh5co-page">
            <Header/>
            <Body/>
            <Footer/>
        </div>
        </MuiThemeProvider>
    );
  }
}

export default Main;
