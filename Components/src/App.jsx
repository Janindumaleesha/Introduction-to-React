import BodyContent from "./components/BodyContent/BodyContent"
import FooterContent from "./components/FooterContent/FooterContent"
import HeaderContent from "./components/HeaderContent/HeaderContent"

function App() {

  return (
    <>
      <div id="wrapper">
        <HeaderContent />
        <BodyContent>
          <button>Click Me</button>
        </BodyContent>
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
        <FooterContent />
      </div>
    </>
  )
}

export default App
