import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Main from '../components/Main'
export default function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}
