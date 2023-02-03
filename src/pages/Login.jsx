import { Container } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container
      maxWidth="lg"
      fixed
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <LoginForm />
    </Container>
  );
}
