import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
// import Message from '../components/Message.js'
import { AiOutlineDelete } from 'react-icons/ai'

import { addToCart, removeCart } from '../actions/cartActions'
import TitleHelmet from '../components/TitleHelmet.js'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const quantity = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const removeFromCartHandler = id => {
    dispatch(removeCart(id))
  }

  const CheckOutHandler = () => {
    history.push('/login?redirect=shipping')
    localStorage.removeItem('cartItems')
  }

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity))
    }
  }, [dispatch, productId, quantity])

  return (
    <Row>
      <TitleHelmet title='Your cart ' />

      <Col md={8}>
        {cartItems.length > 0 && <h1>Your Cart</h1>}

        {cartItems.length === 0 && (
          <>
            <Link to='/'>
              <h1>
                Your cart is empty please consider our products <br />
                they are super cool as you
              </h1>
            </Link>
          </>
        )}
        {cartItems.length > 0 && (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3} className='align__center'>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} className='align__center'>
                    {' '}
                    Price: &#x20B9; {item.price}
                  </Col>

                  <Col md={2} className='align__center'>
                    <Form.Control
                      as='select'
                      value={item.quantity}
                      onChange={e =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md={2} className='align__center'>
                    <Button
                      type='button'
                      className='btn-block'
                      // variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <AiOutlineDelete />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      {/* right side */}
      <Col md={4}>
        {cartItems.length > 0 && (
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  SubTotal(
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                  items
                </h2>
                &#x20B9;{' '}
                {cartItems
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={CheckOutHandler}
                >
                  Proceed to Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        )}
      </Col>
    </Row>
  )
}

export default CartScreen
