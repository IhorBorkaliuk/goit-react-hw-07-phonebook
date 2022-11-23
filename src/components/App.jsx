import { Filter } from './Filter/Filter';
import { Title } from './ContactsList/ContactsListStyled';
import { Form } from './Form/Form';
import { AppWrapper } from './ContactsList/ContactsListStyled';
import { selectContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Notify } from 'services/Notify';



export function App() {
  const contacts = useSelector(selectContacts);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);


  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <>
          <Filter />
          
        </>
      ) : (
        <Title>Додайте свій перший контакт до записної книжки</Title>
      )}
    </AppWrapper>
  );
}

  Notify();