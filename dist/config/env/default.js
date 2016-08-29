'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Bell on 16/8/10.
 */

exports.default = {
    token: 'secret-greedpatch-back-token',
    mongodb: 'mongodb://dev:dev@localhost:27017/greedpatch-back',
    redisOptions: {},
    frontAddress: 'http://localhost:4001/',
    mailConfig: {
        host: 'smtp.greedlab.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'test@greedlab.com',
            pass: 'password'
        }
    },
    mailFrom: 'test@greedlab.com'
};
//# sourceMappingURL=default.js.map
