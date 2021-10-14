/** @format */

import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import meo_network_logo from '../../assets/images/meo-network-logo(1).png';
import meo_network_background from '../../assets/images/kitty_generated.jpg';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useHistory } from 'react-router-dom';

function RegisterComponent(props) {
  const initialState = {
    username: '',
    password: '',
    confirm_password: '',
    email: '',
    fullname: '',
    birthday: '',
  };
  const [User, setUser] = React.useState(initialState);
  const [ShowPass, setShowPass] = React.useState(false);
  const [ShowCfPass, setShowCfPass] = React.useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signupRequest({ User, history });
  };

  const handleShowPass = () => {
    setShowPass((preShowPass) => !preShowPass);
  };
  const handleShowCfPass = () => {
    setShowCfPass((preShowCfPass) => !preShowCfPass);
  };

  return (
    <div
      style={
        {
          // backgroundImage: `url(${meo_network_background})`,
          // backgroundSize: '750px',
        }
      }
      className='min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-3/10 w-full space-y-8 shadow-4xl rounded-xl p-9 bg-white dark:bg-gray-800'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src={meo_network_logo}
            alt={`Meo's Network`}
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300'>
            Register new account Meo's Network
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <a
              href='/'
              className='font-medium text-zest-600 hover:text-zest-500'
            >
              sign in to your account
            </a>
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm'>
            <div className='mb-5'>
              <label htmlFor='full-name' className='sr-only'>
                Full Name
              </label>
              <Input
                name='fullname'
                color='orange'
                size='regular'
                outline={true}
                id='full-name'
                autoComplete='email'
                required
                className='mb-5 rounded-md shadow-sm -space-y-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm'
                placeholder='Full Name'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='username-address' className='sr-only'>
                Email address or Username
              </label>
              <Input
                color='orange'
                size='regular'
                outline={true}
                id='username-address'
                name='username'
                type='text'
                className='rounded-md shadow-sm appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm mb-5'
                onChange={handleInputChange}
                placeholder='Username'
              />
            </div>
            <div className='mb-5'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <Input
                color='orange'
                size='regular'
                outline={true}
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='rounded-md shadow-sm appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm mb-5'
                placeholder='Email address'
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-5 relative'>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <Input
                color='orange'
                size='regular'
                outline={true}
                id='password'
                name='password'
                type={ShowPass ? 'text' : 'password'}
                autoComplete='current-password'
                required
                className='rounded-md shadow-sm appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm mb-5'
                placeholder='Password'
                onChange={handleInputChange}
              />
              <button
                type='button'
                className='absolute top-0 right-0 p-3 rounded-lg outline-none focus:outline-none '
                onClick={handleShowPass}
              >
                {ShowPass ? <VscEye /> : <VscEyeClosed />}
              </button>
            </div>
            <div className='mb-5 relative'>
              <label htmlFor='confirm_password' className='sr-only'>
                Confirm Password
              </label>
              <Input
                color='orange'
                size='regular'
                outline={true}
                id='confirm_password'
                name='confirm_password'
                type={ShowCfPass ? 'text' : 'password'}
                autoComplete='current-password'
                required
                className='rounded-md shadow-sm appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm mb-5'
                placeholder='Confirm Password'
                onChange={handleInputChange}
              />
              <button
                type='button'
                className='absolute top-0 right-0 p-3 rounded-lg outline-none focus:outline-none '
                onClick={handleShowCfPass}
              >
                {ShowCfPass ? <VscEye /> : <VscEyeClosed />}
              </button>
            </div>
            <div className='mb-5'>
              <label htmlFor='email-address' className='sr-only'>
                Birthday
              </label>
              <Input
                color='orange'
                size='regular'
                outline={true}
                id='birthday'
                name='birthday'
                type='date'
                autoComplete='date'
                required
                className='rounded-md shadow-sm appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm mb-5'
                placeholder='Date of birth'
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <Button
              color='orange'
              buttonType='filled'
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-zest-500 hover:bg-zest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zest-500'
            >
              Sign up
            </Button>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/4'></span>
            <h5 className='text-xs text-center text-gray-500 uppercase dark:text-gray-400'>
              Or login with
            </h5>
            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <div className='flex justify-between'>
            <Button color='indigo' buttonType='filled' style={{ width: '47%' }}>
              <FaFacebookF /> Facebook
            </Button>
            <Button color='red' buttonType='filled' style={{ width: '47%' }}>
              <FaGoogle />
              Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterComponent;
