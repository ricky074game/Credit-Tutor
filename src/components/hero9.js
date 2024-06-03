import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div
      className={`hero9-header30 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1599474401169-fabd05f339d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzM2NjE3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1:
    "I don't know why I must do introductions but you landed here, so hi",
  rootClassName: '',
  action1: 'See my tools',
  content1: 'I guess you can see the tools I created for NHS all here',
  action2: 'Explora nuestras herramientas',
  image1Alt: 'Imagen de bienvenida',
}

Hero9.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero9
