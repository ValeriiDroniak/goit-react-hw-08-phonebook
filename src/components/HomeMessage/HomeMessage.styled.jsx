import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';

export const LinkItem = styled(Link)`
  color: rgba(255, 255, 255, 0.5);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.1);
  }
`;
