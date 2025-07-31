import React, { useState } from 'react'
import { data } from '../Data'
import './Carousel.css'

function Carousel() {

    const [activeimg, setActiveImg] = useState();

  return (
    <>
        <div className="carousel">
            <button>Previous</button>
            {data.map((item) => {
                return(
                    <img className='img' src={item.url} alt={item.alt} key={item.id} />
                )
            })}
            <button>Next</button>
        </div>
    </>
  )
}

export default Carousel