import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const colors = ['white', 'eggshell-white', 'salmon']

const weightRange = [];
for (let i = 80; i <= 300; i++) {
  weightRange.push(i);
}

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired
};


export default Product;
