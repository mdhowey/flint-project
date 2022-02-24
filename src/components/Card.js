import React from 'react'
import { Button } from '../styles/ButtonMain.style'
import { CardInner, CardOuter } from '../styles/Card.style'

const Card = (props) => {
  return (
    <CardOuter>
      <h2>{props.quote}</h2>
      <CardInner>
        <p className='author'>{props.author}</p>
        <p className='position'>{props.position}</p>
        <p>{props.company}</p>
      </CardInner>
      <Button>Read more →</Button>
    </CardOuter>
  )
}

export default Card