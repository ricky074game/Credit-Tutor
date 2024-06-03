import React from 'react'

import PropTypes from 'prop-types'

import './pricing10.css'

const Pricing10 = (props) => {
  return (
    <div className="pricing10-pricing23 thq-section-padding">
      <div className="pricing10-max-width thq-section-max-width">
        <div className="pricing10-container">
          <div className="pricing10-content2"></div>
          <div className="pricing10-container01">
            <div className="pricing10-container02">
              <span className="thq-body-small">{props.feature1}</span>
            </div>
            <div className="pricing10-container03">
              <span className="thq-body-small">{props.feature1}</span>
            </div>
          </div>
          <div className="pricing10-container04">
            <div className="pricing10-container05">
              <span className="thq-body-small">{props.feature2}</span>
            </div>
            <div className="pricing10-container06">
              <span className="thq-body-small">{props.feature1}</span>
            </div>
          </div>
          <div className="pricing10-container07">
            <div className="pricing10-container08">
              <span className="thq-body-small">{props.feature3}</span>
            </div>
            <div className="pricing10-container09">
              <span className="thq-body-small">{props.feature1}</span>
            </div>
          </div>
          <div className="pricing10-container10">
            <div className="pricing10-container11">
              <span className="thq-body-small">{props.feature4}</span>
            </div>
            <div className="pricing10-container12">
              <span className="thq-body-small">{props.feature1}</span>
            </div>
          </div>
          <div className="pricing10-container13">
            <div className="pricing10-container14">
              <span className="thq-body-small">{props.feature5}</span>
            </div>
            <div className="pricing10-container15">
              <span className="thq-body-small">{props.feature1}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing10.defaultProps = {
  feature9: 'OSIS',
  feature4: 'DOE email',
  feature7: 'Tool 7',
  feature10: 'Tool 10',
  featureCategory2: 'Feature Category',
  feature8: 'Tool 8',
  feature2: 'Type',
  feature6: 'Tool 6',
  count5: '100',
  count6: 'Unlimited',
  count4: '20',
  feature1: 'Name',
  feature3: 'Bxsci email',
  feature5: 'OSIS',
  featureCategory1: 'Basic Features',
}

Pricing10.propTypes = {
  feature9: PropTypes.string,
  feature4: PropTypes.string,
  feature7: PropTypes.string,
  feature10: PropTypes.string,
  featureCategory2: PropTypes.string,
  feature8: PropTypes.string,
  feature2: PropTypes.string,
  feature6: PropTypes.string,
  count5: PropTypes.string,
  count6: PropTypes.string,
  count4: PropTypes.string,
  feature1: PropTypes.string,
  feature3: PropTypes.string,
  feature5: PropTypes.string,
  featureCategory1: PropTypes.string,
}

export default Pricing10
