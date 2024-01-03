import React, { useState } from 'react'
 import { Button, CardBody, Card , Table } from 'reactstrap';
import {
    Row,
    Container,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

export default function Re9Trap() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
    <Navbar color="faded" light expand='sm'>
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
            <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
      <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Last Name
      </th>
      <th>
        Username
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</Table>
      </Collapse>
    </React.StrictMode>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

<br />

<Container>
    <Row>
        <Col sm='12' md='4' lg='1'>1 zet</Col>
        <Col sm='12' md='4' lg='1'>2 zet</Col>
        <Col sm='12' md='4' lg='1'>3 zet</Col>
        <Col sm='12' md='4' lg='1'>4 zet</Col>
        <Col sm='12' md='4' lg='1'>5 zet</Col>
        <Col sm='12' md='4' lg='1'>6 zet</Col>
        <Col sm='12' md='4' lg='1'>7 zet</Col>
        <Col sm='12' md='4' lg='1'>8 zet</Col>
        <Col sm='12' md='4' lg='1'>9 zet</Col>
        <Col sm='12' md='4' lg='1'>10 zet</Col>
        <Col sm='12' md='4' lg='1'>11 zet</Col>
        <Col sm='12' md='4' lg='1'>12 zet</Col>
   
      
    </Row>
</Container>
    </div>
  )
}
