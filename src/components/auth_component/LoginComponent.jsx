/** @format */

import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Button from '@material-tailwind/react/Button';
import Checkbox from '@material-tailwind/react/Checkbox';
import Input from '@material-tailwind/react/Input';
import meo_network_logo from '../../assets/images/meo-network-logo(1).png';
import meo_network_background from '../../assets/images/kitty_generated.jpg';
import { useHistory } from 'react-router-dom';

function LoginComponent(props) {
  const history = useHistory();
  const initialState = {
    username: '',
    password: '',
    remember: false,
  };
  const [User, setUser] = React.useState(initialState);
  const [ShowPass, setShowPass] = React.useState(false);

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const handleCheckboxChange = () => {
    setUser({ ...User, remember: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest({ User, history });
  };

  const handleShowPass = (event) => {
    event.preventDefault();
    setShowPass((preShowPass) => !preShowPass);
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'
      style={
        {
          // backgroundImage: `url(${meo_network_background})`,
          // backgroundSize: '750px',
        }
      }
    >
      <div className='max-w-3/10 w-full space-y-8 shadow-4xl rounded-xl p-9 bg-white dark:bg-gray-800'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src={meo_network_logo}
            alt={`Meo's Network`}
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <a
              href='/register'
              className='font-medium text-zest-600 hover:text-zest-500'
            >
              register new account to access Meo's Network
            </a>
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div className='pb-5'>
              <label htmlFor='email-address' className='sr-only'>
                Email address or Username
              </label>
              <Input
                color='orange'
                size='regular'
                outline={true}
                id='email-address'
                name='username'
                type='text'
                autoComplete='email'
                required
                className='bg-gray-700 rounded-md shadow-sm -space-y-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm'
                placeholder='Email address or Username'
                onChange={handleInputChange}
              />
            </div>
            <div className='relative'>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <Input
                type={ShowPass ? 'text' : 'password'}
                color='orange'
                size='regular'
                outline={true}
                id='password'
                name='password'
                autoComplete='current-password'
                required
                className='rounded-md shadow-sm -space-y-px appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-zest-500 focus:border-zest-500 focus:z-10 sm:text-sm -ms-clear:hidden'
                placeholder='Password'
                onChange={handleInputChange}
              />
              <button
                className='absolute top-0 right-0 p-3 rounded-lg outline-none focus:outline-none '
                onClick={handleShowPass}
              >
                {ShowPass ? <VscEye /> : <VscEyeClosed />}
              </button>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <Checkbox
                color='orange'
                id='remember-me'
                name='remember-me'
                type='checkbox'
                text='Remember me'
                onChange={handleCheckboxChange}
              />
            </div>

            <div className='text-sm'>
              <a
                href='#forgot'
                className='font-medium text-zest-600 hover:text-zest-500'
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button
              type='submit'
              color='orange'
              buttonType='filled'
              ripple='light'
              className='group relative w-full flex border border-transparent text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zest-500'
              disabled={User.username && User.password ? false : true}
              onClick={handleSubmit}
            >
              Sign in
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
            <Button
              type='button'
              color='indigo'
              buttonType='filled'
              ripple='light'
              style={{ width: '47%' }}
              onClick={() => console.log('FB')}
            >
              <FaFacebookF /> Facebook
            </Button>
            <Button
              type='button'
              color='red'
              ripple='light'
              buttonType='filled'
              style={{ width: '47%' }}
              onClick={() => console.log('FB')}
            >
              <FaGoogle />
              Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
