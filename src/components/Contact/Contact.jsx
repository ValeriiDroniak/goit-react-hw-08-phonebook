import { IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactItem } from './Contact.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Typography variant="h5">{name}:</Typography>
      <Typography variant="h5">{number}</Typography>
      <IconButton
        name={id}
        type="Button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteForeverIcon sx={{ fontSize: '48px', fill: '#ffffff' }} />
      </IconButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
