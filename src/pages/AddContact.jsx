import { Container } from '@mui/material';
import { ContactForm } from 'components/ContactForm';
import { Dashboard } from 'components/Dashboard';

export default function AddContact() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }} fixed>
      <Dashboard />
      <ContactForm />
    </Container>
  );
}
