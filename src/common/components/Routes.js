import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import BookStore from '../../components/BookStore/BookStore';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={BookStore} />
  </Route>
);
