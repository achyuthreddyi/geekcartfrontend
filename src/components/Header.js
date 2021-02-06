import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { AiFillLock } from 'react-icons/ai'
import { HiShoppingCart } from 'react-icons/hi'

import { logout } from '../actions/userActions'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <header>
        <Navbar variant='dark' expand='lg' className='header' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand id='logo'>geekcart</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
              <Nav className='ml-auto'>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <HiShoppingCart size={20} />
                  </Nav.Link>
                </LinkContainer>
                {userInfo && (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
                {!userInfo && (
                  <LinkContainer to='/login'>
                    <Nav.Link id='username'>
                      <AiFillLock size={30} /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}

                {userInfo && !(userInfo.role === 0) && (
                  <NavDropdown title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
