import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {set_hero} from "../store/action";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {HeroAction} from "../store/reducer";
import {people, selectStyleClasses} from "../consts/select.consts";

type DispatchType = ThunkDispatch<any, any, HeroAction>

const Select = () => {
    const dispatch: DispatchType = useDispatch();

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.value;
        const index = parseInt(selectedIndex, 10);
        await dispatch(set_hero(index + 1));
    };

    return (
        <select
            id="people"
            onChange={handleChange}
            className={selectStyleClasses}
        >
            <option selected>Choose a hero</option>
            {people.map((hero, index) => (
                <option key={index} value={index}>{hero}</option>
            ))}
        </select>
    )
};

export default Select;
