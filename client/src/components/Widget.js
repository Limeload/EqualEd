import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { PiBrainDuotone } from 'react-icons/pi'
import { MdOutlineInvertColors } from 'react-icons/md'
import { HiOutlinePuzzlePiece } from 'react-icons/hi2'
import { FaWheelchair } from 'react-icons/fa6'
import { TbSortDescendingLetters } from 'react-icons/tb'
import { GiSoundWaves } from 'react-icons/gi'
import { BsEyeglasses } from 'react-icons/bs'
import { RiFocus2Line } from 'react-icons/ri'

const Widget = ({ setShow }) => {
  return (
    <div id="widget">
      <div className="widget-header">
        <h2>Accessibility</h2>
        <button className="close-btn" onClick={() => setShow(false)}>
          <FaWindowClose />
        </button>
      </div>
      <div className="btn-grid">
        <button className="feature-btn"><TbSortDescendingLetters className='icon' /><span>Dyslexia</span></button>
        <button className="feature-btn"><MdOutlineInvertColors className='icon' /><span>Colorblind</span></button>
        <button className="feature-btn"><BsEyeglasses className='icon' /><span>Visually Impaired</span></button>
        <button className="feature-btn"><GiSoundWaves className='icon' /><span>Blind</span></button>
        <button className="feature-btn"><PiBrainDuotone className='icon' /><span>Seizure & Epileptic</span></button>
        <button className="feature-btn"><FaWheelchair className='icon' /><span>Motor Impaired</span></button>
        <button className="feature-btn"><RiFocus2Line className='icon' /><span>ADHD</span></button>
        <button className="feature-btn"><HiOutlinePuzzlePiece className='icon' /><span>Cognitive & Learning</span></button>
      </div>
    </div>
  )
}

export default Widget