// import { useAuth } from 'hooks';
import { Box, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import { NavigateLink } from './Navigation.styled';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <Box
      component="nav"
      flexGrow="1"
      gap={1}
      display="flex"
      flexDirection="column"
    >
      <NavigateLink to="/add-contact">
        <PersonAddIcon sx={{ mr: '16px', fontSize: '32px' }} />
        <Typography variant="h6">Add contact</Typography>
      </NavigateLink>
      <NavigateLink to="/contacts">
        <PersonIcon sx={{ mr: '16px', fontSize: '32px' }} />
        <Typography variant="h6">Contacts</Typography>
      </NavigateLink>
    </Box>
  );
};
