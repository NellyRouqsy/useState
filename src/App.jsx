import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/about"
import Homepage from "./pages/homepage"
const App = ()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <br />
      <br />
      <About/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  )
}

export default App