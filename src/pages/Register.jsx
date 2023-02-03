import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';

export default function Register() {
  return (
    <Container
      maxWidth="lg"
      fixed
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <RegisterForm />
    </Container>
  );
}
