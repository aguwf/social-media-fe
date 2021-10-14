/** @format */

import React from 'react';
import Image from '@material-tailwind/react/Image';
import ModalUpdateProfile from './ModalUpdateProfile';

function HeaderProfile(props) {
  const default_avatar =
    'https://res.cloudinary.com/thcx/image/upload/v1628583671/account_nqfbls.png';
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <div className='cover'>
        <img
          className={
            'w-full mx-auto object-cover rounded-xl max-w-3/5 xl:max-w-3/4 2xl:max-w-3/5'
          }
          style={{ height: '24rem' }}
          src={props?.userDetail?.cover?.url}
          alt={props?.user?.fullname + ' cover.'}
        />
      </div>
      <div
        className={
          'avatar absolute left-2/4 ring ring-white ring-offset-base-100 ring-offset-2 rounded-full w-48 h-48'
        }
        style={{ transform: 'translateX(-50%)', top: '35%' }}
      >
        <Image
          className={'p-1 object-cover'}
          src={props?.userDetail?.avatar?.url || default_avatar}
          rounded={true}
          raised={false}
          alt={props?.user?.fullname + ' avatar.'}
        />
      </div>
      <h3
        className={
          'font-bold text-3xl pt-16 py-6 text-center text-gray-800 dark:text-gray-200'
        }
      >
        {props.userDetail?.fullname}
      </h3>
      <div className='tool mx-auto max-w-3/5 xl:max-w-3/4 2xl:max-w-3/5'>
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
              <button
                className={'btn bg-zest-500 hover:bg-zest-400 border-0'}
                onClick={() => setShowModal(true)}
              >
                Edit profile
              </button>
              <ModalUpdateProfile
                userDetail={props.userDetail}
                showModal={showModal}
                setShowModal={(data) => setShowModal(data)}
                updateProfile={(data) => props.updateProfile(data)}
                uploadImage={props.uploadImage}
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderProfile;
