import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

// import categories from './categories'
import { capitalizeWords } from 'utils/pureFunctions'


const COMPONENT_CLASS = 'categories-menu'
const bem = (suffix) => `${COMPONENT_CLASS}__${suffix}`


const CategoriesMenu = ({ className, categories }) =>
  categories && categories.size > 0 && (
    <Nav className={cx(COMPONENT_CLASS, className)}>
      <NavItem className={bem('item')}>
        <NavLink
          className={bem('link')}
          tag={Link}
          to="/auctions/new-arrivals"
        >
          New Arrivals
        </NavLink>
      </NavItem>
      {categories.map((item, index) => (
        <NavItem key={index} className={bem('item')}>
          <NavLink
            className={bem('link')}
            tag={Link}
            to={`/auctions?category=${item}`}
          >
            {capitalizeWords(item)}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  )

export default CategoriesMenu
