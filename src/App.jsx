import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Foo from "./Foo"
import Bar from "./Bar"
import Puzzles from "./Puzzles"
import Floating from "./Floating"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foo" element={<Foo />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/puzzles" element={<Puzzles />} />
        <Route path="/floating" element={<Floating />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
