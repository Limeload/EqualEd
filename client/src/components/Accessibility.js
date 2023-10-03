import React from 'react'
import { useState } from 'react'
import Widget from './Widget'
import { IoAccessibilitySharp } from 'react-icons/io5'

const Accessibility = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      {show ?
        <Widget setShow={setShow} /> :
        <button className="widget-btn" onClick={() => setShow(true)}>
          <IoAccessibilitySharp />
        </button>}
    </div>
  )
}

export default Accessibility