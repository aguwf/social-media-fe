/** @format */

import React from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { RiChatSmile3Line } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import {
  IoImagesOutline,
  IoLocationOutline,
  IoMusicalNotesOutline,
} from 'react-icons/io5';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { red, green, blue } from '@mui/material/colors';
import { TextField, Typography as Typo } from '@mui/material';
import { Box } from '@mui/system';
import { styles } from '../../assets/styles/PostFormStyles';
import useClasses from '../../assets/styles/UseClasses';

function PostForm(props) {
  const classes = useClasses(styles);

  const default_avatar =
    'https://res.cloudinary.com/thcx/image/upload/v1628583671/account_nqfbls.png';

  const initialPost = {
    content: '',
    images: [],
    location: {},
  };

  const currentUser = JSON.parse(localStorage.getItem('profile')).user;

  const [post, setPost] = React.useState(initialPost);
  const [listSrc, setListSrc] = React.useState([]);
  const [anchorEmoji, setAnchorEmoji] = React.useState(null);

  const openEmoji = Boolean(anchorEmoji);

  const [showModal, setShowModal] = React.useState(false);

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (showModal) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [showModal]);

  React.useEffect(() => {
    if (props?.selectedPost) {
      setPost(props.selectedPost);
      setShowModal(true);
    }
  }, [props.selectedPost]);

  const handleOpenEmoji = (event) => {
    setAnchorEmoji(event.currentTarget);
  };

  const handleCloseEmoji = () => {
    setAnchorEmoji(null);
  };

  const handleAddEmoji = (emoji) => {
    setPost({ ...post, content: post.content + emoji.native });
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setPost({ ...post, content: value });
  };

  const handleUploadImage = (event) => {
    const { files } = event.target;
    const dummyListSrc = listSrc;
    if (files) {
      Array.from(files).forEach((img) => {
        dummyListSrc.push(URL.createObjectURL(img));
      });
      setListSrc([...dummyListSrc]);
      setPost({
        ...post,
        images: [...post.images, ...Array.from(files).map((item) => item)],
      });
      !showModal && setShowModal(true);
    }
  };

  const handleRemoveImg = (index) => {
    const dummyListSrc = listSrc;
    const dummyImages = post.images;

    dummyListSrc.splice(index, 1);
    dummyImages.splice(index, 1);

    setListSrc([...dummyListSrc]);
    setPost({ ...post, images: [...dummyImages] });
  };

  const handleSubmit = () => {
    if (post.content || post.images) {
      let callback;
      switch (window.location.pathname.split('/')[1]) {
        case 'profile':
          callback = 'profile';
          break;
        default:
          callback = 'home';
          break;
      }
      props.addPost({ post, callback });
    }
    handleClose();
  };

  const _tool = (
    <Box sx={showModal ? classes.sxToolWrapperModel : classes.sxToolWrapper}>
      <input
        hidden={true}
        type='file'
        name='post-img'
        id='post-img'
        accept='image/*'
        multiple
        onChange={handleUploadImage}
      />
      <Button
        size='small'
        variant='contained'
        sx={{
          ...classes.sxToolBtn,
          color: red['300'],
        }}
      >
        <label
          htmlFor='post-img'
          className={'flex items-center text-md cursor-pointer'}
        >
          <IoImagesOutline className={'pr-2 w-6 h-6'} /> Photos
        </label>
      </Button>
      <Button
        variant='contained'
        size='small'
        sx={{
          ...classes.sxToolBtn,
          color: green['300'],
        }}
      >
        <IoLocationOutline className={'pr-2 w-6 h-6'} /> Check in
      </Button>
      <Button
        variant='contained'
        size='small'
        sx={{
          ...classes.sxToolBtn,
          color: blue['300'],
        }}
      >
        <IoMusicalNotesOutline className={'pr-2 w-6 h-4'} /> Media
      </Button>
    </Box>
  );

  let _renderImage = [];
  if (listSrc) {
    _renderImage = listSrc.map((imgSrc, index) => {
      return (
        <div
          key={index}
          className={'relative'}
          style={{ width: 'fit-content' }}
        >
          <TiDeleteOutline
            color='gray'
            className={'absolute cursor-pointer rounded-full bg-white'}
            size={30}
            style={{ top: '2%', right: '2%' }}
            onClick={() => handleRemoveImg(index)}
          />
          <img
            src={imgSrc}
            alt={'uploaded' + index}
            className={'object-cover'}
            style={{ maxWidth: '10rem' }}
          />
        </div>
      );
    });
  }

  const handleClose = () => {
    setShowModal(false);
    setPost(initialPost);
    setListSrc([]);
    props.setSelectedPost();
  };

  return (
    <div
      className={
        'max-w-full h-48 bg-white my-8 rounded-lg shadow-3xl dark:bg-bunker-600'
      }
    >
      <div className={'p-8'}>
        <div className={'flex'}>
          <div className='avatar'>
            <div className='rounded-full w-10 h-10'>
              <img
                className={'object-cover'}
                src={currentUser?.avatar?.thumb200 || default_avatar}
                alt={'avatar'}
              />
            </div>
          </div>
          <div className={'ml-3 w-full'}>
            <div
              className='p-2 bg-gray-200 rounded-full cursor-pointer text-lg text-gray-800 text-center align-middle hover:bg-gray-300 dark:bg-bunker-400 dark:text-gray-300'
              onClick={() => setShowModal(true)}
            >
              What's on your mind ?
            </div>
          </div>
        </div>
        <div className='divider opacity-100'></div>

        {_tool}

        <Dialog
          open={showModal}
          onClose={handleClose}
          scroll={'paper'}
          aria-labelledby='scroll-dialog-title'
          aria-describedby='scroll-dialog-description'
          sx={{
            '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
              borderRadius: '12px',
            },
          }}
        >
          <DialogTitle id='scroll-dialog-title'>
            <div className={'text-center'}>Create post</div>
          </DialogTitle>
          <DialogContent dividers={true}>
            <div className='sticky dark:bg-bunker-600'>
              <div className={'flex items-center'}>
                <div className='ava'>
                  <img
                    className='rounded-full w-8 h-8 object-cover'
                    src={currentUser?.avatar?.thumb200 || default_avatar}
                    alt={'avatar'}
                  />
                </div>
                <Typo variant='body1' className={'pl-5'}>
                  {currentUser?.fullname}
                </Typo>
              </div>
            </div>
            <div
              style={{
                height: '20rem',
              }}
            >
              <div className='flex h-full'>
                <TextField
                  sx={{
                    marginTop: '1rem',
                    width: '100%',
                    '& .MuiInput-input': {
                      '&::-webkit-scrollbar': {
                        width: '5px',
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: '#e4e4e4',
                        borderRadius: '100px',
                      },

                      '&::-webkit-scrollbar-thumb': {
                        borderRadius: '100px',
                        backgroundImage:
                          'linear-gradient(180deg, #f48b29 0%, #f48b29 99%)',
                        boxShadow: 'inset 2px 2px 5px 0 rgba(#fff, 0.5)',
                      },
                    },
                  }}
                  multiline
                  maxRows={12}
                  value={post.content}
                  onChange={handleChangeInput}
                  label={'What on your mind?'}
                  autoFocus={true}
                  variant='standard'
                />
                <div>
                  <IconButton
                    edge='end'
                    sx={{ '&:focus': { outline: 'none' } }}
                    onClick={handleOpenEmoji}
                  >
                    <RiChatSmile3Line />
                  </IconButton>
                  <Popover
                    open={openEmoji}
                    anchorEl={anchorEmoji}
                    onClose={handleCloseEmoji}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Picker
                      theme='auto'
                      showPreview={false}
                      title='Pick your emoji…'
                      onSelect={(e) => handleAddEmoji(e)}
                    />
                  </Popover>
                </div>
              </div>
            </div>

            <div
              className={'grid grid-cols-3 grid-flow-row-dense'}
              style={{ gridTemplateRows: 'repeat(auto-fill, 1fr)' }}
            >
              {_renderImage}
            </div>

            <div
              style={{ width: '60vh' }}
              className={
                'flex items-center justify-between border-2 border-solid border-gray-400 rounded-xl mt-5 p-3'
              }
            >
              <Typo variant='body1'>Add to your post</Typo>

              {_tool}
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                borderRadius: '0.5rem',
                '&:focus': {
                  outline: 'none',
                },
              }}
              variant='contained'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                borderRadius: '0.5rem',
                '&:focus': {
                  outline: 'none',
                },
              }}
              variant='contained'
              onClick={handleSubmit}
            >
              {props.selectedPost ? 'Update Post' : 'Post'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default PostForm;
