import React from 'react'
import { ColorRing } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperClass="loading-wrapper"
      colors={['#8cfff4', '#8cedff', '#8cc4ff', '#8c9cff', '#a58cff']}
    />
  )
}

export default LoadingSpinner