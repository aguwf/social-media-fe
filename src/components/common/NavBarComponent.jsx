/** @format */

import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { FiCompass, FiMoon } from 'react-icons/fi';
import { IoLogOutOutline, IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import Popover from '@material-tailwind/react/Popover';
import PopoverContainer from '@material-tailwind/react/PopoverContainer';
import PopoverHeader from '@material-tailwind/react/PopoverHeader';
import PopoverBody from '@material-tailwind/react/PopoverBody';
import Button from '@material-tailwind/react/Button';
import './NavBar.css';
import { useHistory, useLocation } from 'react-router-dom';

function NavBarComponent(props) {
  console.log(props);
  const currentUser = JSON.parse(localStorage.getItem('profile')).user;

  const [Selected, setSelected] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  const default_avatar =
    'https://res.cloudinary.com/thcx/image/upload/v1628583671/account_nqfbls.png';

  const history = useHistory();
  const { pathname } = useLocation();

  const avatarRef = React.useRef();
  const inputRef = React.useRef();
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setSelected(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [avatarRef]);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleLogout = () => {
    props.logoutRequest();
    history.push('/');
  };

  const isActive = (pn) => {
    if (pn === pathname) return 'active';
  };

  const isIconActive = (pn) => {
    if (pn === pathname) {
      return 'active-color';
    } else {
      return 'non-active-color';
    }
  };

  const handleSelected = () => {
    setSelected((preSelect) => !preSelect);
  };

  function debounce(fn, delay) {
    return (args) => {
      clearTimeout(fn.id);

      fn.id = setTimeout(() => {
        fn.call(this, args);
      }, delay);
    };
  }

  const debounceSearch = React.useCallback(
    debounce(
      (nextValue) => props.searchRequest({ textSearch: nextValue }),
      1000,
    ),
    [],
  );

  const handleChangeSearch = (event) => {
    const { value } = event.target;

    if (value) {
      debounceSearch(value);
    } else {
      setShowSearch(false);
    }
  };

  const handleClickSearch = () => {
    setShowSearch(true);
  };

  const handleClick = (data) => {
    if (data) {
      data._id !== props.id && props.getSingleUserRequest({ _id: data?._id });
      setShowSearch(false);
      history.push(`/profile/${data?._id}`);
    }
  };

  const searchResult = props?.listUser &&
    showSearch &&
    inputRef.current.value && (
      <div className='transition duration-500 ease-in-out mt-2 absolute w-80 h-80 bg-gray-200 p-4 shadow-2xl rounded-xl'>
        {props.listUser.map((item, index) => {
          return (
            <div
              className=' flex px-2 py-4 cursor-pointer rounded-xl hover:bg-gray-300 z-10'
              onClick={() => handleClick(item)}
              ref={wrapperRef}
              key={index}
            >
              <div>
                <img
                  width={25}
                  height={25}
                  src={item?.avatar?.url || default_avatar}
                  alt='avatar'
                />
              </div>
              <h3 className='pl-3 text-base'>{item.fullname}</h3>
            </div>
          );
        })}
      </div>
    );

  return (
    <nav className='bg-white shadow dark:bg-gray-800 sticky top-0 z-10'>
      <div
        className='container px-6 py-3 mx-auto'
        style={{ maxWidth: '100vw' }}
      >
        <div className='flex flex-col md:flex-row md:justify-between md:items-center '>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <a
                className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
                href='/'
              >
                Meow's Coffee
              </a>

              <div className='mx-10 md:block'>
                <div className='relative flex items-center'>
                  <span className='absolute inset-y-0 left-0 pl-3'>
                    <svg
                      className='w-5 h-5 text-gray-400'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </svg>
                  </span>

                  <input
                    type='text'
                    className='py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-xl dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-zest-500 dark:focus:border-zest-500 focus:outline-none focus:ring-zest-500 focus:w-40 transition duration-500 ease-in-out'
                    placeholder='Search'
                    onChange={handleChangeSearch}
                    onClick={handleClickSearch}
                    ref={inputRef}
                  />
                </div>
                {searchResult}
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between md:flex'>
            <div className='flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1 w-80 justify-between'>
              <Button
                color='transparent'
                ripple='dark'
                className={
                  isActive('/') +
                  ' my-1 text-sm transition duration-500 ease-in-out leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 rounded-lg px-5 py-2 dark:hover:text-indigo-400 md:mx-4 md:my-0'
                }
                onClick={() => history.push('/')}
              >
                <HiOutlineHome className={isIconActive('/')} size='1.5rem' />
              </Button>
              <Button
                color='transparent'
                ripple='dark'
                className={
                  isActive('/message') +
                  ' my-1 text-sm transition duration-500 ease-in-out leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 rounded-lg px-5 py-2 dark:hover:text-indigo-400 md:mx-4 md:my-0'
                }
                onClick={() => history.push('/message')}
              >
                <AiOutlineMessage
                  className={isIconActive('/message')}
                  size='1.7rem'
                />
              </Button>
              <Button
                color='transparent'
                ripple='dark'
                className={
                  isActive('/discover') +
                  ' my-1 text-sm transition duration-500 ease-in-out leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 rounded-lg px-5 py-2 pt-3 dark:hover:text-indigo-400 md:mx-4 md:my-0'
                }
                onClick={() => history.push('/discover')}
              >
                <FiCompass
                  className={isIconActive('/discover')}
                  size='1.5rem'
                />
              </Button>
              <Button
                color='transparent'
                ripple='dark'
                className={
                  isActive('/notify') +
                  ' my-1 text-sm transition duration-500 ease-in-out leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 rounded-lg px-5 py-2 dark:hover:text-indigo-400 md:mx-4 md:my-0'
                }
                onClick={() => history.push('/notify')}
              >
                <IoNotificationsOutline
                  className={isIconActive('/notify')}
                  size='1.7rem'
                />
              </Button>
            </div>

            <div
              className='flex transition duration-500 ease-in-out items-end -mx-1 cursor-pointer hover:bg-gray-100 rounded-lg md:mx-0'
              ref={avatarRef}
            >
              <Button
                color='transparent'
                ripple='dark'
                className={Selected && 'active'}
                onClick={handleSelected}
              >
                <img
                  className={'rounded-full'}
                  width='25rem'
                  height='25rem'
                  src={currentUser?.avatar?.url || default_avatar}
                  alt='Avatar'
                />
              </Button>
            </div>
            <Popover placement='bottom' ref={avatarRef}>
              <PopoverContainer className='bg-gray-200 dark:bg-bunker-500'>
                <PopoverHeader className='text-bunker-800 dark:text-gray-400'>
                  Settings
                </PopoverHeader>
                <PopoverBody>
                  <a
                    href={`/profile/${currentUser?._id}`}
                    className='block py-1 px-5 hover:bg-gray-100 rounded-xl w-full'
                  >
                    <h3 className='flex items-center font-medium py-2 px-full text-gray-700 dark:text-gray-400'>
                      <img
                        width='50rem'
                        height='50rem'
                        src={currentUser?.avatar?.url || default_avatar}
                        alt={currentUser?.user?.fullname + 'Avatar'}
                        className='mr-5 p-1 bg-gray-300 rounded-full'
                      />{' '}
                      <div>
                        <h1 className='text-xl font-bold'>
                          {currentUser?.fullname}
                        </h1>
                        View your profile
                      </div>
                    </h3>
                  </a>
                  <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/4'></span>
                  <a
                    href='/#'
                    className='block py-1 px-5 hover:bg-gray-100 rounded-xl w-full'
                  >
                    <h3 className='flex items-center font-medium py-2 px-full text-bunker-500 dark:text-gray-400 '>
                      <FiMoon
                        className='mr-5 p-2 bg-gray-300 rounded-full'
                        size='2rem'
                      />{' '}
                      Change to dark mode
                    </h3>
                  </a>
                  <div
                    className='block py-1 px-5 cursor-pointer hover:bg-gray-100 rounded-xl w-full'
                    onClick={handleLogout}
                  >
                    <h3 className='flex items-center font-medium py-2 px-full text-bunker-500 dark:text-gray-400 '>
                      <IoLogOutOutline
                        className='mr-5 p-2 bg-gray-300 rounded-full'
                        size='2rem'
                      />{' '}
                      Logout
                    </h3>
                  </div>
                </PopoverBody>
              </PopoverContainer>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarComponent;
