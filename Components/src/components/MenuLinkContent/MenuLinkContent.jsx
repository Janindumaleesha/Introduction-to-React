import React from 'react'
import './MenuLinkContent.css'

function MenuLinkContent(props) {
  return (
    <>
        <a href={props.url} className='link'>{props.linkname}</a>
    </>
  )
}

export default MenuLinkContent