import React, { useEffect, useState } from 'react'
import { data } from '../Data'
import './Carousel.css'

function Carousel() {

    const [activeimg, setActiveImg] = useState(0);

    const handlePrev = () => {
        if (activeimg <= 0){
            setActiveImg(data.length - 1);
        }else{
            setActiveImg(activeimg - 1);
        }
    }

    const handleNext = () => {
        setActiveImg((activeimg + 1) % data.length);
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            handleNext();
        },3000);
        
        return () => {
            clearTimeout(timer);
        }
    },[activeimg])

  return (
    <>
        <div className="carousel">
            <button onClick={handlePrev}>Previous</button>
            {data.map((item,i) => {
                return(
                    <img className={activeimg === i ? "img" : "hide"} src={item.url} alt={item.alt} key={item.id} />
                )
            })}
            <button onClick={handleNext}>Next</button>
        </div>
    </>
  )
}

export default Carousel