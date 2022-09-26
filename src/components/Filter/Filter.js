import React from "react";
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "redux/filterSlice/filterSlice";

const Filter = () => {

    const dispatch = useDispatch();

    const handleChangeFilter = e => {
        dispatch(setStatusFilter({
            status: e.currentTarget.value
        }));
    };

    return (
        <>
            <p>Find Contacts by name</p>
            <input
                type="text"
                name="filter"
                onChange={handleChangeFilter}
            />
        </>
    )
};

export default Filter;