import jwt from 'jsonwebtoken';
import {API_KEY} from './../config/env';
export function tokenizeValues(token) {
    if(token)
        return jwt.sign(token,API_KEY);
}
export function encodeValues(values)
{
    /*
    jwt.sign(values,API_KEY,function (err,token) {
        console.log(token);
        var token_ret = new Promise(
            function(resolve,reject){
                if (token)
                    resolve(token);
                else
                    reject(new Error('Token Encoding Error'));
            }
        );
        console.log(token_ret);
        return token_ret;

    });
    */
    return jwt.sign(values,API_KEY);
}