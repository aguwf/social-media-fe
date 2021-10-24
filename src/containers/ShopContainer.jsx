/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@mui/material';
import CategorySidebar from '../components/Sidebar/CategorySidebar';
import Tool from '../components/Solo/Tool';
import ListItem from '../components/Solo/ListItem';
import * as categoryAction from '../actions/CategoryAction';
import * as productAction from '../actions/ProductAction';
import CreateCategory from '../components/common/Dialog/CreateCategory';
import CreateProduct from '../components/common/Dialog/CreateProduct';

export const ShopContainer = (props) => {
  const {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    listCategory,
    listProduct,
  } = props;
  const descriptionElementRef = React.useRef(null);
  const [newCategory, setNewCategory] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState();
  const [categoryImg, setCategoryImg] = React.useState();
  const [newProduct, setNewProduct] = React.useState();
  const [selectedProduct, setSelectedProduct] = React.useState();
  const [productImg, setProductImg] = React.useState();
  const [value, setValue] = React.useState(0);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openProduct, setOpenProduct] = React.useState(false);

  React.useEffect(() => {
    getCategory({ page: 1 });
  }, []);

  React.useEffect(() => {
    switch (value) {
      case 0:
        getCategory({ page: 1 });
        break;
      case 1:
        getProduct({ page: 1 });
        break;
      case 2:
        break;
      default:
        break;
    }
  }, [value]);

  React.useEffect(() => {
    if (openCategory) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openCategory]);

  React.useEffect(() => {
    if (openProduct) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openProduct]);

  let renderList = [];
  switch (value) {
    case 0:
      renderList = [...listCategory];
      break;
    case 1:
      renderList = [...listProduct];
      break;

    default:
      break;
  }

  const handleClickOpenCategory = () => {
    setOpenCategory(true);
  };

  const handleClose = () => {
    setOpenCategory(false);
    setNewCategory();
    setCategoryImg();
  };
  const handleClickOpenProduct = () => {
    setOpenProduct(true);
  };

  const handleCloseProduct = () => {
    setOpenProduct(false);
    setNewProduct();
    setProductImg();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmitCategory = () => {
    console.log(
      '🚀 ~ file: ShopContainer.jsx ~ line 19 ~ ShopContainer ~ newCategory',
      { category: newCategory, images: categoryImg.file },
    );
    if (newCategory?._id) {
      updateCategory({ category: newCategory, images: categoryImg.file });
    } else {
      addCategory({ category: newCategory, images: categoryImg.file });
    }
  };
  const handleSubmitProduct = () => {
    console.log(
      '🚀 ~ file: ShopContainer.jsx ~ line 121 ~ handleSubmitProduct ~ newProduct',
      newProduct,
    );
    if (newProduct?._id) {
      updateProduct({ product: newProduct, images: productImg });
    } else {
      addProduct({ product: newProduct });
    }
  };

  return (
    <Box className={'mx-auto flex mt-8'} sx={{ maxWidth: '95%' }}>
      <CreateCategory
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        categoryImg={categoryImg}
        setCategoryImg={setCategoryImg}
        openCategory={openCategory}
        handleClose={handleClose}
        descriptionElementRef={descriptionElementRef}
        handleSubmitCategory={handleSubmitCategory}
        getProduct={getProduct}
        listProduct={listProduct}
        selectedCategory={selectedCategory}
      />
      <CreateProduct
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        productImg={productImg}
        setProductImg={setProductImg}
        openProduct={openProduct}
        handleClose={handleCloseProduct}
        descriptionElementRef={descriptionElementRef}
        handleSubmitProduct={handleSubmitProduct}
        getCategory={getCategory}
        listCategory={listCategory}
        selectedProduct={selectedProduct}
      />
      <Box
        sx={{
          bgcolor: 'background.paper',
          display: 'flex',
          marginTop: '8%',
        }}
      >
        <CategorySidebar
          value={value}
          setValue={setValue}
          handleChange={handleChange}
          listCategory={listCategory}
        />
      </Box>

      <Box
        sx={{
          width: '100%',
          marginLeft: '3.8%',
        }}
      >
        <Tool
          handleClickOpenCreate={
            value === 0 ? handleClickOpenCategory : handleClickOpenProduct
          }
        />
        <ListItem
          list={renderList}
          setSelected={value === 0 ? setSelectedCategory : setSelectedProduct}
          deleteItem={value === 0 ? deleteCategory : deleteProduct}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  listCategory: state.category.listCategory,
  listProduct: state.product.listProduct,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: (data) => dispatch(categoryAction.getCategory.request(data)),
  addCategory: (data) => dispatch(categoryAction.addCategory.request(data)),
  updateCategory: (data) =>
    dispatch(categoryAction.updateCategory.request(data)),
  deleteCategory: (data) =>
    dispatch(categoryAction.deleteCategory.request(data)),
  getProduct: (data) => dispatch(productAction.getProduct.request(data)),
  addProduct: (data) => dispatch(productAction.addProduct.request(data)),
  updateProduct: (data) => dispatch(productAction.updateProduct.request(data)),
  deleteProduct: (data) => dispatch(productAction.deleteProduct.request(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer);
