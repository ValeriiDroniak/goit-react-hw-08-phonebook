import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input, Label } from 'components/ContactForm';
import { Box, Typography } from '@mui/material';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    const request = evt.target.value.toLowerCase().trim();
    dispatch(setFilter(request));
  };

  return (
    <Box
      width="400px"
      m="0 auto"
      sx={{
        borderBottom: '1px solid rgb(255 255 255 / 20%)',
        mb: '32px',
      }}
    >
      <Label>
        <Typography component="span" ml="12px" mb="8px">
          Find contacts by name
        </Typography>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={handleChangeFilter}
        />
      </Label>
    </Box>
  );
};
