import React from 'react';
import logo from '../../assets/img/logo.svg';
import { Navbar } from 'react-bootstrap';
import { CmpNav } from '../nav/nav.cmp';

const CmpNavbar: React.FC = () => {
  return (
    <Navbar
      expand={false}
      fixed="top"
      className="border-bottom border-dark"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
    >
      <Navbar.Brand href="/">
        <img src={logo} height="30px" />
        <span
          style={{
            marginLeft: '0.5rem',
            letterSpacing: '-0.2px',
            fontSize: '1rem',
          }}
        >
          一橋大学バドミントン部
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="border-0 p-0" />
      <Navbar.Collapse className="mb-2">
        <CmpNav />
      </Navbar.Collapse>
    </Navbar>
  );
};

export { CmpNavbar };
