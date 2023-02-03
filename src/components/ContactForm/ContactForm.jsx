import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Error, FieldInput, MyForm, Label } from './ContactForm.styled';
import { Button, Typography } from '@mui/material';

const nameRedex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRedex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRedex).required('Contact name is required'),
  number: yup
    .string()
    .matches(numberRedex, 'Invalid phone.')
    .min(9, 'At least 9 digits is required')
    .max(11, 'At most 11 digits is required')
    .required('Phone number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const findContactByName = name =>
    contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase().trim()
    );

  const createContact = ({ name, number }) => ({
    name: name.trim(),
    number: number.trim(),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (findContactByName(values.name)) {
      return alert(`${values.name} is already in contacts`);
    }

    dispatch(addContact(createContact(values)));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MyForm>
        <Label htmlFor="name">
          <Typography component="span" ml="12px" mb="8px">
            Name
          </Typography>
          <FieldInput type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            render={message => <Error>{message}</Error>}
          />
        </Label>
        <Label htmlFor="number">
          <Typography component="span" ml="12px" mb="8px">
            Number
          </Typography>
          <FieldInput type="tel" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            render={message => <Error>{message}</Error>}
          />
        </Label>

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: '100%',
            borderRadius: '20px',
            mt: '12px',
            fontWeight: 700,
            fontSize: '18px',
          }}
        >
          Add contact
        </Button>
      </MyForm>
    </Formik>
  );
};
