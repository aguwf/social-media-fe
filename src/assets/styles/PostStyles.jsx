/** @format */

export const styles = (theme) => ({
  sxCommentText: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  sxCommentField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '30px',
      },
    },
  },
  sxCommentAvatar: {
    width: 30,
    height: 30,
  },
});
