import { combineReducers } from 'redux'
import geriatrics from './geriatrics'
import users from './users';

export default combineReducers({
    geriatrics,
    users
});
