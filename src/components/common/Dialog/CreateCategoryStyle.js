/** @format */

export const styles = (theme) => ({
  sxDialogTitle: {
    margin: 'auto',
  },
  sxCateName: { marginBottom: '3%', width: '100%' },
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
});
