import Comp1 from "./Components/Comp1";
import Lession from "./Components/Lession";
import Product from "./Components/Product";
import Products from "./Components/Products";

function App() {

  const a = 60;

  const fname = "Janindu";
  const mname = "Maleesha";
  const lname = "Ariyasinghe";
  const age = "26";
  const role = "Software Engineer";

  const getFullName = (f,m,l) => {
    return `${f} ${m} ${l}`;
  }
  
  const arr = ["Apple", "Orange", "Mango"]; 

  const lang = <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>JavaScript</li>
               </ul>

  const obj = {
    fname: "Viraji",
    age: 25 
  } 

  return (
    <>
      {/* <Lession/> */}
      <Comp1/>
      {/* <Product/> */}
      {/* <div className="cont">
        <h1>Janindu Maleesha</h1>
        <p>{10*10}% for JSX</p>
        <p>{a}</p>
        <p>{a > 50 ? "Greater" : "Less"}</p>

        <h1>Employee Details</h1>
        <p>Full Name: {getFullName("Janindu", "Maleesha", "Ariyasinghe")}</p>
        <p>Age: {age}</p>
        <p>Role: {role}</p>
        <p>{fname} like to eat {arr[0]}</p>
        <p>{lang}</p>
        <p>{obj.fname} is {obj.age} years old.</p>
      </div> */}
    </>
  )
}

export default App
