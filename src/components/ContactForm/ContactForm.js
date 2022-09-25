import { Box } from "components/Box";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from "react-redux";
import { add } from "redux/contactsSlice/slice";

function ContactForm({ onSubmit }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')

    const handleChange = evnt => {
        const { name, value } = evnt.currentTarget
        if (name === 'name') {
            setName(value)
        }
        if (name === 'number') {
            setNumber(value)
        }
    };
    
    const handleSubmitForm = e => {
        e.preventDefault();
        dispatch(add({
            name: e.target.elements.name.value,
            number: e.target.elements.number.value
        }))
        // console.log(e.target.elements.name.value);
        // console.log(e.target.elements.number.value);
        // onSubmit({ name, number });
    };

    return (
            <Formik>
                <Form onSubmit={handleSubmitForm} >
                    <Box as="label" marginRight="8px" htmlFor="name">
                        Name
                        <Field
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                        />
                    </Box>
                    <Box as="label" marginRight="8px" htmlFor="numer">
                        Number
                        <Field
                            type="tel"
                            name="number"
                            value={number}
                            onChange={handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            />
                    </Box>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
            
        )
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
export default ContactForm;