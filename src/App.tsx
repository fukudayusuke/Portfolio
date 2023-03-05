import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
    
  // );
  return(
  <>
  <Sidebar>
    <Menu>
      <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
      </SubMenu>
      <MenuItem> Documentation </MenuItem>
      <MenuItem> Calendar </MenuItem>
    </Menu>
  </Sidebar>;
  </>
  );
}

export default App;
