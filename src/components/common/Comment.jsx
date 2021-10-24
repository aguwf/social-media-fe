/** @format */

import { Box } from '@mui/system';
import useClasses from '../../assets/styles/UseClasses';
import { styles } from '../../assets/styles/CommentStyles';
import React from 'react';
import {
  Avatar,
  MenuList,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography as Typo,
  Divider,
  IconButton,
} from '@mui/material';
import { Edit, Delete, MoreVertOutlined } from '@mui/icons-material';

function Comment({ content, image, owner }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useClasses(styles);
  const currentUser = JSON.parse(localStorage.getItem('profile')).user;
  const open = Boolean(anchorEl);

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleClose = () => {
    setAnchorEl();
  };

  const handleToolClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={classes.sxCommentRoot}>
      <Avatar
        sx={classes.sxCommentAvatar}
        alt={owner?.fullname}
        src={owner?.avatar?.thumb300}
      />
      <Box sx={classes.sxCommentWrapper}>
        <Box sx={classes.sxCommentName}>{owner?.fullname}</Box>
        {/* <Box sx={classes.sxContentWrapper}> */}
        <Box sx={classes.sxCommentContent}>{content}</Box>
        {/* </Box> */}
      </Box>
      <Box sx={classes.sxCommentTool}>
        <IconButton
          className={'focus:outline-none'}
          aria-label='more'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleToolClick}
        >
          <MoreVertOutlined />
        </IconButton>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuList>
            <MenuItem>
              {/* <ListItemIcon>
                  <BookmarkBorderIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText onClick={handleEdit}>
                  <Typo variant='body1'>Save Post</Typo>
                  <Typo variant='caption'>Add this post to saved items</Typo>
                </ListItemText> */}
              {currentUser?._id === owner?._id && (
                <MenuList>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Edit fontSize='small' />
                    </ListItemIcon>
                    <ListItemText onClick={handleEdit}>
                      Edit this comment
                    </ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Delete fontSize='small' />
                    </ListItemIcon>
                    <ListItemText onClick={handleDelete}>
                      Delete this comment
                    </ListItemText>
                  </MenuItem>
                </MenuList>
              )}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}

export default Comment;
