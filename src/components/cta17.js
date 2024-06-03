import React from 'react'

import PropTypes from 'prop-types'

import './cta17.css'

const CTA17 = (props) => {
  return (
    <div className="cta17-container thq-section-padding">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        loading="lazy"
        className="cta17-background-image thq-img-ratio-16-9"
      />
      <div className="cta17-max-width thq-section-max-width">
        <div className="cta17-column">
          <div className="cta17-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="cta17-input-container">
            <div className="cta17-row">
              <div className="cta17-container1">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required="true"
                  className="cta17-textinput thq-input"
                />
              </div>
            </div>
            <button type="submit" className="cta17-button thq-button-filled">
              {props.action1}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA17.defaultProps = {
  heading1: 'NHS Searcher',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1527668372794-89974da965e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQzMjE0NXw&ixlib=rb-4.0.3&q=80&w=1500',
  action1: 'Go',
  backgroundImageAlt: 'NHS Tools Image',
  content1: 'Find the NHS member using any detail',
}

CTA17.propTypes = {
  heading1: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  action1: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  content1: PropTypes.string,
}

export default CTA17
