import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { Form } from './Form/Form';
import { AppWrapper } from './ContactsList/ContactsListStyled';
import { selectContacts, selectIsLoading, selectFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Notify } from 'services/Notify';
import { Loader } from './Loader/Loader';
import { StyledLoader } from 'components/Loader/StyledLoader';
import { ContactList } from 'components/ContactsList/ContactsList';



export function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts(filter, contacts);



  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      {isLoading && (
        <StyledLoader>
          <Loader />
        </StyledLoader>
      )}
      {contacts.length > 0 && <Filter />}
      {contacts.length === 0 && !isLoading && (
        <Title>Додайте свій перший контакт до записної книжки</Title>
      )}
      {contacts && <ContactList contacts={filteredContacts} />}
    </AppWrapper>
  );
}

Notify();