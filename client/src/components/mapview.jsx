/* eslint-disable */
import React from 'react';

class Mapview extends React.Component {
  constructor(props) {
  	super(props)
  }
  render() {
	  return (
	  	<div>
	  	  <h2>Mapview</h2>
	  	  <button onClick={this.props.onFormSubmit}>Search</button>
	  	</div>
	  )
  }
};

export default Mapview;