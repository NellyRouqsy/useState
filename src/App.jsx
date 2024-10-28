import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/about"
import Homepage from "./pages/homepage"
const App = ()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="../" element={<Homepage/>}/>
          <Route path="./About" element={<About/>}/>
        </Routes>
      </BrowserRouter>

      <Homepage/>
      <About/>
    </div>
  )
}

export default App