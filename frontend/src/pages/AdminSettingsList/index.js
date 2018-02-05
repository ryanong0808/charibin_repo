import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Link } from 'react-router-dom'

import SectionTitle from 'components/SectionTitle'
import Spinner from 'components/Spinner'
import {
  API_PENDING,
  API_SUCCESS,
  API_FAIL
} from 'store/api/request'
import { getSettingsList } from 'store/modules/admin/settings'
import { adminSettingsSelector } from 'store/selectors'


class AdminSettingsList extends PureComponent {

  static propTypes = {
    adminSettings: ImmutablePropTypes.map.isRequired,
    getSettingsList: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getSettingsList()
  }

  render() {
    const { adminSettings } = this.props
    const settingsList = adminSettings.get('settingsList')
    const settingsListStatus = adminSettings.get('settingsListStatus')

    return (
      <div>
        <SectionTitle className="mb-4 clearfix">Site Settings</SectionTitle>

        {settingsListStatus === API_PENDING && <Spinner />}

        {settingsListStatus === API_FAIL && <div>
          Failed to load data.
        </div>}

        {settingsListStatus === API_SUCCESS && <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {settingsList.map(item => (
                <tr key={item.get('type')}>
                  <td>{item.get('display_name')}</td>
                  <td>
                    <Link className="text-secondary pr-3" to={`/admin/settings/${item.get('type')}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
      </div>
    )
  }
}

const selector = createStructuredSelector({
  adminSettings: adminSettingsSelector,
})

const actions = {
  getSettingsList
}

export default compose(
  connect(selector, actions)
)(AdminSettingsList)
