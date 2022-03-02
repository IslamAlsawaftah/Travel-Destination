import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import data from "./data/data.json"
import TourDetails from './components/TourDetails/TourDetails'

function App() {
  return (
    <>
      <Routes>
        {/* rout component takeing parameters, path and element i want to render in the path */}
        <Route path="/" element={<Home data={data} />} />
        <Route path="/city/:id/" element={<TourDetails data={data} />} />
      </Routes>
    </>
  )
}
export default App;