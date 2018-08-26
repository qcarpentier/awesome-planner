import React from 'react'

const Header = props => {
  return (
    <div className="header-container">
      <div className="username">
        Hi {props.username}!
      </div>
    </div>
  )
}

export default Header;