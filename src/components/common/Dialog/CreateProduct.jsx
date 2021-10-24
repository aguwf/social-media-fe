/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {
  Box,
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
  IconButton,
} from '@mui/material';
import useClasses from '../../../assets/styles/UseClasses';
import { styles } from './CreateProductStyle';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { CancelRounded } from '@mui/icons-material';
import default_image from '../../../assets/images/default-image.jpg';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

function CreateProduct({
  newProduct,
  setNewProduct,
  productImg,
  setProductImg,
  openProduct,
  handleClose,
  descriptionElementRef,
  listCategory,
  getCategory,
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
      getCategory();
      if (active) {
        setOptions([...listCategory]);
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
      setProductImg((preState) => {
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
      setNewProduct((preState) => {
        return { ...preState, [name]: value };
      });
    }
  };

  const handleChangeCategory = (event, value) => {
    let dummyCategory = newProduct ?? {};
    dummyCategory.categories = newProduct?.categories
      ? [...newProduct?.categories, ...value.map(({ _id }) => _id)]
      : [...value.map(({ _id }) => _id)];

    setNewProduct((preState) => {
      return { ...preState, ...dummyCategory };
    });
  };

  return (
    <Dialog
      open={openProduct}
      onClose={handleClose}
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
    >
      <DialogTitle id='scroll-dialog-title' sx={classes.sxDialogTitle}>
        Create product
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
            label='Tên sản phẩm'
            onChange={handleChangeInput}
            required
          />
          <Box sx={classes.sxRow}>
            <TextField
              sx={{ ...classes.sxWidth40 }}
              type='number'
              name='price'
              label='Giá'
              onChange={handleChangeInput}
              required
            />
            <TextField
              sx={{ ...classes.sxWidth60 }}
              name='brand'
              label='Nhãn hiệu'
              onChange={handleChangeInput}
            />
          </Box>
          <TextField
            rows={4}
            multiline
            sx={classes.sxCateName}
            name='information'
            label='Thông tin sản phẩm'
            onChange={handleChangeInput}
          />
          <TextField
            sx={classes.sxCateName}
            name='taste'
            label='Hương vị'
            onChange={handleChangeInput}
          />
          <TextField
            sx={classes.sxCateName}
            name='nutrition'
            label='Thành phần'
            onChange={handleChangeInput}
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
            multiple
            disableCloseOnSelect
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Thêm danh mục'
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
            onChange={handleChangeCategory}
          />
          <Box sx={classes.sxUploadTool}>
            <Typo>Ảnh đại diện</Typo>
            <label htmlFor='upload-product' className={classes.uploadBtn}>
              <input
                onChange={handleChangeImage}
                hidden={true}
                type='file'
                name='upload-product'
                id='upload-product'
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
              src={productImg?.imgSrc ?? default_image}
              alt='upload-img-product'
            />
          </Box>
          <Box sx={{ ...classes.sxUploadTool, marginTop: '3%' }}>
            <Typo>Ảnh sản phẩm</Typo>
            <label htmlFor='upload-product' className={classes.uploadBtn}>
              <input
                multiple
                onChange={handleChangeImage}
                hidden={true}
                type='file'
                name='upload-product'
                id='upload-product'
                accept='image/*'
              />
              Chọn ảnh
            </label>
          </Box>
          <Box
            sx={{
              ...classes.sxHorizontalListContainer,
              ...classes.sxWrapElement,
            }}
          >
            {productImg?.listSrc
              ? productImg?.listSrc.map((image, key) => {
                  return (
                    <Box
                      key={`actor-${key}`}
                      sx={{
                        ...classes.sxWrapItem,
                        ...classes.sxRelativeParent,
                      }}
                    >
                      <img
                        className={classes.rectangleImg}
                        src={image}
                        alt='product'
                      />
                      <IconButton
                        size='small'
                        sx={classes.sxDeleteBtn}
                        onClick={() => {
                          const newState = { ...productImg };
                          newState.images.splice(key, 1);
                          newState.listSrc.splice(key, 1);
                          setProductImg({ newState });
                        }}
                      >
                        <CancelRounded />
                      </IconButton>
                    </Box>
                  );
                })
              : [default_image].map((image, key) => {
                  return (
                    <Box
                      key={`actor-${key}`}
                      sx={{
                        ...classes.sxWrapItem,
                      }}
                    >
                      <img
                        className={classes.rectangleImg}
                        src={image}
                        alt='product'
                      />
                    </Box>
                  );
                })}
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
        <Button sx={classes.sxFooterBtn} onClick={handleClose}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateProduct;
