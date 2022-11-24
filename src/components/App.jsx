import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { Form } from './Form/Form';
import { AppWrapper } from './ContactsList/ContactsListStyled';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Notify } from 'services/Notify';
import { Loader } from './Loader/Loader';
import { StyledLoader } from 'components/Loader/StyledLoader';



export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
    </AppWrapper>
  );
}

Notify();