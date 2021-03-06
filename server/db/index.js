import { DB_TYPE } from '../../config/env';

let dbConfig = null;

/* use inline requires for conditional loading */
switch (DB_TYPE) {
    case 'POSTGRES':
        dbConfig = require('./postgres').default;
        break;
    case 'NONE':
        dbConfig = require('./none').default;
        break;
    default:
        throw new Error(`No database type '${DB_TYPE}' found`);
}

export const connect = dbConfig.connect;
export const controllers = dbConfig.controllers;
export const passport = dbConfig.passport;
export const session = dbConfig.session;

