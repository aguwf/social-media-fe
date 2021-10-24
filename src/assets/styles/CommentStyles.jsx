/** @format */

export const styles = (theme) => ({
  sxCommentRoot: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
  sxCommentWrapper: {
    marginLeft: theme.spacing(1),
    backgroundColor: '#333',
    borderRadius: '10px',
    width: '100%',
    padding: theme.spacing(1),
  },
  sxCommentAvatar: {
    width: 20,
    height: 20,
  },
  sxCommentName: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  sxContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
