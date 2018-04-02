// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]
    const isValidWeight = weight > 80 && weight < 300

    if (weight === undefined) {
      return new Error('Weight must.');
    }

    if (isNaN(weight)) {
      return new Error('Weight must be a number.');
    }

    if (!isValidWeight) {
      return new Error('The weight prop needs to be bewteen 80 and 300.')
    }
  },
}
