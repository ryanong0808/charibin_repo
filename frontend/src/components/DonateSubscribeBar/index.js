import React from 'react'
import cx from 'classnames'
import { Col, Container, Row } from 'reactstrap'

import DonateSection from './DonateSection'
import SubscribeSection from './SubscribeSection'


const COMPONENT_CLASS = 'donate-subscribe-bar'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

const DonateSubscribeBar = () => (
  <div className={COMPONENT_CLASS}>
    <Container className="text-center">
      <Row className="align-items-center">
        <Col lg={6} xs={12} className={cx('mb-3 mb-lg-0', bem('item-first'))}>
          <SubscribeSection />
        </Col>
        <Col lg={6} xs={12} className="mb-3 mb-lg-0">
          <DonateSection />
        </Col>
      </Row>
    </Container>
  </div>
)

export default DonateSubscribeBar
