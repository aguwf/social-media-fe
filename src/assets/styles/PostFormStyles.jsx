/** @format */

export const styles = (theme) => ({
  sxToolWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: '80%',
    margin: '0 auto',
  },
  sxToolWrapperModel: {
    width: '75%',
  },
  sxToolBtn: {
    width: '33%',
    backgroundColor: 'transparent ',
    padding: theme.spacing(1),
    boxShadow: 'none ',
    borderRadius: '10px ',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
      boxShadow: 'none',
      //   backgroundColor: '#dbdbdb54',
      backgroundColor: '#F2F2F2',
    },
  },
});
