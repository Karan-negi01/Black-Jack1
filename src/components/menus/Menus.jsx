import React, { useState } from 'react';
import menu from '../assests/menu.png'
import { MdAddToPhotos } from "react-icons/md";

const Menus = () => {
  return (
    <div>
       <div className="playlist-container">

<div className="restro-menu-header">

  <p className='restro-menu-heading'>Menus</p>
  <MdAddToPhotos className='restro-menu-icons' />
</div>
<div className="restro-menu-box">
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
  <img src={menu} className='menu-image' alt='menu'></img>
</div>
</div>

    </div>
  )
}

export default Menus
