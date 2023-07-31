import axios from "axios";
import {Dispatch} from "redux";
import {HeroAction} from "./reducer";

const BASE_URL = "https://swapi.dev/api/people/";

export const set_hero = (id: number) => {
    return async (dispatch: Dispatch<HeroAction>) => {
        try {
            const url = BASE_URL + id;
            const response = await axios.get(url);
            const data = response.data;
            return dispatch({type: 'SET_HERO', payload: data});
        } catch (e) {
            console.log(e);
        }
    }
};
