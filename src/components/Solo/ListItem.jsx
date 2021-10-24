/** @format */

import { Box } from '@mui/system';
import { IconButton, Typography as Typo } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function ListItem({ list, setSelected, deleteItem }) {
  const handleSelectedItem = (item) => {
    setSelected(item);
  };
  const _renderList = list?.map((item, index) => (
    <Box
      key={index}
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        paddingTop: 'auto',
        bgcolor: 'blueviolet',
        margin: '0  0 4% 4%',
        width: '20%',
        height: window.screen.width * (250 / 1920),
        borderRadius: '12px',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      }}
      onClick={() => handleSelectedItem(item)}
    >
      <IconButton
        onClick={() => deleteItem({ id: item._id })}
        sx={{
          position: 'absolute',
          right: '1%',
          top: '1%',
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        <DeleteIcon />
      </IconButton>
      <Box
        sx={{
          width: '100%',
          height: '20%',
          bgcolor: 'rgba(52,72,87,0.5)',
        }}
      >
        <Typo
          sx={{
            marginLeft: '5%',
            marginBottom: '5%',
          }}
          variant='body1'
        >
          {item?.name}
        </Typo>
      </Box>
    </Box>
  ));
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        marginLeft: '-3.5%',
        maxWidth: window.screen.width * (84 / 100 / 1920),
        height: '100vh',
      }}
    >
      {_renderList}
    </Box>
  );
}

export default ListItem;
