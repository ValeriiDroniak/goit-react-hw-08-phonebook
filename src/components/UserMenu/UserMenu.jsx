import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <Typography fontWeight="500">
        Welcome,
        <Typography
          fontWeight="900"
          component="span"
          color="rgba(255, 255, 255, 0.5)"
        >
          {' '}
          {user.name}
        </Typography>
      </Typography>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
