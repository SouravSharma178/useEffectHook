import React from 'react'

const Display = (props) => {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <img src={props.imageUrl} alt="" />
    </div>
  )
}

export default Display
