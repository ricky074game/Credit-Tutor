import React from 'react'

import PropTypes from 'prop-types'

import './cta15.css'

const CTA15 = (props) => {
  return (
    <div className="cta15-container thq-section-padding">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta15-background-image thq-img-ratio-16-9"
      />
      <div className="cta15-max-width thq-section-max-width">
        <div className="cta15-column">
          <div className="cta15-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="cta15-actions">
            <button type="button" className="thq-button-filled">
              {props.action1}
            </button>
            <button type="button" className="thq-button-outline">
              {props.action2}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA15.defaultProps = {
  content1: 'Explore our tools and start improving your credit score today.',
  action1: 'Get Started',
  backgroundImageAlt: 'Image of a person reviewing credit report',
  action2: 'Learn More',
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1556604778-4625d4603d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQzNDExNHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Ready to take control of your credit?',
}

CTA15.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  action2: PropTypes.string,
  backgroundImageSrc: PropTypes.string,
  heading1: PropTypes.string,
}

export default CTA15
