// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

let colors = ['white', 'eggshell-white', 'salmon']

class Product extends React.Component {
  render(){
    return(
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
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
  color: PropTypes.oneOf(colors).isRequired,
  weight: checkWeight
}

function checkWeight(props, propName){
  if (props[propName] === undefined){
    return new Error('Must be a number')
  }
  if (isNaN(props[propName])){
    return new Error('Must be a number.')
  }
  if(props[propName] < 80 || props[propName]> 300){
    return new Error('Must be between 80 and 300')
  }
}

export default Product
