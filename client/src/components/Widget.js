import React from 'react'

const Widget = ({ setShow }) => {
  return (
    <div id="widget">
      <div className="widget-header">
        <h2>Accessibility</h2>
        <button className="close-btn" onClick={() => setShow(false)}>❌</button>
      </div>
      <div className="btn-grid">
        <button className="feature-btn">Accessibility Feature</button>
        <button className="feature-btn">Accessibility Feature</button>
        <button className="feature-btn">Accessibility Feature</button>
        <button className="feature-btn">Accessibility Feature</button>
        <button className="feature-btn">Accessibility Feature</button>
        <button className="feature-btn">Accessibility Feature</button>
      </div>
    </div>
  )
}

export default Widget