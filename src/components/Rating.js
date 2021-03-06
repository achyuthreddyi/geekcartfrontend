import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'

const Rating = ({ value, text, color }) => {
  /* eslint-disable */

  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <AiFillStar style={{ color: '#fdbd69' }} />
        ) : value >= 0.5 ? (
          <BsStarHalf style={{ color: '#fdbd69' }} />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <AiFillStar style={{ color: '#fdbd69' }} />
        ) : value >= 1.5 ? (
          <BsStarHalf style={{ color: '#fdbd69' }} />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <AiFillStar style={{ color: '#fdbd69' }} />
        ) : value >= 2.5 ? (
          <BsStarHalf style={{ color: '#fdbd69' }} />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <AiFillStar style={{ color: '#fdbd69' }} />
        ) : value >= 3.5 ? (
          <BsStarHalf style={{ color: '#fdbd69' }} />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <AiFillStar style={{ color: '#fdbd69' }} />
        ) : value >= 4.5 ? (
          <BsStarHalf style={{ color: '#fdbd69' }} />
        ) : (
          <AiOutlineStar />
        )}
      </span>
      <span>{text && text} </span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825'
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Rating
