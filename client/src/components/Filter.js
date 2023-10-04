import React from 'react'

export const Filter = ({ setFilterValue }) => {
    const onFilterChange = (e) => setFilterValue(e.target.value)

  return (
    <div className="filter-container">
        <label className="filter-label">Filter Candidates</label>
        <input className="filter-input" type='text' onChange={onFilterChange} />
    </div>
  )
}
