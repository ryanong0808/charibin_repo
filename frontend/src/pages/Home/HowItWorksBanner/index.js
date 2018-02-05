import React from 'react'
import { Container } from 'reactstrap'

import ArrowLink from 'components/ArrowLink'
import howItWorksImg from 'images/how-it-works-banner.jpg'


const COMPONENT_CLASS = 'how-it-works-banner'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

const HowItWorksBanner = ({ show }) => (
  <Container>
    <div className={COMPONENT_CLASS}>
      <img src={howItWorksImg} className={bem('bg')} alt="How it works" />
      <div className={bem('overlay')}>
        <h3 className={bem('title')}>How It Works</h3>
        <ArrowLink to="/how-it-works" className={bem('link')} text="Learn More" />
      </div>
    </div>
  </Container>
)

export default HowItWorksBanner
