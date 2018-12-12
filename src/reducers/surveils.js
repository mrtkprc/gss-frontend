import {SurveilsActionList} from '../actions/surveils';

const initialState = {

};

export default (state = initialState,action) => {
    switch (action.type) {

        case SurveilsActionList.FETCHED_GET_SENSOR_LOCATIONS:
            return {
                ...state,
                sensor_locations:action.payload
            }

        default:
            return state;

    }
}