/** @format */

export const styles = (theme) => ({
  sxDialogTitle: {
    margin: 'auto',
  },
  sxCateName: { marginBottom: '3%', width: '100%' },
  sxRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  sxWidth40: {
    width: '39%',
  },
  sxWidth60: {
    width: '59%',
  },
  sxUploadTool: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3%',
  },
  uploadBtn: {
    padding: '2%',
    backgroundColor: '#f48b29',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 100ms',
    '&:hover': {
      backgroundColor: '#f49f00',
    },
  },
  sxDialogFooter: {
    '&.MuiDialogActions-root': {
      justifyContent: 'space-evenly',
    },
  },
  sxFooterBtn: {
    width: '49%',
  },
  sxRedText: {
    color: '#FF5C58',
  },
  sxHorizontalListContainer: {
    width: '100%',
    borderRadius: '4px',
    padding: '8px',
    paddingRight: 0,
    overflowX: 'scroll',
    display: 'flex',
  },
  sxWrapItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: window.screen.width * (150 / 1920),
    height: window.screen.height * (150 / 1080),
    '&:not(:last-child)': {
      marginRight: '2%',
    },
  },
  sxRelativeParent: {
    position: 'relative',
  },
  rectangleImg: {
    width: '100%',
    borderRadius: '8px',
  },
  sxDeleteBtn: {
    position: 'absolute',
    top: '1%',
    right: '1%',
  },
});
