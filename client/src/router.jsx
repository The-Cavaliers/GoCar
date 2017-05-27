/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import Main from './components/main';
import App from './components/app';
import createGroup from './components/createGroup';
import joinGroup from './components/joinGroup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const router =(
  <MuiThemeProvider>
    <Provider store={store}> 
      <Router history={history}>
        <Route path ='/' component={App}>
          <IndexRoute component ={createGroup}></IndexRoute>
          <Route path ='/createGroup' component={joinGroup}></Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(router, document.getElementById('root'));

