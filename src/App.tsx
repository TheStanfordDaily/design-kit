import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foo" element={<p>Hello</p>} />
        <Route path="/bar" element={<p>Hello</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
