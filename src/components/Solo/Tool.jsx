/** @format */

import { Add } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Tool({ handleClickOpenCreate }) {
  return (
    <Box sx={{ marginBottom: '3%' }}>
      <TextField size='small' label='Tìm kiếm' />
      <Button
        size='large'
        sx={{ marginLeft: '1%' }}
        onClick={handleClickOpenCreate}
      >
        <Add />
      </Button>
    </Box>
  );
}

export default Tool;
