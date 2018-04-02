// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';
class Product extends React.Component {
  render(){
    const {name, producer, hasWatermark, color, weight} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <p>{producer}</p>
        <p>{hasWatermark}</p>
        <p>{color}</p>
        <p>{weight}</p>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName)=> {
    let value = props[propName]
    if (value === undefined){
      return new Error ("Needs Number")
    }
    if (isNaN(value)) {
      return new Error ("Needs to be a number")
    }
    let correctRange = (value > 80 && value < 300)
    if(!correctRange){
      return new Error ("not correct range")
    }

  }
}


export default Product
