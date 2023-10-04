import React from 'react'

export const Filter = ({ setFilterValue }) => {
  const onFilterChange = (e) => setFilterValue(e.target.value)

  return (
    <div className="filter-container">
      <h3>Here is a list of all available EqualEd courses. Click on one for more info!</h3>
      <input
        className="filter-input"
        aria-label="Filter Courses With the Search Bar"
        type='text'
        placeholder="Search Courses by Title"
        onChange={onFilterChange}
      />
    </div>
  )
}
