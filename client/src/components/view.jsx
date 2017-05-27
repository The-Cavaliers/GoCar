/* eslint-disable */
import React from 'react';
import Rideform from './rideform.jsx'
import Mapview from './mapview.jsx'

export default class View extends React.Component {
	constructor(props) {
		super(props)
      this.state = {
      	showMapview: false
      }
    this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(e) {
		e.preventDefault()
		if(this.state.showMapview) {
			this.setState({
				showMapview: false
			})
		} else {
			this.setState({
				showMapview: true
			})
		}
	}
	render() {
		return (
			<div>
			  <h1>CarGo</h1>
			  {!this.state.showMapview ?
			  	<Rideform
			  	  onFormSubmit={this.onFormSubmit}
			  	/> :
			  	<Mapview
			  	  onFormSubmit={this.onFormSubmit}
			  	/>
			  }
			</div>
		)
	}
}
