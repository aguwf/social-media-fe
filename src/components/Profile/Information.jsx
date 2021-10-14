/** @format */

import React from 'react';
import { Typography as Typo } from '@mui/material';

function Information(props) {
  const { userDetail } = props;
  let birthday = [];
  if (userDetail.birthday) {
    birthday = props?.userDetail?.birthday.split('T')[0].split('-');
  }
  return (
    <div
      className={
        'bg-white my-8 rounded-lg shadow-lg lg:w-60vw md:w-60vw dark:bg-bunker-500'
      }
    >
      <div className={'p-5'}>
        <Typo variant='h6' className={'text-lg font-bold'}>
          Intro
        </Typo>
        <div className='p-3'>
          <Typo variant='h6' className={'p-2'}>
            Birthday : {`${birthday[2]}/${birthday[1]}/${birthday[0]}`}
          </Typo>
          <Typo variant='h6' className={'p-2'}>
            Visits me at {userDetail?.website || ''}
          </Typo>
          <Typo variant='h6' className={'p-2'}>
            Lives in {userDetail?.address || ''}
          </Typo>
          <Typo variant='h6' className={'p-2'}>
            Contact me at {userDetail?.tel || ''}
          </Typo>
          <Typo variant='h6' className={'p-2'}>
            Gender : {userDetail?.gender || ''}
          </Typo>
          <Typo variant='h6' className={'p-2'}>
            About me : {userDetail?.story || ''}
          </Typo>
        </div>
      </div>
    </div>
  );
}

export default Information;
