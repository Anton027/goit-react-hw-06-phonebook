import React from "react";
import { Box } from "components/Box"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "redux/contactsSlice/slice";
import { getFilter, getItems } from "redux/selector";

const ContactsList = () => {
    const items = useSelector(getItems);
    const filterContact = useSelector(getFilter).status; 
    const dispatch = useDispatch();

    const getVisibleNameFilter = () => {
        const normalFilter = filterContact.toLowerCase().trim();
        
        if (items) {
            return items.filter(item => item.name.toLowerCase().includes(normalFilter))
        }
    }

    const filterName = getVisibleNameFilter();
    return (
        <>
            {filterName && filterName.map( ({ number,name,id }) => (
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