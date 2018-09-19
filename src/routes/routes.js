import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Main from '../components/Main'
import RedirectRoute from '../components/RedirectRoute'
export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Main}/>
        <Route exact path='/search-ticket' component={Main}/>
        <Route exact component={RedirectRoute} />
      </Switch>
    </BrowserRouter>
  );
}
