import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact';
import { ContactItems } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  const getFilteredContacts = () =>
    filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;

  return (
    <ContactItems>
      {getFilteredContacts().map(({ name, number, id }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactItems>
  );
};
