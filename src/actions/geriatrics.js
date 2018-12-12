import {API_BASE} from "../config/env";
import axios from 'axios';
import {encodeValues} from '../helpers/backendHelper';

export const GeriatricsActionList = {
    FETCHED_LAST_STIMULUSES:'FETCHED_LAST_STIMULUSES'
} ;
//export const FETCHED_LAST_STIMULUSES = 'FETCHED_LAST_STIMULUSES';

export function fetchLastStimuluses(values){
    const token = encodeValues(values);
    return dispatch => {
        axios.get(`${API_BASE}/sensor/get/stimulus/last?token=${token}`)
            .then(result => result.data)
            .then(data => dispatch({
                type:GeriatricsActionList.FETCHED_LAST_STIMULUSES,
                payload:data

            }))
            .catch(err => console.log("There is an error.\n"+err));
    }
}