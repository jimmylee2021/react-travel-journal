
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

function App() {
 
  const dataElements = data.map((entry)=>{
    return (
       <Entry 
         key={entry.id}
         entry={entry}
       />
    )
  })

  return (
    <div className="app">
      <div className="app-div">
      <Header/>
      {dataElements}
      </div>
    </div>
  )
}

export default App
