/** @format */

import React from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { RiChatSmile3Line } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  IoImagesOutline,
  IoLocationOutline,
  IoMusicalNotesOutline,
} from 'react-icons/io5';

function PostForm(props) {
  const default_avatar = 'https://res.cloudinary.com/thcx/image/upload/v1628583671/account_nqfbls.png'
  const emotionRef = React.useRef(null);
  const initialPost = {
    content: '',
    images: [],
    location: {},
  };

  const [post, setPost] = React.useState(initialPost);
  const [listSrc, setListSrc] = React.useState([]);

  const [showModal, setShowModal] = React.useState(false);
  const [openEmotion, setOpenEmotion] = React.useState(false);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (emotionRef.current && !emotionRef.current.contains(event.target)) {
        setOpenEmotion(true);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [emotionRef]);

  const handleAddEmoji = (emoji) => {
    setPost({ ...post, content: post.content + emoji.native });
  };

  const handleOpenEmoji = () => {
    setOpenEmotion((preShow) => !preShow);
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setPost({ ...post, content: value });
  };

  const handleUploadImage = (event) => {
    const { files } = event.target;
    const dummyListSrc = listSrc
    if (files) {
      Array.from(files).forEach((img) => {
        dummyListSrc.push(URL.createObjectURL(img))
      });
      setListSrc([...dummyListSrc])
      setPost({ ...post, images: [...post.images, ...Array.from(files).map((item) => item)] });
      !showModal&&setShowModal(true)
    }
  };

  const handleRemoveImg = (index) => {
    const dummyListSrc = listSrc;
    const dummyImages = post.images

    dummyListSrc.splice(index, 1)
    dummyImages.splice(index, 1)

    setListSrc([...dummyListSrc])
    setPost({...post, images: [...dummyImages]})
  }

  const _tool = (
    <div className={'text-center'}>
      <input
        hidden={true}
        type='file'
        name='post-img'
        id='post-img'
        accept='image/*'
        multiple
        onChange={handleUploadImage}
      />
      <label
        htmlFor='post-img'
        className={
          'btn rounded-xl mr-6 w-32 bg-green-400 border-0 hover:bg-green-300'
        }
      >
        <IoImagesOutline size={20} className={'pr-2 w-8 h-8'} /> Photos
      </label>
      <button
        className={
          'btn rounded-xl mr-6 w-32 bg-red-400 border-0 hover:bg-red-300'
        }
      >
        <IoLocationOutline size={20} className={'pr-2 w-8 h-8'} /> Check in
      </button>
      <button
        className={'btn rounded-xl w-32 bg-blue-700 border-0 hover:bg-blue-600'}
      >
        <IoMusicalNotesOutline size={20} className={'pr-2 w-8 h-8'} /> Media
      </button>
    </div>
  );

  let _renderImage = [];
  if (listSrc) {
    _renderImage = listSrc.map((imgSrc, index) => {
      return (
        <div className={'relative'} style={{width: 'fit-content'}}>
          <TiDeleteOutline color='gray' className={'absolute cursor-pointer rounded-full bg-white'} size={30} style={{top: '2%', right: '2%'}} onClick={() => handleRemoveImg(index)}/>
          <img src={imgSrc} alt={'uploaded' + index} className={'object-cover'} style={{maxWidth: '10rem'}} />
        </div>
      );
    });
  }

  return (
    <div className={'max-w-full h-48 bg-white my-8 rounded-lg shadow-3xl'}>
      <div className={'p-8'}>
        <div className={'flex'}>
          <div className='avatar'>
            <div className='rounded-full w-10 h-10'>
              <img src={props?.avatar?.thumb200 || default_avatar} alt={'avatar'} />
            </div>
          </div>
          <div className={'ml-3 w-full'}>
            <div
              className='p-2 bg-gray-200 rounded-full cursor-pointer text-lg text-gray-800 text-center align-middle hover:bg-gray-300'
              onClick={() => setShowModal(true)}
            >
              What's on your mind ?
            </div>
          </div>
        </div>
        <div className='divider opacity-100'></div>

        {_tool}

        <Modal
          size='regular'
          active={showModal}
          toggler={() => setShowModal(false)}
        >
          <ModalHeader toggler={() => setShowModal(false)}>
            Create post
          </ModalHeader>
          <ModalBody>
            <div className='sticky'>
              <div className='divider mt-0'></div>
              <div className={'flex items-center'}>
                <div className='ava'>
                  <img
                    className='rounded-full w-12 h-12 object-cover'
                    src={props?.avatar?.thumb200 || default_avatar}
                    alt={'avatar'}
                  />
                </div>
                <div className={'pl-5 font-bold text-lg text-gray-800'}>
                  {props?.fullname}
                </div>
              </div>
            </div>
            <div
              style={{
                height: '20rem',
                minWidth: '46rem',
              }}
            >
              <div className='flex h-full'>
                <textarea
                  type='text'
                  className={
                    'w-full h-full rounded-lg mt-5 outline-none text-xl resize-none'
                  }
                  placeholder={'What on your mind?'}
                  value={post.content}
                  onChange={handleChangeInput}
                />
                <div
                  ref={emotionRef}
                  className={
                    'flex items-center justify-center w-10 h-10 cursor-pointer rounded-full relative mr-3 hover:bg-gray-200 relative'
                  }
                  onClick={handleOpenEmoji}
                >
                  <RiChatSmile3Line color={'gray'} size={30} />
                  <div hidden={openEmotion} ref={emotionRef}>
                    <Picker
                      showPreview={false}
                      title='Pick your emoji…'
                      style={{
                        position: 'absolute',
                        top: '100%',
                        right: '0%',
                        zIndex: 1
                      }}
                      onSelect={(e) => handleAddEmoji(e)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={'grid grid-cols-3 grid-flow-row-dense'} style={{ gridTemplateRows:'repeat(auto-fill, 1fr)'}}>
              {_renderImage}
            </div>

            <div
              className={
                'flex items-center justify-around border-2 border-solid border-gray-400 rounded-lg mt-5 p-3'
              }
            >
              <div
                className={
                  'text-center text-xl font-bold align-middle text-gray-800'
                }
              >
                Add to your post
              </div>

              {_tool}
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className={
                'btn btn-block btn-circle bg-zest-500 border-0 hover:bg-zest-400'
              }
              onClick={(e) => setShowModal(false)}
            >
              Post
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default PostForm;
