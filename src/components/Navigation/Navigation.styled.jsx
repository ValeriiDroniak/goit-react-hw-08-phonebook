import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 16px 64px 16px 16px;
  color: rgb(255, 255, 255, 0.7);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:focus,
  &.active {
    color: #ffffff;
    background-color: rgb(7 18 28 / 96%);
    border-radius: 4px;
  }
`;
