import React from 'react'

function SearchResult(props) {
  const { name, avatar } = props

  return (
    <div>
      <div className='flex px-2 py-4 cursor-pointer rounded-xl hover:bg-gray-300 z-10'>
        <div onClick={() => console.log(1111)}>
          <img width={25} height={25} src={avatar} alt='avatar' />
        </div>
        <h3 className='pl-3'>{name}</h3>
      </div>
    </div>
  )
}

export default SearchResult
