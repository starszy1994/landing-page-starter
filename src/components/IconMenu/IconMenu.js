import React from 'react'

const IconMenu = ({logo, title, description}) => {
  return (
    <div>
        <img src={logo}/>
        <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default IconMenu;
