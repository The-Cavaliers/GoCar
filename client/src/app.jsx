/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
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
