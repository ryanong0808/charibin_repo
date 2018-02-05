import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavbarBrand } from 'reactstrap'


class AppLogo extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  }

  static defaultProps = {
    height: 48
  }

  render() {
    const { color, width, height, ...props } = this.props
    const logo = color ? `logo-${color}` : `logo`

    return (
      <NavbarBrand tag={Link} to="/" {...props}>
        <img
          src={`/${logo}.svg`}
          width={width}
          height={height}
          className="align-top"
          alt="Charibin"
        />
      </NavbarBrand>
    )
  }
}

export default AppLogo
