
import Card from "./components/card"
import NavLink from "./components/header"

const cards = [1, 2, 3]

function App() {
  return (
    <>
      <div className="mt-6 ml-4 flex gap-2">
      <div className="mb-8 flex gap-6">
        <NavLink linkName ='Home' />
        <NavLink linkName ='News' />
        <NavLink linkName ='Technology' />
      </div>
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
