import "./App.css"
import { BrowserRouter } from "react-router-dom"



const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
