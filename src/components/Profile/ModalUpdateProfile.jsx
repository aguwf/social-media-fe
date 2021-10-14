/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, Fragment } from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import Textarea from '@material-tailwind/react/Textarea';
import Input from '@material-tailwind/react/Input';
import { Listbox, Transition } from '@headlessui/react';
import { HiOutlineCheck, HiSelector } from 'react-icons/hi';

export default function ModalUpdateProfile(props) {
  const { showModal, setShowModal, userDetail } = props;
  const [imageUpload, setImageUpload] = useState({
    avatar: '',
    cover: '',
    avatarFile: '',
    coverFile: '',
  });
  const [user, setUser] = useState(userDetail);
  const default_avatar =
    'https://res.cloudinary.com/thcx/image/upload/v1628583671/account_nqfbls.png';

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  React.useEffect(() => {
    setUser(userDetail);
  }, [props]);

  const handleChange = (event) => {
    if (event === 'Male' || event === 'Female' || event === 'Other option') {
      setUser({ ...user, gender: event });
    } else {
      const { name, value } = event.target;

      if (value) {
        setUser({ ...user, [name]: value });
      }
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    (imageUpload.avatarFile || imageUpload.coverFile) &&
      props.uploadImage({
        user,
        avatar: imageUpload.avatarFile,
        cover: imageUpload.coverFile,
      });
    props.updateProfile({
      user,
      upload: Boolean(imageUpload.avatarFile || imageUpload.coverFile),
    });
    setShowModal(false);
  };

  const handleChangeFile = (event) => {
    const { name, files } = event.target;
    setImageUpload({
      ...imageUpload,
      [name]: URL.createObjectURL(files[0]),
      [name + 'File']: files[0],
    });
  };

  return (
    <Modal
      size='regular'
      active={showModal}
      toggler={() => setShowModal(false)}
      className={'dark:bg-bunker-500'}
    >
      <ModalHeader toggler={() => setShowModal(false)}>
        <div className={'text-center'}>Edit profile</div>
        <div className='divider w-136 lg:w-128 md:w-112 sm:w-96 xs:w-96 phone:w-96'></div>
      </ModalHeader>
      <ModalBody>
        <div className='profile-pic mb-6'>
          <h2 className='text-xl leading-relaxed text-steel-blue-800 font-bold'>
            Profile picture
          </h2>
          <div className='flex items-center flex-col'>
            <img
              className={
                'w-52 h-52 rounded-full m-auto mb-5 object-cover ring ring-gray-300 ring-offset-base-100'
              }
              src={imageUpload?.avatar || user?.avatar?.url || default_avatar}
              alt='upload-avatar'
            />
            <label
              htmlFor={'avatar'}
              className={
                'btn btn-outline btn-sm border-zest-500 text-zest-500 hover:bg-zest-500 hover:border-zest-500'
              }
            >
              Change profile picture
              <input
                hidden={true}
                type='file'
                name='avatar'
                id='avatar'
                onChange={handleChangeFile}
              />
            </label>
          </div>
        </div>
        <div className='cover-pic mb-6'>
          <h2 className='text-xl leading-relaxed text-gray-800 font-bold'>
            Cover photo
          </h2>
          <div className='flex items-center flex-col'>
            <img
              className={
                'w-full h-80 m-auto mb-5 object-cover rounded-xl ring ring-gray-300 ring-offset-base-100'
              }
              src={imageUpload?.cover || user?.cover?.url || ''}
              alt='upload-cover'
            />
            <label
              htmlFor={'cover'}
              className={
                'btn btn-outline btn-sm border-zest-500 text-zest-500 hover:bg-zest-500 hover:border-zest-500'
              }
            >
              Change cover photo
              <input
                hidden={true}
                type='file'
                name='cover'
                id='cover'
                onChange={handleChangeFile}
              />
            </label>
          </div>
        </div>
        <div className='tel mb-6'>
          <Input
            value={user?.fullname || ''}
            className={'bg-gray-600'}
            color='orange'
            name='fullname'
            placeholder='Your full name'
            outline={true}
            onChange={handleChange}
          />
        </div>
        <div className='story mb-6'>
          <Textarea
            value={user?.story || ''}
            color='orange'
            size='regular'
            outline={true}
            placeholder='Describe something about you ...'
            onChange={handleChange}
            name='story'
          />
        </div>
        <div className='gender mb-6'>
          <Listbox
            value={user?.Gender || 'Gender'}
            name='Gender'
            onChange={handleChange}
          >
            {({ open }) => (
              <>
                <div className='mt-1 relative'>
                  <Listbox.Button className='relative w-full bg-white border border-gray-300 rounded-lg shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-zest-500 focus:border-zest-500 sm:text-sm'>
                    <span className='flex items-center'>
                      <span
                        className={`block truncate ${
                          user?.Gender ? 'text-gray-400' : 'text-gray-800'
                        } text-base`}
                      >
                        {user?.gender || 'Gender'}
                      </span>
                    </span>
                    <span
                      className='ml-3 absolute flex items-center pr-2 pointer-events-none'
                      style={{ top: 0, bottom: 0, right: 0 }}
                    >
                      <HiSelector
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-lg py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                      {['Male', 'Female', 'Other option'].map(
                        (option, index) => (
                          <Listbox.Option
                            key={option + index}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? 'text-white bg-zest-500'
                                  : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-3 pr-9 rounded-lg mx-3',
                              )
                            }
                            value={option}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className='flex items-center'>
                                  <span
                                    className={classNames(
                                      selected
                                        ? 'font-semibold'
                                        : 'font-normal',
                                      'ml-3 block truncate',
                                    )}
                                  >
                                    {option}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-zest-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4',
                                    )}
                                  >
                                    <HiOutlineCheck
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ),
                      )}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        <div className='tel mb-6'>
          <Input
            value={user?.tel || ''}
            color='orange'
            name='tel'
            outline={true}
            placeholder='Phone number'
            onChange={handleChange}
          />
        </div>
        <div className='address mb-6'>
          <Input
            value={user?.address || ''}
            color='orange'
            name='address'
            outline={true}
            placeholder='Places lived'
            onChange={handleChange}
          />
        </div>
        <div className='website mb-6'>
          <Input
            value={user?.website || ''}
            color='orange'
            name='website'
            outline={true}
            placeholder='Website'
            onChange={handleChange}
          />
        </div>
        <div className='birthday mb-6'>
          <Input
            value={user?.birthday?.split('T')[0] || ''}
            type='date'
            color='orange'
            name='birthday'
            outline={true}
            placeholder='Birthday'
            onChange={handleChange}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color='red'
          buttonType='link'
          onClick={handleClose}
          ripple='dark'
          block={true}
        >
          Close
        </Button>

        <Button color='green' onClick={handleSave} ripple='light' block={true}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
}
