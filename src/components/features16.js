import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
          <div className="features16-content">
            <h2 className="features16-text thq-heading-2">{props.heading1}</h2>
            <span className="features16-text1 thq-body-large">
              {props.content1}
            </span>
          </div>
        </div>
        <div className="features16-content1">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <Link to="/credit-helper" className="features16-navlink">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="features16-feature1-image thq-img-ratio-4-3"
                />
              </Link>
              <div className="features16-content2">
                <h3 className="features16-feature1-title thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <Link to="/searcher" className="features16-navlink1">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="features16-feature2-image thq-img-ratio-4-3"
                />
              </Link>
              <div className="features16-content3">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
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

Features16.defaultProps = {
  feature3Title: 'Coming soon',
  feature1Description:
    'Access our credit helper tool to improve your credit score and financial health.',
  feature2ImageAlt: 'Image of Searcher Tool',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1556912743-b009de688326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQzNDExNHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Discover the Key Features',
  content1: 'There is a lot of tools to try! Make sure to try them all!',
  feature3ImageAlt: 'Image of Contact Information',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQzNDExNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Searcher Tool',
  feature2Description:
    'Utilize our searcher tool to find relevant information quickly and efficiently.',
  feature1Title: 'Credit Helper Tool',
  feature1ImageAlt: 'Image of Credit Helper Tool',
  feature3Description: "Welp, I don't have unlimited time you know?",
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1705948354275-d55101017fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNzQzNDExNHw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan1: 'Slogan',
}

Features16.propTypes = {
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  slogan1: PropTypes.string,
}

export default Features16
