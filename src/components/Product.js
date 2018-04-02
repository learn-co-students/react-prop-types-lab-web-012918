// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render() {
    const {name, producer, hasWatermark, color} = this.props;
    return(
      <div>
        <p>Name: {name}</p>
        <p>Producer: {producer}</p>
        <p>Watermarked: {hasWatermark}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    "white", "eggshell-white", "salmon"
  ]).isRequired,
  weight: (props, propName) => {
      const weight = props[propName];
      const isValidWeight = weight > 80 && weight < 300;
      if (props[propName] === undefined){
        return new Error('Must be a number')
      }
      if(isNaN(weight)) {
        return new Error("weight should be a number");
      }
      if (!isValidWeight) {
        return new Error('Weight should be between 80 and 300.');
      }

    }
}
