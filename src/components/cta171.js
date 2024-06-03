import React from 'react'

import PropTypes from 'prop-types'

import './cta171.css'

const CTA171 = (props) => {
  return (
    <div
      className={`cta171-container thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        loading="lazy"
        className="cta171-background-image thq-img-ratio-16-9"
      />
      <div className="cta171-max-width thq-section-max-width">
        <div className="cta171-column">
          <div className="cta171-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="cta171-input-container">
            <div className="cta171-row">
              <div className="cta171-container1"></div>
            </div>
            <select required="true" className="cta171-select">
              <option value="Name" className="">
                Name
              </option>
              <option value="Emails" className="">
                Email
              </option>
              <option value="Osis" className="">
                OSIS
              </option>
            </select>
            <input
              type="text"
              placeholder={props.textinputPlaceholder}
              className="cta171-textinput input"
            />
            <button type="submit" className="cta171-button thq-button-filled">
              {props.action1}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA171.defaultProps = {
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1527668372794-89974da965e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQzMjE0NXw&ixlib=rb-4.0.3&q=80&w=1500',
  backgroundImageAlt: 'NHS Tools Image',
  heading1: 'Credit Input Helper',
  content1: 'Give credits to any NHS member',
  action1: 'Go',
  rootClassName: '',
  textinputPlaceholder: 'Insert Credits',
}

CTA171.propTypes = {
  backgroundImageSrc: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
}

export default CTA171
