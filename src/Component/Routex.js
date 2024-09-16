import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Com1 } from './Com1';
import { Watch } from './Watch';
import { Search } from './Search';

export const Routex  = () => {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Com1></Com1>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/watch/:id" element={<Watch></Watch>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}
