import React from 'react';
import { Navbar , Image , Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import logo from './logo.png';
import './style.scss';
import { Controls } from './components/controls';
import { Display } from './components/display';


function App() {
  return (
    <>
      <style type="text/css">
        {`
          .html,body{max-width:100vw;max-height:100vh;overflow-x:hidden;}
          .logo{max-width:30px;}
          a{color:black}
        `}
      </style>
      <Navbar>
        <Navbar.Brand href="#home"><Image className="logo" src={logo} alt="logo"/> Parity</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="mailto:tommyadeniyi@gmail.com">Prepared By: Tommy Adeniyi</Nav.Link>
          <Nav.Link href="https://github.com/webface/parity" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' /></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <Controls/>
      <Display/>
    </>
  );
}

export default App;
