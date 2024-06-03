import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3Title: 'Tons of feelings',
  sectionTitle: 'Characteristics',
  slogan: 'Very hard working',
  feature2Title: 'They work',
  feature1ImageAlt: 'Imagen del Calendario de Eventos',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1590399014810-b205e0f652d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzM2NjE3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: 'I tested them a ton, so hopefully they work.🤞',
  secondaryAction: 'Únete a NHS ahora',
  feature2ImageAlt: 'Imagen de Recursos Educativos',
  feature1Description:
    'I spent a ton of time making them, so please use them :(',
  sectionDescription: 'Why you should use my tools: a comprehensive essay',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1611288870280-4a322b8ec7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzM2NjE3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Tons of blood and sweet when into creating these tools to help you, so please use them! I am very happy when I help at least one person',
  mainAction: 'Explore our society',
  feature3ImageAlt: 'Imagen del Foro de Discusión',
  feature1Title: 'I worked very hard',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1595236257318-97d2c00c24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzM2NjE3M3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  feature3Title: PropTypes.string,
  sectionTitle: PropTypes.string,
  slogan: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  mainAction: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
}

export default Features1
