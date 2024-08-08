
import Card from "./components/card"

const cards = [1, 2, 3]

function App() {
  return (
    <>
      <div className="mt-6 ml-4 flex gap-2">
      {
        cards.map((index)=>(
            <Card key={index}/>
        ))
      }
      </div>
    </>
    
  )
}

export default App
