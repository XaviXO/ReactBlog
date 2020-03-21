import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
        <h1>My Pen Name is Jaxx Rockefeller</h1>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout

// this is the footer