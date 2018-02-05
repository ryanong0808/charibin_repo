import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Field, getFormValues, reduxForm } from 'redux-form/immutable'

import TagsInputField from 'components/TagsInputField'


class CategoriesMenuItemsForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool
  }

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="value"
          label="Choose Categories Menu Items:"
          component={TagsInputField}
        />
        <div className="text-right">
          <Button type="submit" size="lg" color="primary" disabled={submitting}>
            Save
          </Button>
        </div>
      </form>
    )
  }
}

const selector = createStructuredSelector({
  formValues: getFormValues('categoriesMenuItemsForm'),
})

export default compose(
  reduxForm({
    form: 'categoriesMenuItemsForm'
  }),
  connect(selector)
)(CategoriesMenuItemsForm)
