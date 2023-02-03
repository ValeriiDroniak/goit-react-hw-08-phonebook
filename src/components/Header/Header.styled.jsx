import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const HomeLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
