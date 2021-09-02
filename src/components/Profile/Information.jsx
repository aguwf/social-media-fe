/** @format */

import React from 'react';

function Information(props) {
  let birthday = [];
  if (props.userDetail.birthday) {
    birthday = props?.userDetail?.birthday.split('T')[0].split('-');
  }
  return (
    <div className={'max-w-full h-96 bg-white my-8 rounded-lg shadow-lg'}>
      <div className={'p-5'}>
        <h1 className={'text-lg font-bold text-gray-800'}>Intro</h1>
        <div className='p-3'>
          <p className={'text-gray-800 text-lg'}>
            Birthday : {`${birthday[2]}/${birthday[1]}/${birthday[0]}`}
          </p>
          <p>Lives in </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
