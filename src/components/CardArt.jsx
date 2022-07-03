import React from 'react'
import PropTypes from 'prop-types'

function CardArt(props) {
  return (
    <div class="card-art">
      <div class="outside">
        <div class="front">
          <p>Happy Birthday</p>
          <div class="cake">
            <div class="top-layer"></div>
            <div class="middle-layer"></div>
            <div class="bottom-layer"></div>
            <div class="candle"></div>
          </div>
        </div>
        <div class="back"></div>
      </div>
      <div class="inside">
        <p>nói chung là bọn tui mong bà luôn vui,vui vẻ,và mãi xinh heng</p>
      </div>
    </div>
  )
}

CardArt.propTypes = {}

export default CardArt
