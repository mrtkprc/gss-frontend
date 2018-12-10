import {GeriatricsActionList} from '../actions/geriatrics';

const initialState = {

};

export default (state = initialState,action) => {
    switch (action.type) {
        case GeriatricsActionList.FETCHED_LAST_STIMULUSES:
            return {
                ...state,
                last_stimulus:action.payload
            }
        default:
            return state;

    }
}