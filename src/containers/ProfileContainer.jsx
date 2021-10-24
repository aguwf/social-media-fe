/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */
/* eslint-disable react-hooks/exhaustive-deps*/

import React from 'react';
import { connect } from 'react-redux';
import HeaderProfile from '../components/Profile/HeaderProfile';
import * as authAction from '../actions/AuthAction';
import * as postAction from '../actions/PostAction';
import * as userAction from '../actions/UserAction';
import NavBarComponent from '../components/common/NavBarComponent';
import Information from '../components/Profile/Information';
import Photo from '../components/Profile/Photo';
import Post from '../components/common/Post';
import PostForm from '../components/common/PostForm';
import ShopContainer from './ShopContainer';

export const ProfileContainer = (props) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [selectedPost, setSelectedPost] = React.useState();
  const param = window.location.pathname.split('/');
  const id = param[2];

  // React.useEffect(() => {
  //   props.getCsrfToken();
  // }, []);

  React.useEffect(() => {
    console.log(id, props.userDetail._id);
    if (id !== props.userDetail._id) {
      props.getSingleUserRequest({ _id: id });
    }
  }, []);

  const handleSubmit = (data) => {};

  const handleCancel = (data) => {};

  let _renderTab;

  switch (openTab) {
    case 1:
      _renderTab = (
        <div
          className={
            'mx-auto max-w-3/5 xl:max-w-3/4 2xl:max-w-3/5 2xl:flex xl:flex'
          }
        >
          <div className={'w-1/3'}>
            <Information userDetail={props?.userDetail} />
            <Photo />
          </div>
          <div className={'w-2/3 ml-8'}>
            <PostForm
              avatar={props?.userDetail?.avatar}
              fullname={props?.userDetail?.fullname}
              selectedPost={selectedPost}
              setSelectedPost={setSelectedPost}
              addPost={props.addPost}
            />
            {props?.userDetail?.posts &&
              props?.userDetail?.posts.map((post, index) => {
                return (
                  <Post
                    key={index}
                    userDetail={props?.userDetail}
                    post={post}
                    setSelectedPost={setSelectedPost}
                    likePost={props.likePost}
                    commentPost={props.commentPost}
                    deletePost={props.deletePost}
                  />
                );
              })}
          </div>
        </div>
      );
      break;
    case 2:
      _renderTab = <div>About</div>;
      break;
    case 3:
      _renderTab = <div>Friend</div>;
      break;
    case 4:
      _renderTab = <div>Photo</div>;
      break;
    case 5:
      _renderTab = (
        <div>
          <ShopContainer />
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <div>
      <NavBarComponent
        logoutRequest={() => props.logoutRequest()}
        listUser={props.listUser}
        getSingleUserRequest={(data) => props.getSingleUserRequest(data)}
        searchRequest={(data) => props.searchRequest(data)}
        id={props.userDetail?._id}
        userDetail={props.userDetail}
      />
      <HeaderProfile
        userDetail={props.userDetail}
        openTab={openTab}
        setOpenTab={(data) => setOpenTab(data)}
        updateProfile={(data) => props.updateProfile(data)}
        uploadImage={(data) => props.uploadImage(data)}
      />
      {_renderTab}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetail: state.user.userDetail,
  listUser: state.user.listUser,
});

const mapDispatchToProps = (dispatch) => ({
  getCsrfToken: () => dispatch(authAction.getCsrfToken()),
  getSingleUserRequest: (data) =>
    dispatch(userAction.getSingleUser.request(data)),
  logoutRequest: () => dispatch(authAction.logoutRequest()),
  searchRequest: (data) => dispatch(userAction.searchRequest(data)),
  updateProfile: (data) => dispatch(userAction.updateProfile.request(data)),
  uploadImage: (data) => dispatch(userAction.uploadImage.request(data)),
  likePost: (data) => dispatch(postAction.likePost.request(data)),
  addPost: (data) => dispatch(postAction.addPost.request(data)),
  deletePost: (data) => dispatch(postAction.deletePost.request(data)),
  commentPost: (data) => dispatch(postAction.commentPost.request(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
