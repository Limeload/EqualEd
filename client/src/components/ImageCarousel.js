import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep()
    }, 10000);
    return () => clearTimeout(timer);
  }, [nextStep]);

  function nextStep() {
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }

  return (
    <div className='container'>
      <div className='slideshow'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={images[index]}
            alt='slides of course material'
            className='slides'
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <button className='prev-btn' onClick={prevStep}>
          ◀
        </button>
        <button className='next-btn' onClick={nextStep}>
          ▶
        </button>
      </div>
    </div>
  )
}

export default ImageCarousel