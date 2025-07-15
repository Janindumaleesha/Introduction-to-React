import React from 'react'
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import MenuLinkContent from '../MenuLinkContent/MenuLinkContent'

function HeaderContent() {
  return (
    <div id="navcontent">
        <a href='' ><img src={logo} alt='React' /></a>
        <a href='' ><img src='vite.svg' alt='React' /></a>
        <div>
          <MenuLinkContent linkname='Home' url='#home'/>
          <MenuLinkContent linkname='About' url='#about'/>
          <MenuLinkContent linkname='Contact' url='#contact'/>
          <MenuLinkContent linkname='Login' url='#login'/>
        </div>
    </div>
  )
}

export default HeaderContent