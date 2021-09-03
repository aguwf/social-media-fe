/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';
import meo_network_background from '../../assets/images/kitty_generated.jpg';
import success_signup from '../../assets/images/SuccessSignup.png';
import success_active from '../../assets/images/tick.png';

function Activation(props) {
  const { id } = useParams();

  console.log(props);

  React.useEffect(() => {
    if (id) {
        props.activeAccountRequest(id);
    }
  }, [id]);
  return (
    <div>
      <div
        className='min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8'
        style={{
          backgroundImage: `url(${meo_network_background})`,
          backgroundSize: '750px',
        }}
      >
        <div className='max-w-xl w-full space-y-8 shadow-4xl rounded-xl p-9 bg-white dark:bg-gray-800'>
          <img
            className={'m-auto w-40 h-40 object-cover'}
            src={id ? success_active : success_signup}
            alt='Success'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300'>
            {id
              ? `Success ! Welcome to coffee social network`
              : `Congratulation ! You just success sign up new account`}
          </h2>
          <p className={'text-center text-xl'}>
            {id
              ? `We hope you feel great ! Come and post great things about coffee`
              : `Check your email to active your account`}
          </p>
          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/4'></span>
            <h5 className='text-xs text-center text-gray-500 uppercase dark:text-gray-400'>
              Or login here
            </h5>
            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <a
            className={
              'btn btn-block bg-zest-500 border-0 hover:bg-zest-400 dark:hover:bg-zest-600'
            }
            href='/login'
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Activation;
