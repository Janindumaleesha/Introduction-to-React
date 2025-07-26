import React, { useEffect, useState } from 'react'
import HeaderContent from '../components/HeaderContent/HeaderContent.jsx'

function about() {

  // let num = 3;

  const [num, setNum] = useState(3);

  const [count, setCount] = useState(0);

  const [posts, setPosts] = useState([]);

  function handleClick() {
    setNum(4);
  }

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.log('Hi');
  },[])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((blogPosts) => setPosts(blogPosts))

    console.log('run');
  },[])

  // let number = 10;

  // if (number == 5)
  //   alert('Hi there!')
  // else
  //   alert('Hi Maleesha!')

  return (
    <>
        <HeaderContent />
        <div id='wrpper'>
          <button onClick={handleClick}>Click</button>
          <p>{num}</p>

          <h3>Counter</h3>
          <button onClick={increase} style={{width:50,height:20,margin:10}}>+</button>
          <button onClick={decrease} style={{width:50,height:20}}>-</button>
          <p>{count}</p>
          <ul>
            {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
          </ul>
        </div>
    </>
  )
}

export default about