/** @format */

import React from 'react';
import {
  Avatar,
  Box,
  Typography as Typo,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Badge,
  Stack,
  TextField,
  InputAdornment,
  Popover,
} from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {
  MoreVertOutlined,
  Delete,
  Edit,
  CameraAltOutlined,
} from '@mui/icons-material';
import { RiChatSmile3Line } from 'react-icons/ri';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import { FiShare } from 'react-icons/fi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import { Picker } from 'emoji-mart';
import { TiDeleteOutline } from 'react-icons/ti';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { styles } from '../../assets/styles/PostStyles';
import Comment from './Comment';
import useClasses from '../../assets/styles/UseClasses';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function Post(props) {
  const classes = useClasses(styles);

  const { userDetail, post, setSelectedPost, likePost, commentPost } = props;
  const currentUser = JSON.parse(localStorage.getItem('profile')).user;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEmoji, setAnchorEmoji] = React.useState(null);
  const [hideComment, setHideComment] = React.useState(true);
  const [commentSrc, setCommentSrc] = React.useState();
  const [comment, setComment] = React.useState({
    content: '',
    imageSrc: '',
  });

  const open = Boolean(anchorEl);
  const openEmoji = Boolean(anchorEmoji);
  let callback;
  switch (window.location.pathname.split('/')[1]) {
    case 'profile':
      callback = 'profile';
      break;
    default:
      callback = 'home';
      break;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setSelectedPost(post);
  };

  const handleDelete = () => {
    props.deletePost({ id: post._id, callback });
  };

  const handleOpenEmoji = (event) => {
    setAnchorEmoji(event.currentTarget);
  };

  const handleCloseEmoji = () => {
    console.log(111);
    setAnchorEmoji(null);
  };

  const handleAddEmoji = (emoji) => {
    setComment({ ...comment, content: comment.content + emoji.native });
  };

  const handleChangeComment = (event) => {
    setComment({ ...comment, content: event.target.value });
  };

  const handleUploadImage = (event) => {
    const { files } = event.target;
    if (files) {
      setCommentSrc(URL.createObjectURL(files[0]));
      setComment({
        ...comment,
        image: files[0],
      });
    }
  };

  const handleRemoveImg = () => {
    setCommentSrc();
    setComment({ ...comment, images: '' });
  };

  const handleLike = () => {
    likePost({
      _id: post._id,
      userId: currentUser?._id,
      callback: userDetail ? true : false,
    });
  };

  const handleComment = (event) => {
    if (event.key === 'Enter') {
      commentPost({
        postId: post?._id,
        comment,
        callback,
      });
    }
  };

  let _renderImage = [];
  if (commentSrc) {
    _renderImage = (
      <div className={'relative'} style={{ width: 'fit-content' }}>
        <TiDeleteOutline
          color='gray'
          className={'absolute cursor-pointer rounded-full bg-white'}
          size={30}
          style={{ top: '2%', right: '2%' }}
          onClick={() => handleRemoveImg()}
        />
        <img
          src={commentSrc}
          alt={'uploaded comment'}
          className={'object-cover rounded-lg mt-4'}
          style={{ maxWidth: '10rem' }}
        />
      </div>
    );
  }

  const menu = (
    <Menu
      id='basic-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      sx={{
        '& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper':
          {
            borderRadius: '10px',
          },
      }}
    >
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <BookmarkBorderIcon fontSize='small' />
          </ListItemIcon>
          <ListItemText onClick={handleEdit}>
            <Typo variant='body1'>Save Post</Typo>
            <Typo variant='caption'>Add this post to saved items</Typo>
          </ListItemText>
        </MenuItem>
        {currentUser?._id === post?.owner?._id && (
          <MenuList>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Edit fontSize='small' />
              </ListItemIcon>
              <ListItemText onClick={handleEdit}>Edit this post</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Delete fontSize='small' />
              </ListItemIcon>
              <ListItemText onClick={handleDelete}>
                Delete this post
              </ListItemText>
            </MenuItem>
          </MenuList>
        )}
      </MenuList>
    </Menu>
  );

  // console.log(post?.likes?.findIndex(({ _id }) => _id === currentUser?._id));

  return (
    <Box
      className={
        'max-w-full bg-white my-8 rounded-lg shadow-xl dark:bg-bunker-500'
      }
    >
      <Box className={'p-5'}>
        <Box className={'flex items-center justify-between'}>
          <Box className={'flex items-center'}>
            <Avatar
              className={'cursor-pointer'}
              sx={{ marginRight: '1rem' }}
              src={post?.owner?.avatar?.url}
              alt={`${post?.owner?.fullname}-avatar`}
              onClick={() => (
                <Redirect
                  to={`${window.location.origin}/${
                    window.location.pathname.split('/')[1]
                  }/${post?.owner._id}`}
                />
              )}
            />
            <Box className={'flex flex-col'}>
              <Box className={'flex items-end'}>
                <Typo
                  className={'cursor-pointer'}
                  variant='h6'
                  onClick={() => (
                    <Redirect
                      to={`${window.location.origin}/${
                        window.location.pathname.split('/')[1]
                      }/${post?.owner._id}`}
                    />
                  )}
                >
                  {post?.owner?.fullname}
                </Typo>
                <Typo
                  variant='caption'
                  sx={{
                    fontWeight: 'bold',
                    paddingBottom: '2px',
                    paddingLeft: '5px',
                  }}
                >
                  {post?.location && ' at ' + post.location}
                </Typo>
              </Box>
              <Typo variant='caption'>2 giờ trước</Typo>
            </Box>
          </Box>
          <IconButton
            className={'focus:outline-none'}
            aria-label='more'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertOutlined />
          </IconButton>
          {menu}
        </Box>
        <Box className={'py-5 h-full'}>
          <Typo variant='body1'>{post.content}</Typo>
        </Box>
        <Box className={'flex justify-between'}>
          <Typo variant='caption'>
            {post?.likes?.length === 0
              ? ''
              : post?.likes?.length === 1
              ? post?.likes[0]?.fullname
              : post?.likes?.findIndex(({ _id }) => _id === currentUser?._id) >=
                0
              ? `You and ${post?.likes?.length - 1} others`
              : post?.likes?.length}
          </Typo>
          <Box>
            <Typo
              variant='caption'
              sx={classes.sxCommentText}
              onClick={() => setHideComment((preState) => !preState)}
            >
              {post?.comments?.length === 0
                ? ''
                : post?.comments?.length + ' comments'}
            </Typo>
            <Typo variant='caption'>
              {post?.shares?.length === 0
                ? ''
                : post?.shares?.length + ' shares'}
            </Typo>
          </Box>
        </Box>
        <Divider />
        <Box className={'flex justify-between'}>
          <Button
            variant='text'
            className={'flex justify-center focus:outline-none w-2/6'}
            sx={
              post?.likes?.map(({ _id }) => _id)?.indexOf(currentUser?._id) < 0
                ? { color: `${grey[700]}` }
                : { color: `${blue[700]}` }
            }
            onClick={handleLike}
          >
            {post?.likes?.length > 0 ? (
              <HiThumbUp size='20' className={'mr-2'} />
            ) : (
              <HiOutlineThumbUp size='20' className={'mr-2'} />
            )}
            Like
          </Button>
          <Button
            variant='text'
            className={'flex justify-center focus:outline-none w-2/6'}
            sx={{
              color: `${grey[700]}`,
            }}
            onClick={() => setHideComment((preState) => !preState)}
          >
            <FaRegCommentAlt size='20' className={'mr-2'} />
            Comment
          </Button>
          <Button
            variant='text'
            className={'flex justify-center focus:outline-none w-2/6'}
            sx={{
              color: `${grey[700]}`,
            }}
          >
            <FiShare size='20' className={'mr-2'} />
            Share
          </Button>
        </Box>
        <Divider />
        <Stack
          sx={
            hideComment
              ? { visibility: 'hidden', position: 'absolute' }
              : { visibility: 'visible', position: 'relative' }
          }
          className={'pt-2'}
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <StyledBadge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant='dot'
          >
            <Avatar
              sx={classes.sxCommentAvatar}
              alt={currentUser?.fullname}
              src={currentUser?.avatar?.thumb300}
            />
          </StyledBadge>
          <TextField
            className={'rounded-xl'}
            sx={classes.sxCommentField}
            size='small'
            fullWidth
            variant='outlined'
            value={comment?.content || ''}
            onKeyPress={handleComment}
            onChange={handleChangeComment}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Stack direction='row' justifyContent='center' spacing={1}>
                    <IconButton
                      edge='end'
                      sx={{ '&:focus': { outline: 'none' } }}
                    >
                      <label htmlFor='upload-comment'>
                        <CameraAltOutlined />
                      </label>
                    </IconButton>
                    <input
                      hidden={true}
                      type='file'
                      name='comment'
                      id='upload-comment'
                      onChange={handleUploadImage}
                    />

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
                        showPreview={false}
                        title='Pick your emoji…'
                        onSelect={(e) => handleAddEmoji(e)}
                      />
                    </Popover>
                  </Stack>
                </InputAdornment>
              ),
            }}
            placeholder='Write a comment ...'
          />
          {_renderImage}
        </Stack>
        <Box>
          {post?.comments.map((comment, index) => (
            <Comment
              key={index}
              content={comment.content}
              owner={comment?.owner}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
