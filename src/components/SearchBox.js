import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search Products here'
        className='mr-sm-2 ml-sm-5'
      />
      {/* <Button
        type='submit'
        // variant='outline-success'
        className='p-2 search__button'
      > */}
      <BiSearchAlt />
      {/* </Button> */}
    </Form>
  )
}

export default SearchBox
