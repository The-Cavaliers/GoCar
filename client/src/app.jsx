/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import View from './components/view.jsx';

class App extends React.Component {
  constructor() {
    super();
  }
    render() {
      return (
        <View />
      )
  };
}

ReactDOM.render(<App/>, document.getElementById('root'));
=======
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import Main from './components/main';
import Index from './components/index';
import createGroup from './components/createGroup';
import joinGroup from './components/joinGroup';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const router =(
  <MuiThemeProvider>
    <Provider store={store}> 
      <Router history={history}>
        <Route path ='/' component={Index}>
          <IndexRoute component ={createGroup}></IndexRoute>
          <Route path ='/createGroup' component={joinGroup}></Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(router, document.getElementById('root'));
>>>>>>> Redux Setup
