import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

import categories from './categories'


const COMPONENT_CLASS = 'categories-menu'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`


const CategoriesMenu = ({ className }) => (
  <Nav className={cx(COMPONENT_CLASS, className)}>
    {categories.map((item, index) => (
      <NavItem key={index} className={bem('item')}>
        <NavLink
          className={bem('link')}
          tag={Link}
          to={item.link}
        >
          {item.name}
        </NavLink>
      </NavItem>
    ))}
  </Nav>
)

export default CategoriesMenu
