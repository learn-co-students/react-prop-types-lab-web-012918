// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{

  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes={
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, component){
    if (props[propName] === undefined){
      return new Error(`${propName} must be a number`)
    }
    if(isNaN(props[propName])){
      return new Error(`${propName} should be a number`)
    }
    if(props[propName]<80 || props[propName]>300){
      return new Error(`${propName} is outside of the range`)
    }
  }


}

export default Product;
