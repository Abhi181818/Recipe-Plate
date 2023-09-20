import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import CuisinePage from './CuisinePage'
import Details from './Details'
import SearchC from './SearchC'
function Pages() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/cuisine/:type' element={<CuisinePage />}></Route>
        <Route path='/details/:id' element={<Details />}></Route>
        <Route path='/search/:search' element={<SearchC />}></Route>
      </Routes>
    </div>
  )
}

export default Pages
