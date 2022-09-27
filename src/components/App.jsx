import { GlobalStyle } from './GlobalStyle';

import { Box } from "components/Box";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";

export function App() {
    return (
      <Box
        margin="0 auto"
        padding="0 40px"
      >
        <Box as="h1" marginBottom="15px">
          Phonebook
        </Box>
        <ContactForm/>
        
        <Box padding="20px 0">
          <Box as="h2" marginBottom="15px" >Contacts</Box>
          <Filter/>
          <Box as="ul"
            display="flex"
            flexDirection="column"
            padding="10px 0"
          >
            <ContactsList/>
          </Box>
        </Box>
        <GlobalStyle />
      </Box>
    );
}