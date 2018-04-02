// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render(){
    return(
      <div>
        <h1> {this.props.name} </h1>
        <p> {this.props.producer} </p>
        <p> {this.props.hasWatermark} </p>
        <p> {this.props.color} </p>
        <p> {this.props.weight} </p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['salmon', 'white', 'eggshell-white']).isRequired,
  weight: PropTypes.number.isRequired,
  customProp: function(props){
    if (props.weight > 300 || props.weight < 80 ){
    return new Error(
        'Invalid weight supplied. Must be between 80 and 300 Validation failed.'
      )
    }
  }
}
// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
