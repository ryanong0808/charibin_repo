import React, { Fragment, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler } from 'reactstrap'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import AppHeaderMenu from 'components/AppHeaderMenu'
import AppLogo from 'components/AppLogo'
import CategoriesMenu from 'components/CategoriesMenu'
import IconUser from 'icons/IconUser'
import { categoriesMenuSelector } from 'store/selectors'
import { getCategoriesMenuItems } from 'store/modules/settings'


class AppHeaderGuest extends PureComponent {

  state = {
    menuOpened: false
  }

  componentWillMount() {
    this.props.getCategoriesMenuItems();
  }

  handleToggleMenu = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  render() {
    const { categories } = this.props
    const { menuOpened } = this.state

    return (
      <Fragment>
        <Navbar color="faded" light expand="lg" className="app-header">
          <AppLogo />
          <NavbarToggler onClick={this.handleToggleMenu} />
          <Collapse isOpen={menuOpened} navbar>
            <AppHeaderMenu />
            <Link className="navbar-text ml-3" to="/signin">
              <IconUser className="text-primary" />
            </Link>
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

export default connect(selector, actions)(AppHeaderGuest)
