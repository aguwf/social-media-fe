import React from 'react'
import { useHistory } from 'react-router-dom'

function NotFound() {
  const history = useHistory()
  return (
    <div className='relative' style={{ minHeight: 'calc(100vh - 70px)' }}>
      <h2
        className='absolute text-5xl font-semibold text-gray-500 top-2/4 transform -translate-y-2/4 -translate-x-2/4'
        style={{ left: '40%' }}
      >
        <div className='flex'>
          <div className='text-blue-500'>404</div>
          <div className='font-bold'>
            | Page Not Found{' '}
            <div className='text-sm m-5'>
              Please check the URL in the address bar and try again.
            </div>
          </div>
        </div>
        <div
          className='text-lg text-center m-auto cursor-pointer bg-blue-600 w-max rounded-lg p-2 text-white'
          onClick={() => history.push('/')}
        >
          Back to home
        </div>
      </h2>
    </div>
  )
}

export default NotFound
