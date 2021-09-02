import React from 'react'
import loading_meo_network from '../../assets/images/loading-meo-network.gif'

function Loading() {
  return (
    <div
      className='absolute w-full flex h-full items-center justify-center z-10 '
      style={{ backgroundColor: '#0008' }}
    >
      <img width='50%' height='50%' src={loading_meo_network} alt='Loading' />
    </div>
  )
}

export default Loading
