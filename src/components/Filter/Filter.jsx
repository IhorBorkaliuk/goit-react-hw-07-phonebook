import { LabelFilter, InputFilter, Wrapper } from './FilterStyled';
import { ContactList } from 'components/ContactsList/ContactsList';
import { selectFilter, selectContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';






export const Filter = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

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

    const handleChange = e => {
      const { value } = e.target;
      dispatch(contactsFilter(value));
    };

  return (
    <Wrapper>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={filter} onChange={handleChange} />
      </LabelFilter>
      {contacts && <ContactList contacts={filteredContacts} />}
    </Wrapper>
  );
}
