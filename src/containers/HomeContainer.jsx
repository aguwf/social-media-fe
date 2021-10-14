/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */
/* eslint-disable react-hooks/exhaustive-deps*/

import React from 'react';
import { connect } from 'react-redux';
import NavBarComponent from '../components/common/NavBarComponent';
import Toast from '../components/common/Toast';
import * as authAction from '../actions/AuthAction';
import * as postAction from '../actions/PostAction';
import * as userAction from '../actions/UserAction';
import Post from '../components/common/Post';
import PostForm from '../components/common/PostForm';

export const HomeContainer = (props) => {
  const [ShowToast, setShowToast] = React.useState(false);
  const [selectedPost, setSelectedPost] = React.useState();

  React.useEffect(() => {
    if (!ShowToast && (props.errMsg || props.ssMsg)) {
      setShowToast(true);
      setTimeout(() => {
        props.clearMsg();
      }, 6 * 1000);
    }
  }, [props]);

  // React.useEffect(() => {
  //   props.getCsrfToken();
  // }, []);

  React.useEffect(() => {
    props.getAllPost({ activePage: 1 });
  }, []);

  console.log(props);
  return (
    <div>
      {ShowToast ? (
        <Toast
          setShowToast={(data) => setShowToast(data)}
          msg={props.error ? props.errMsg : props.ssMsg}
          error={props.error}
        />
      ) : null}
      <NavBarComponent
        logoutRequest={() => props.logoutRequest()}
        listUser={props.listUser}
        getSingleUserRequest={(data) => props.getSingleUserRequest(data)}
        searchRequest={(data) => props.searchRequest(data)}
        id={props?.userDetail?._id}
        userDetail={props?.userDetail}
      />
      <div
        className={
          'mx-auto flex-col justify-center max-w-1/2 xl:max-w-1/2 2xl:max-w-2/5 '
        }
      >
        <PostForm
          avatar={props?.userDetail?.avatar}
          fullname={props?.userDetail?.fullname}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
          addPost={props.addPost}
        />
        {props?.listPost &&
          props?.listPost.map((post, index) => {
            return (
              <Post
                key={index}
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
};

const mapStateToProps = (state) => ({
  listPost: state.post.listPost,
  userDetail: state.user.userDetail,
  listUser: state.user.listUser,
  error: state.auth.error,
  errMsg: state.auth.errMsg,
  ssMsg: state.auth.ssMsg,
});

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: () => dispatch(authAction.logoutRequest()),
  clearMsg: () => dispatch(authAction.clearMsg()),
  searchRequest: (data) => dispatch(userAction.searchRequest(data)),
  getSingleUserRequest: (data) =>
    dispatch(userAction.getSingleUser.request(data)),
  getCsrfToken: () => dispatch(authAction.getCsrfToken()),
  getAllPost: (data) => dispatch(postAction.getAllPost.request(data)),
  likePost: (data) => dispatch(postAction.likePost.request(data)),
  addPost: (data) => dispatch(postAction.addPost.request(data)),
  deletePost: (data) => dispatch(postAction.deletePost.request(data)),
  commentPost: (data) => dispatch(postAction.commentPost.request(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
