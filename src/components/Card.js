import React from 'react'
import { CardInner, CardOuter } from '../styles/Card.style'

const Card = () => {
  return (
    <CardOuter>
      <h2>Quote</h2>
      <CardInner>
        <p>Author</p>
        <p>: Position </p>
        <p>@ Company</p>
      </CardInner>
    </CardOuter>
  )
}

export default Card