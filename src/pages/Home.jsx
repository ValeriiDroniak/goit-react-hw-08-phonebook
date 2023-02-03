import { Box, Container } from '@mui/material';
import { HomeMessage } from 'components/HomeMessage';

export default function Home() {
  return (
    <Box as="section">
      <Container
        maxWidth="lg"
        fixed
        sx={{ textAlign: 'center', color: '#ffffff' }}
      >
        <HomeMessage />
      </Container>
    </Box>
  );
}
