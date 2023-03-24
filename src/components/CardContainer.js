import React from 'react'
import Card from './Card'

const CardContainer = ({ cardList }) => {
  return (
    <div className='d-flex flex-wrap gap-4 p-5 align-items-center justify-content-center'>
      {cardList && cardList.length > 0 ? cardList.map((card) => (
        <Card
          image={card.path}
          title={card.title}
          discountPrice={card.discountPrice}
          ogPrice={card.ogPrice}
        />
      )) : ""}
    </div>
  )
}

export default CardContainer