import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Foo from "./Foo"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foo" element={<Foo />} />
        <Route path="/bar" element={<p>Hello</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
