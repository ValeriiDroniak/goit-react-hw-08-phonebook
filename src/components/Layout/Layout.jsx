import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Header } from 'components/Header';
import { AppBar, Box, Container, Typography } from '@mui/material';

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: '1',
          backgroundColor: 'rgb(7 18 28 / 89%)',
        }}
      >
        <Box component="section" sx={{ padding: '64px 0' }}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
        <Toaster position="top-right" reverseOrder={false} />
      </Box>
      <AppBar
        component="footer"
        position="static"
        sx={{
          backgroundColor: 'rgb(7 18 28 / 96%)',
          minHeight: '64px',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg" fixed>
          <Typography variant="h6" component="p">
            Copyright &copy; 2023 Valerii Droniak
          </Typography>
        </Container>
      </AppBar>
    </Box>
  );
};
