import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Com1 } from './Com1';
import { Watch } from './Watch';
import { Search } from './Search';

export const Routex = () => {
  return (
    <Routes>
      <Route exact path='/' render={()=><Com1></Com1>} />
      <Route path='/watch/:id' render={()=><Watch></Watch>}/>
      <Route path='/search' render={()=><Search></Search>}/>
    </Routes>
  );
};
