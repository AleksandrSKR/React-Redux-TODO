import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink id="showall" filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink id="active" filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink id="completed" filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer