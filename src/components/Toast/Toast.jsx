import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeToast, selectToast } from 'redux/toast/slice';

export const Toast = () => {
  const { open, message, condition } = useSelector(selectToast);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeToast());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
    >
      <Alert onClose={handleClose} severity={condition} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
