import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import { HomeLink } from '.';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgb(7 18 28 / 96%)',
        minHeight: '80px',
        justifyContent: 'center',
      }}
    >
      <Container fixed maxWidth="lg">
        <Toolbar>
          <HomeLink to="/" aria-label="home">
            <BookIcon fontSize="large" />
          </HomeLink>
          <Typography variant="h4" component="span" sx={{ flexGrow: 1 }}>
            Phone book
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
