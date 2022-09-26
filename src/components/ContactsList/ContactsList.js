import React from "react";
import { Box } from "components/Box"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "redux/contactsSlice/slice";

  // const getVisibleNameFilter = () => {
  //   const normalFilter = filter.toLowerCase().trim();
    
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalFilter)
  //   )
  // }

const ContactsList = () => {
    const items = useSelector(state => state.items);
    const filterContact = useSelector(state => state.filter); 
    const dispatch = useDispatch();
    console.log(filterContact);
    // console.log(Object.values(filterContact.status));
    // const filterToString = Object.prototype.toString(filterContact);

    // console.log(filterToString);


    // const getVisibleNameFilter = () => {
    //     const normalFilter = filterContact.status.toLowerCase().trim();

    //     return items.filter(item => item.name.toLowerCase().includes(normalFilter))
    // }

    // const filterName = getVisibleNameFilter();
    return (
        <>
            {items.map( ({ number,name,id }) => (
                <Box
                    as="li"
                    display='inline-flex'
                    key={id}
                    marginBottom="5px"
                    padding="3px"
                >
                    <p>{`${name}: ${number}`}</p>
                    <button
                        onClick={() => 
                            dispatch(remove(id))
                        }
                    >
                        delete
                    </button>
                </Box>
            ))}
        </>
    )
}

export default ContactsList;