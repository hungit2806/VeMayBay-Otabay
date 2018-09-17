import React, { Component } from 'react';
import SearchingTicket from '../body/searching-ticket/SearchingTicket'
import ResultTicket from '../body/result-ticket/ResultTicket'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
export default class Body extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
              <Route exact path='/home'component={SearchingTicket}/>
              <Route exact path='/search-ticket'component={ResultTicket}/>
            </Switch>
            </BrowserRouter>
        )
    }
}