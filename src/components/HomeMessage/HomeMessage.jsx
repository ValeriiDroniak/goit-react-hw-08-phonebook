import { Typography } from '@mui/material';
import { LinkItem } from '.';

export const HomeMessage = () => {
  return (
    <>
      <Typography component="h1" variant="h1">
        Service main page
      </Typography>
      <Typography component="p" variant="h4">
        To use our service, please
        <LinkItem to="/register"> Register</LinkItem> or
        <LinkItem to="/login"> Log in</LinkItem>
      </Typography>
    </>
  );
};
