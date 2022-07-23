import React from 'react'
import { Routes, Route } from "react-router";
import First from './pages/First'
import Waterfall from "./pages/cssDemo/Waterfall";
import GrailLayout from "./pages/cssDemo/GrailLayout";
import DoubleFlyWings from "./pages/cssDemo/DoubleFlyWings";

function App() {
  return (
    <Routes>
      <Route path='/first' element={<First />} />
      <Route path='/waterfall' element={<Waterfall />} />
      <Route path='/grailLayout' element={<GrailLayout />} />
      <Route path='/doubleFlyWings' element={<DoubleFlyWings />} />
    </Routes>
  )
}

export default App