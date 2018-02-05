import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import CategoriesMenuItemsForm from 'components/CategoriesMenuItemsForm'
import SectionTitle from 'components/SectionTitle'
import Spinner from 'components/Spinner'
import {
  API_PENDING,
  API_SUCCESS,
  API_FAIL
} from 'store/api/request'
import { adminSettingsSelector } from 'store/selectors'
import { formSubmit } from 'utils/form'
import {
  getCategoriesMenuItems,
  updateCategoriesMenuItems
} from 'store/modules/admin/settings'

class AdminSettingsCategoriesMenuItems extends PureComponent {

  static propTypes = {
    adminSettings: ImmutablePropTypes.map.isRequired,
    getCategoriesMenuItems: PropTypes.func.isRequired,
    updateCategoriesMenuItems: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getCategoriesMenuItems()
  }

  handleSubmit = (data) => {
    const { history, updateCategoriesMenuItems } = this.props
    return formSubmit(updateCategoriesMenuItems, {
      data,
      success: () => history.push('/admin/settings')
    })
  }

  render() {
    const { adminSettings } = this.props
    const categoriesMenuItems = adminSettings.get('categoriesMenuItems')
    const categoriesMenuItemsStatus = adminSettings.get('categoriesMenuItemsStatus')

    return (
      <div>
        <SectionTitle className="mb-4 clearfix">Categories Menu Items</SectionTitle>

        {categoriesMenuItemsStatus === API_PENDING && <Spinner />}

        {categoriesMenuItemsStatus === API_FAIL && <div>
          Failed to load data.
        </div>}

        {categoriesMenuItemsStatus === API_SUCCESS &&
          <CategoriesMenuItemsForm
            initialValues={categoriesMenuItems}
            onSubmit={this.handleSubmit}
          />
        }
      </div>
    )
  }
}

const selector = createStructuredSelector({
  adminSettings: adminSettingsSelector,
})

const actions = {
  getCategoriesMenuItems,
  updateCategoriesMenuItems
}

export default compose(
  connect(selector, actions)
)(AdminSettingsCategoriesMenuItems)
