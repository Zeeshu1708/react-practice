import React from 'react'
import '../style/App.css'

const Coin = ({name, symbol,imgSrc,price}) => {
  return (
    <div className="coin">
    <img src = {imgSrc} alt="Coin Image" />
      <h1>{symbol}</h1>
      <h3>{name}</h3>
      <h4>₹{price}</h4>
    </div>
  )
}

export default Coin
