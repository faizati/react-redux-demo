import {FETCH_USERS_REQUEST, FETCH_USERS_SUCESSS, FETCH_USERS_FAILURE} from './userTypes';
import axios from 'axios';

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCESSS,
    payload: users
})


export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error
})

export const fetchUsers = () => (
    dispatch => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users  = res.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(err => {
                dispatch(fetchUsersFailure(err.message));
            })
    }
)