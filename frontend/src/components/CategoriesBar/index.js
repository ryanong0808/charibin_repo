import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

import categories from './categories'


const COMPONENT_CLASS = 'categories-bar'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`


const CategoriesBar = () => (
  <Nav className={COMPONENT_CLASS}>
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

export default CategoriesBar
