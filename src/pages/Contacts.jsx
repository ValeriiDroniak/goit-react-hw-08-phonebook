import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { ContactList } from 'components/ContactList';
import { Dashboard } from 'components/Dashboard';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }} fixed>
      <Dashboard />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Filter />
        <ContactList />
      </Box>
    </Container>
  );
}
