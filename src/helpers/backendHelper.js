import jwt from 'jsonwebtoken';
import {API_KEY} from './../config/env';
export function tokenizeValues(token) {
    if(token)
        return jwt.sign(token,API_KEY);

}