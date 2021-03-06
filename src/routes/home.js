/**
 * Created by Bell on 16/6/16.
 */

const Router = require('koa-router');

import * as home from '../controllers/home';
import * as user from '../controllers/user';
import * as auth from '../tools/auth';

let base_url = '/';
let router = new Router();

router
    .get('/', home.index)
    .post('/register', user.register)
    .post('/login', user.login)
    .post('/logout', auth.ensureUser, user.logout)
    .post('/reset-password', user.resetPassword)
    .post('/set-password', user.setPassword);

export default {
    base_url,
    router: router
};
