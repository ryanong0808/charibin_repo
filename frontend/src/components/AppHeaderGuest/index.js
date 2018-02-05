import React, { Fragment, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler } from 'reactstrap'

import AppHeaderMenu from 'components/AppHeaderMenu'
import AppLogo from 'components/AppLogo'
import CategoriesMenu from 'components/CategoriesMenu'
import IconUser from 'icons/IconUser'


class AppHeaderGuest extends PureComponent {

  state = {
    menuOpened: false
  }

  handleToggleMenu = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  render() {
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
            <CategoriesMenu className="d-lg-none" />
          </Collapse>
        </Navbar>
        <div className="d-none d-lg-block">
          <CategoriesMenu />
        </div>
      </Fragment>
    )
  }
}

export default AppHeaderGuest
