// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h2>{this.props.hasWatermark}</h2>
        <h2>{this.props.color}</h2>
        <h2>{this.props.weight}</h2>
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
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    //conditional to check if obj[weight] does not exist so return error
    const weight = props[propName]
    if (weight === undefined) {
      return new Error('The `weight` prop is required.')
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.')
    }

    const validWeight = (weight > 80 && weight < 300)

    if (!validWeight) {
      return new Error('The `weight` prop should range between 80 and 300.')
    }
  },
}

export default Product
