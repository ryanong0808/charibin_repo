import React from 'react'
import PropTypes from 'prop-types'


const COMPONENT_CLASS = 'step-item'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

const StepItem = ({ step, title, children, image }) => (
  <div className={COMPONENT_CLASS}>
    <div className={bem('number-box')}>
      <img src={require(`images/step-num-${step}.png`)} alt="" />
    </div>
    <div
      className={bem('content')}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className={bem('title')}>
        <span className="d-lg-none">{step}. </span>
        {title}
      </h3>
      <div className={bem('text')}>{children}</div>
    </div>
  </div>
)

StepItem.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  step: PropTypes.number,
  title: PropTypes.string
}

export default StepItem
