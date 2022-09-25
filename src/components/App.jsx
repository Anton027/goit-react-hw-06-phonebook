// import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid'
import { Box } from "components/Box";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { Layout } from './Layout/Layout';


export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [])
  const [filter, setFilter] = useState('')

  const   handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  
  const contactsFormSubmitHandler = data => {
    
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const isInName = newContact.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === isInName)
      ? alert(data.name + ' is already in contacts')
      : setContacts([newContact, ...contacts]);
  };

  const getVisibleNameFilter = () => {
    const normalFilter = filter.toLowerCase().trim();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    )
  }

  const deleteContact = id => {
    setContacts(contacts.filter(contact=>contact.id !== id))
  };

  const filterName = getVisibleNameFilter();
    return (
      <Box
        margin="0 auto"
        padding="0 40px"
      >
        <Box as="h1" marginBottom="15px">Phonebook</Box>
        <ContactForm onSubmit={contactsFormSubmitHandler} />
        
        <Box padding="20px 0">
          <Box as="h2" marginBottom="15px" >Contacts</Box>
          <Filter value={filter} onChange={handleChangeFilter} />
          <Box as="ul" display="flex" flexDirection="column"
            padding="10px 0"
          >
            <ContactsList contacts={filterName} onDelContact={deleteContact} />
          </Box>
          <Layout/>
        </Box>
        <GlobalStyle />
      </Box>
    );
}