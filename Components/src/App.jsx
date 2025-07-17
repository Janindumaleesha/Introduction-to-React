import BodyContent from "./components/BodyContent/BodyContent"
import FooterContent from "./components/FooterContent/FooterContent"
import HeaderContent from "./components/HeaderContent/HeaderContent"
import './App.css'

function App() {

  // function hello1(e) {
  //   console.log("Hello World 1!", e);
  // }

  // const hello2 = (e) => {
  //   console.log("Hello World 2!", e.target);
  // }

  // function hello3(name) {
  //   console.log("Hello World 3!" + name);
  // }

  // const hello4 = (name, e) => {
  //   console.log("Hello World 4!" + name, e);
  // }

  const style_css = {color:'white',background:'black'}

  return (
    <>
      <div id="wrapper">

        {/* <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec vel egestas dolor, nec dignissim metus. Donec augue elit, 
          rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum 
          libero sed pharetra.</p>

        <p style={{color:'white',background:'blue',marginBottom:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec vel egestas dolor, nec dignissim metus. Donec augue elit, 
          rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum 
          libero sed pharetra.</p>

        <p style={style_css}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec vel egestas dolor, nec dignissim metus. Donec augue elit, 
          rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum 
          libero sed pharetra.</p> */}

        {/* <button onClick={hello1}>Click</button>
        <button onClick={hello2}>Click</button>
        <button onClick={ () => {hello3("Janindu")} }>Click</button>
        <button onClick={ (e) => {hello4("Maleesha", e.target)} }>Click</button> */}

        <HeaderContent />
        {/* <BodyContent>
          <button>Click Me</button>
        </BodyContent> */}
        <BodyContent>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book. It has
               survived not only five centuries, but also the leap into 
               electronic typesetting, remaining essentially unchanged. 
               It was popularised in the 1960s with the release of Letraset 
               sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </BodyContent>
        {/* <FooterContent /> */}
      </div>
    </>
  )
}

export default App
