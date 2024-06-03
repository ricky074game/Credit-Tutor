import React from 'react'

import PropTypes from 'prop-types'

import Pricing10 from './pricing10'
import './toast1.css'

const Toast1 = (props) => {
  return (
    <div className="toast1-container">
      <div className="toast1-header">
        <div className="toast1-content">
          <h2 className="toast1-title thq-heading-2">{props.bannerTitle}</h2>
          <Pricing10></Pricing10>
        </div>
      </div>
    </div>
  )
}

Toast1.defaultProps = {
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'Student Stats',
  button: 'Explore Tools',
  bannerTitle: 'Student Stats',
}

Toast1.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  button: PropTypes.string,
  bannerTitle: PropTypes.string,
}

export default Toast1
