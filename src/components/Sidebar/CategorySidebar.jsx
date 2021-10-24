/** @format */

import { Box } from '@mui/material';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function CategorySidebar({ value, setValue, handleChange, listCategory }) {
  return (
    <Box>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          width: window.screen.width * (150 / 1080),
        }}
      >
        {/* {listCategory?.length > 0 && listCategory?.map(_renderTabs)} */}
        <Tab label='Danh mục' {...a11yProps(0)} />
        <Tab label='Sản phẩm' {...a11yProps(1)} />
        <Tab label='Voucher' {...a11yProps(2)} />
      </Tabs>
    </Box>
  );
}

export default CategorySidebar;
