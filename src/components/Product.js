// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'


// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!
class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h4>Producer: <b>{this.props.producer}</b></h4>
        <h4>Watermark: <b>{this.props.hasWatermark}</b></h4>
        <h3>Color: <b>{this.props.color}</b></h3>
        <h3>Weight: <b>{this.props.weight}</b></h3>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

let weight_range = [];
for (let i = 80; i <= 300; i++) {
  weight_range.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
}

export default Product
