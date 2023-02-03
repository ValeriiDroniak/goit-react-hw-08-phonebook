import { Box, Typography } from '@mui/material';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box display="flex" gap={3}>
      <Link to="/register" variant="contained">
        <Typography>Register</Typography>
      </Link>
      <Link to="/login" variant="outlined">
        <Typography>Log In</Typography>
      </Link>
    </Box>
  );
};
