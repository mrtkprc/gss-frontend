import { combineReducers } from 'redux'
import geriatrics from './geriatrics'
import users from './users';
import surveils from './surveils';

export default combineReducers({
    geriatrics,
    users,
    surveils
});
