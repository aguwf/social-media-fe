/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Autocomplete,
  CircularProgress,
  Checkbox,
  Typography as Typo,
} from '@mui/material';
import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box } from '@mui/system';
import useClasses from '../../../assets/styles/UseClasses';
import { styles } from './CreateCategoryStyle';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

function CreateCategory({
  newCategory,
  selectedCategory,
  setNewCategory,
  categoryImg,
  setCategoryImg,
  openCategory,
  handleClose,
  descriptionElementRef,
  listProduct,
  getProduct,
  handleSubmitCategory,
}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const classes = useClasses(styles);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      //Goi action
      getProduct();
      if (active) {
        setOptions([...listProduct]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChangeImage = (event) => {
    const { files } = event.target;

    if (files) {
      setCategoryImg((preState) => {
        return {
          ...preState,
          file: files[0],
          imgSrc: URL.createObjectURL(files[0]),
        };
      });
    }
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    if (name && value) {
      setNewCategory((preState) => {
        return { ...preState, [name]: value };
      });
    }
  };

  const handleSubmit = () => {
    handleSubmitCategory();
    handleClose();
  };

  const handleChangeProduct = (event, value) => {
    let dummyCategory = newCategory ?? {};
    dummyCategory.products = selectedCategory?.products
      ? [...selectedCategory?.products, ...value.map(({ _id }) => _id)]
      : [...value.map(({ _id }) => _id)];

    setNewCategory((preState) => {
      return { ...preState, ...dummyCategory };
    });
  };

  return (
    <Dialog
      open={openCategory}
      onClose={handleClose}
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
    >
      <DialogTitle id='scroll-dialog-title' sx={classes.sxDialogTitle}>
        Create category
      </DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          id='scroll-dialog-description'
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <TextField
            sx={classes.sxCateName}
            name='name'
            label='Tên danh mục'
            onChange={handleChangeInput}
            required
          />
          <Autocomplete
            sx={classes.sxCateName}
            id='asynchronous-demo'
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            multiple
            disableCloseOnSelect
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            )}
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Add product'
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color='inherit' size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            onChange={handleChangeProduct}
          />
          <Box sx={classes.sxUploadTool}>
            <Typo>Ảnh đại diện</Typo>
            <label htmlFor='upload-category' className={classes.uploadBtn}>
              <input
                onChange={handleChangeImage}
                hidden={true}
                type='file'
                name='upload-category'
                id='upload-category'
                accept='image/*'
              />
              Chọn ảnh
            </label>
          </Box>
          <Box>
            <img
              style={{
                borderRadius: '12px',
              }}
              src={
                categoryImg?.imgSrc ??
                'https://res.cloudinary.com/thcx/image/upload/v1635040687/SD-default-image_c0zwpi.png'
              }
              alt='upload-img-category'
            />
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={classes.sxDialogFooter}>
        <Button
          sx={{ ...classes.sxFooterBtn, ...classes.sxRedText }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button sx={classes.sxFooterBtn} onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateCategory;
