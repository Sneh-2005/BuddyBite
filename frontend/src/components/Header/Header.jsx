import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Get food that brings you closer! BuddyBite delivers your favorite meals from top restaurants. Order now and share the love!</p>
            {/* <button>View Menu</button> */}
            <a href='#explore-menu'>View Menu</a>
        </div>
    </div>
  )
}

export default Header