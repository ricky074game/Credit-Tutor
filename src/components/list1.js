import React from 'react'

import PropTypes from 'prop-types'

import Toast1 from './toast1'
import './list1.css'

const List1 = (props) => {
  return (
    <div className={`list1-container ${props.rootClassName} `}>
      <Toast1 className=""></Toast1>
    </div>
  )
}

List1.defaultProps = {
  heading: 'Student Stats',
  rootClassName: '',
}

List1.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default List1
