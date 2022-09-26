import { Box } from "components/Box";
import React from "react";
import { useDispatch } from "react-redux";

import { add } from "redux/contactsSlice/slice";

function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmitForm = e => {
        e.preventDefault();
        const form = e.target;
        dispatch(add({
            name: form.elements.name.value,
            number: form.elements.number.value
        }))
        
        form.reset();
    };

    return (
                <form onSubmit={handleSubmitForm} >
                    <Box as="label" marginRight="8px" htmlFor="name">
                        Name
                        <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    </Box>
                    <Box as="label" marginRight="8px" htmlFor="numer">
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            />
                    </Box>
                    <button type="submit">Add contact</button>
                </form>
        )
}

export default ContactForm;