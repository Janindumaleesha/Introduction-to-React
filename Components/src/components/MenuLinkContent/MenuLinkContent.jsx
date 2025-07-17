import React from 'react'
import './MenuLinkContent.css'
import { Link } from "react-router";

function MenuLinkContent(props) {
  return (
    <>
        {/* <a href={props.url} className='link'>{props.linkname}</a> */}
        <Link to={props.url} className='link' >{props.linkname}</Link>
    </>
  )
}

export default MenuLinkContent