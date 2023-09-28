import React from 'react'
import { useState } from 'react'
import Widget from './Widget'

const Accessibility = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      {show ? <Widget setShow={setShow} /> : <button className="widget-btn" onClick={() => setShow(true)}>🦽</button>}
    </div>
  )
}

export default Accessibility