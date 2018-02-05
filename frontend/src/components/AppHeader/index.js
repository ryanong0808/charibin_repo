import React, { Fragment,PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Collapse, Navbar, NavbarToggler,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import AppHeaderMenu from 'components/AppHeaderMenu'
import AppLogo from 'components/AppLogo'
import CategoriesMenu from 'components/CategoriesMenu'
import IconUser from 'icons/IconUser'
import { categoriesMenuSelector } from 'store/selectors'
import { getCategoriesMenuItems } from 'store/modules/settings'


const COMPONENT_CLASS = 'app-header'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`

const AccountDropdown = ({ className, isStaff, onSignOut }) => (
  <UncontrolledDropdown className={className}>
    <DropdownToggle tag="button" className={bem('account-toggler')}>
      <IconUser className="text-primary" />
    </DropdownToggle>
    <DropdownMenu right>
      {isStaff && <DropdownItem tag={Link} to="/admin">Admin</DropdownItem>}
      <DropdownItem tag={Link} className="dropdown-item" to="/account">My Account</DropdownItem>
      <DropdownItem onClick={onSignOut}>Sign Out</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
)

class AppHeader extends PureComponent {

  static propTypes = {
    getCategoriesMenuItems: PropTypes.func.isRequired,
    categories: PropTypes.array,
    username: PropTypes.string.isRequired,
    onSignOut: PropTypes.func,
    isStaff: PropTypes.bool,
  }

  state = {
    menuOpened: false,
  }

  componentWillMount() {
    this.props.getCategoriesMenuItems();
  }

  handleToggleMenu = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  handleSignOut = (e) => {
    e.preventDefault()

    const { onSignOut } = this.props
    if (onSignOut) {
      onSignOut()
    }
  }

  render() {
    const { categories, isStaff } = this.props
    const { menuOpened } = this.state

    return (
      <Fragment>
        <Navbar color="faded" light expand="lg" className={COMPONENT_CLASS}>
          <AppLogo />
          <div className={bem('account-responsive')} style={{ flexGrow: 1 }}>
            <AccountDropdown
              isStaff={isStaff}
              onSignOut={this.handleSignOut}
            />
          </div>
          <NavbarToggler onClick={this.handleToggleMenu} />
          <Collapse isOpen={menuOpened} navbar>
            <AppHeaderMenu />
            <AccountDropdown
              className="d-none d-md-block"
              isStaff={isStaff}
              onSignOut={this.handleSignOut}
            />
            <CategoriesMenu className="d-lg-none" categories={categories} />
          </Collapse>
        </Navbar>
        <div className="d-none d-lg-block">
          <CategoriesMenu categories={categories} />
        </div>
      </Fragment>
    )
  }
}

const selector = createStructuredSelector({
  categories: categoriesMenuSelector
})

const actions = {
  getCategoriesMenuItems
}

export default connect(selector, actions)(AppHeader)
