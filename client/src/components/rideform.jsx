/* eslint-disable */
import React from 'react';

class Rideform extends React.Component {
	constructor(props) {
		super(props)
  }
  render() {

		return (
		    <form>
		    	<input value='' placeholder='Leaving from' />
		    	<input value='' placeholder='Going To' />
		    	<button onClick={this.props.onFormSubmit}>Submit</button>
		    </form>
		)
  }
}

export default Rideform;