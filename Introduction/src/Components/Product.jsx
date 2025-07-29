import React from 'react'

function Product() {

  let items = ["item1", "item2", "item3", "item4", "item5", "item6"];

  return (
    <>
        <ul>
            {items.map((item) => {
                return(
                    <li key={item}>Step 01 {item}</li>
                )
            })}

            {items.map((item) => (
                <li key={item}>Simplify step 01 {item}</li>
            ))}
        </ul>
    </>
  )
}

export default Product