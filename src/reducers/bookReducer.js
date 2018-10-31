import axios from 'axios';
import { handleActions } from 'redux-actions';
import {apiKey} from '../auth/apiKey';

function getAPI(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
};

const GET_BOOK = 'GET_BOOK';

export const getItems = (query) => dispatch => {
    return getAPI(query).then(res => {
        dispatch({
            type: GET_BOOK,
            payload: res.data
        })
    })
}

const initialState = {
    book: []
};

export default handleActions({
    [GET_BOOK]: (state, action) => {
        const book  = action.payload.items
        return {
            ...state,
            book
        }
    }
}, initialState)
