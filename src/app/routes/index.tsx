import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import About from 'containers/About';
import Counter from 'containers/Counter';
import Stars from 'containers/Stars';
// import { App, Home, About, Counter, Stars } from 'containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="counter" component={Counter} />
    <Route path="stars" component={Stars} />
  </Route>
);
