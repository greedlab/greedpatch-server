/**
 * Created by Bell on 16/8/29.
 */

export default {
    token: 'secret-greedpatch-back-token',
    mongodb: 'mongodb://dev:dev@localhost:27017/greedpatch-back',
    redisOptions: {

    },
    back_address: 'http://localhost:4002/',
    front_address: 'http://localhost:4001/',

    mail_config: {
        host: 'md-hk-1.webhostbox.net',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'greedpatch@greedlab.com',
            pass: 'Envy_Mail_00'
        }
    },
    mail_from: 'greedpatch@greedlab.com'
};