import React from 'react';
import SideBar from './SideBar';

// import { BrowserRouter, Route, Link } from "react-router-dom";
import GenresInDb from './GenresInDb';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper" className='bg-negro'>
          <SideBar />
          
        </div>
    </React.Fragment>
  );
}

export default App;
