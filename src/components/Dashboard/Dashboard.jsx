import { Toolbar } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';

export const Dashboard = () => {
  return (
    <Toolbar
      sx={{
        alignItems: 'start',
        width: 'max-content',
        gap: '16px',
        borderRight: '1px solid rgb(255 255 255 / 20%)',
      }}
    >
      <Navigation />
    </Toolbar>
  );
};
