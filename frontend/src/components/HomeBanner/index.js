import React, { PureComponent } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import IconArrowRight from 'icons/IconArrowRight'


const COMPONENT_CLASS = 'home-banner'
const HEADER_HEIGHT = 80
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

class HomeBanner extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight - HEADER_HEIGHT
    }
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ height: window.innerHeight - HEADER_HEIGHT })
  }

  render () {
    const { height } = this.state

    return (
      <div className={COMPONENT_CLASS} style={{ height }}>
        <video className={bem('video')} loop autoPlay poster="/videos/hero-video-bg-poster.jpg">
          <source src="/videos/hero-video-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-video-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className={bem('overlay')} />
        <Container className={bem('content')}>
          <Row>
            <Col xs={12} lg={8} xl={6}>
              <h2 className={bem('title')}>Welcome to CHARIBIN!</h2>
              <p className={bem('description')}>
                A do-gooder is what you can be with Charibin. We help you turn your things into lifesaving
                medicine, emergency services, and support for any charitable organization you choose.
              </p>
              <Link to="/mission" className={bem('link')}>Learn more <IconArrowRight /></Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomeBanner
