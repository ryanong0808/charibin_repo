import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form/immutable'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { show as showModal } from 'redux-modal'

import SubscribeForm from 'components/SubscribeForm'
import { MAILCHIMP_TYPE_DONORS } from 'config'
import { mailchimpSubscribe } from 'utils/form'


const COMPONENT_CLASS = 'donate-subscribe-bar'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

class DonateSection extends PureComponent {

  doSubmit = (data) => {
    const { showModal } = this.props
    return mailchimpSubscribe(MAILCHIMP_TYPE_DONORS, data.get('email'))
      .then(() => {
        showModal('messageModal', {
          title: 'Thank you!',
          subtitle: 'Successfully requested to join as a do-gooder'
        })
      })
      .catch((err) => {
        showModal('messageModal', {
          title: 'Error',
          text: err.errors._error
        })
      })
  }

  render() {
    const { donateForm, donateForm: { handleSubmit } } = this.props
    return (
      <div className="pl-0 pl-lg-3">
        <h4 className={bem('text')}>
          Become a Do-Gooder
        </h4>
        <div className="ml-auto">
          <SubscribeForm
            {...donateForm}
            buttonLabel="Join"
            handleSubmit={handleSubmit(this.doSubmit)}
          />
        </div>
      </div>
    )
  }
}

const actions = {
  showModal
}

export default compose(
  connect(null, actions),
  reduxForm({
    form: 'donateBarForm',
    propNamespace: 'donateForm'
  })
)(DonateSection)
