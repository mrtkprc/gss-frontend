import {FETCHED_LAST_STIMULUSES} from '../actions/geriatrics';

const initialState = {

};

export default (state = initialState,action) => {
    switch (action.type) {
        case FETCHED_LAST_STIMULUSES:
            return {
                ...state,
                stimuluses:action.payload
            }
        default:
            return state;

    }
}