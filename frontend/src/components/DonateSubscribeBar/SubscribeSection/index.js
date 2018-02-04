import React, { PureComponent } from 'react'
import { reduxForm } from 'redux-form/immutable'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { show as showModal } from 'redux-modal'

import SubscribeForm from 'components/SubscribeForm'
import { MAILCHIMP_TYPE_NEWSLETTER } from 'config'
import { mailchimpSubscribe } from 'utils/form'


const COMPONENT_CLASS = 'donate-subscribe-bar'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

class SubscribeSection extends PureComponent {

  doSubmit = (data) => {
    const { showModal } = this.props
    return mailchimpSubscribe(MAILCHIMP_TYPE_NEWSLETTER, data.get('email'))
      .then(() => {
        showModal('messageModal', {
          title: 'Thank you!',
          subtitle: 'Successfully subscribed to our newsletter'
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
    const { subscribeForm, subscribeForm: { handleSubmit } } = this.props
    return (
      <div className="pr-0 pr-lg-3">
        <h4 className={bem('text')}>
          Subscribe to our newsletter
        </h4>
        <div className="ml-auto">
          <SubscribeForm
            {...subscribeForm}
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
    form: 'subscribeBarForm',
    propNamespace: 'subscribeForm'
  })
)(SubscribeSection)
