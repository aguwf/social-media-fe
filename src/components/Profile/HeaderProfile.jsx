/** @format */

import React from 'react';
import Image from '@material-tailwind/react/Image';

function HeaderProfile(props) {
  return (
    <div>
      <div className='cover'>
        <Image
          className={'w-full mx-auto object-cover'}
          style={{ maxWidth: '60%', height: '24rem' }}
          src={props?.userDetail?.cover?.url}
          rounded={false}
          raised={false}
          alt={props?.user?.fullname + ' cover.'}
        />
      </div>
      <div
        className={'avatar absolute left-2/4'}
        style={{ transform: 'translateX(-50%)', top: '30%' }}
      >
        <Image
          className={'p-1'}
          style={{
            height: '250px',
            width: '250px',
            border: '4px solid white',
            objectFit: 'cover',
          }}
          src={props?.userDetail?.avatar?.url}
          rounded={true}
          raised={false}
          alt={props?.user?.fullname + ' avatar.'}
        />
      </div>
      <h3 className={'font-bold text-3xl pt-24 pb-6 text-center text-gray-800'}>
        {props.userDetail?.fullname}
      </h3>
      <div className='tool mx-auto' style={{ maxWidth: '60%' }}>
        <nav className='bg-white shadow rounded-xl dark:bg-gray-800'>
          <div className='container flex items-center justify-between px-4 py-3 mx-auto text-gray-600 capitalize dark:text-gray-300'>
            <div className={'flex'}>
              <div
                className={
                  (props.openTab === 1
                    ? 'border-zest-500 text-gray-800'
                    : 'border-transparent hover:bg-gray-200') +
                  ' cursor-pointer rounded-lg text-lg font-bold px-4 py-2 border-b-2 hover:text-gray-800 dark:text-gray-200 mx-1.5 sm:mx-6'
                }
                onClick={() => props.setOpenTab(1)}
              >
                Post
              </div>

              <div
                className={
                  (props.openTab === 2
                    ? 'border-zest-500'
                    : 'border-transparent hover:bg-gray-200') +
                  ' cursor-pointer rounded-lg text-lg font-bold px-4 py-2 border-b-2 hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6'
                }
                onClick={() => props.setOpenTab(2)}
              >
                About
              </div>

              <div
                className={
                  (props.openTab === 3
                    ? 'border-zest-500'
                    : 'border-transparent hover:bg-gray-200') +
                  ' cursor-pointer rounded-lg text-lg font-bold px-4 py-2 border-b-2 hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6'
                }
                onClick={() => props.setOpenTab(3)}
              >
                Follow
              </div>

              <div
                className={
                  (props.openTab === 4
                    ? 'border-zest-500'
                    : 'border-transparent hover:bg-gray-200') +
                  ' cursor-pointer rounded-lg text-lg font-bold px-4 py-2 border-b-2 hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6'
                }
                onClick={() => props.setOpenTab(4)}
              >
                Photos
              </div>
            </div>
            <div>
              <button className={'btn bg-zest-500 hover:bg-zest-400 border-0'}>
                Edit profile
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderProfile;
