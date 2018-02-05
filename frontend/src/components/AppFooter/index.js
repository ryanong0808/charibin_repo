import React, { PureComponent } from 'react'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaInstagram from 'react-icons/lib/fa/instagram'
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus'
import FaPinterest from 'react-icons/lib/fa/pinterest'
import FaTwitter from 'react-icons/lib/fa/twitter'

import { Link } from 'react-router-dom'
import { Col, Container, Nav, NavItem, NavLink, Row } from 'reactstrap'

import AppLogo from 'components/AppLogo'


const COMPONENT_CLASS = 'app-footer'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

const SocialLink = ({ ...props }) => (
  <NavLink className={bem('social-link')} target="_blank" {...props} />
)

const NavText = ({ ...props }) => (
  <span className={bem('nav-text')} {...props} />
)

class AppFooter extends PureComponent {
  render() {

    return (
      <div className={COMPONENT_CLASS}>
        <Container>
          <div className={bem('navs')}>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <h4 className={bem('heading')}>Customer Care</h4>
                <Nav vertical className={bem('nav')}>
                  <NavItem>
                    <NavLink tag={Link} to="/support">Contact Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/faqs">Faq</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/authenticity">Authenticity</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/shipping">Shipping</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/returns">Returns</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <h4 className={bem('heading')}>Company</h4>
                <Nav vertical className={bem('nav')}>
                  <NavItem>
                    <NavLink tag={Link} to="/mission">Mission</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/careers">Careers</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/influencer-program">Influencer Program</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/terms-conditions">Terms of Service</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/privacy-policy">Privacy Policy</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <h4 className={bem('heading')}>Popular Items</h4>
                <Nav vertical className={bem('nav')}>
                  <NavItem>
                    <NavLink tag={Link} to="/auctions/new-arrivals">New Arrivals</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/auctions?category=women">Women</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/auctions?category=men">Men</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/auctions?category=accessories">Accessories</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/auctions?category=staff-picks">Staff Picks</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <h4 className={bem('heading')}>Questions?</h4>
                <Nav vertical className={bem('nav')}>
                  <NavItem>
                    <NavText>Speak to One of Our Customer Care Experts</NavText>
                  </NavItem>
                  <NavItem>
                    <NavText>By Phone or Email</NavText>
                  </NavItem>
                  <NavItem>
                    <NavText>Toll Free: (855) 435-5893</NavText>
                  </NavItem>
                  <NavItem>
                    <NavText>MON - FRI 9am - 6pm EST</NavText>
                  </NavItem>
                  <NavItem>
                    <NavLink tag="a" href="mailto:support@charibin.com">support@charibin.com</NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </div>
          <Nav className={bem('social')}>
            <NavItem>
              <SocialLink href="https://facebook.com/"><FaFacebook /></SocialLink>
            </NavItem>
            <NavItem>
              <SocialLink href="https://instagram.com/"><FaInstagram /></SocialLink>
            </NavItem>
            <NavItem>
              <SocialLink href="https://pinterest.com/"><FaPinterest /></SocialLink>
            </NavItem>
            <NavItem>
              <SocialLink href="https://twitter.com/"><FaTwitter /></SocialLink>
            </NavItem>
            <NavItem>
              <SocialLink href="https://plus.google.com/"><TiSocialGooglePlus /></SocialLink>
            </NavItem>
          </Nav>
          <div className="justify-content-center d-none d-sm-flex">
            <AppLogo color="grey" className={bem('logo')} height={80} />
          </div>
          <div className="justify-content-center d-flex d-sm-none">
            <AppLogo color="grey" className={bem('logo')} />
          </div>
          <div className={bem('copyright')}>
            <div className={bem('copyright-item')}>
              Your Goods. Doing Good.
            </div>
            <div className={bem('copyright-item')}>
              &copy; Charibin 2017-2018 All Rights Reserved
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default AppFooter
