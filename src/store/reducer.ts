import {AnyAction} from "@reduxjs/toolkit";

const initialState = Array()

export interface HeroAction extends AnyAction {
    type: string,
    payload: object
}

export const heroReducer = (state: any = initialState, action: HeroAction) => {
    switch (action.type) {
        case "SET_HERO":
            console.log(action.payload)
            return Object.entries(action.payload)
        default:
            return state;
    }
};
