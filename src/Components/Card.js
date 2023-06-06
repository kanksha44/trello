import React from 'react'

const Card = ({cardInfo}) => {
  return (
    <div className='bg-white p-3 mt-2 shadow-md rounded-md'>
     {cardInfo.title }
    </div>
  )
}

export default Card
