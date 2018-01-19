import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { show } from 'redux-modal'

import ArrowButton from 'components/ArrowButton'

const DonateBar = ({ show }) => (
  <Container className="text-center">
    <div className="donate-bar">
      <div className="h2 text-primary d-md-inline-block align-middle mb-4 mb-md-0 mr-md-5">
        Sell your things for good
      </div>
      <ArrowButton className="align-middle" text="Join" onClick={function() { show('donateModal') }} />
    </div>
  </Container>
)

const actions = {
  show
}

export default connect(null, actions)(DonateBar)
