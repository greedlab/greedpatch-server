/**
 * Created by Bell on 16/8/24.
 */

const Router = require('koa-router');

import { ensureUser } from '../tools/auth';
import * as controller from '../controllers/token';

let base_url = '/tokens';
let router = new Router({ prefix: base_url });

router
    .get('/', ensureUser, controller.list)
    .post('/', ensureUser, controller.generate)
    .post('/:id', ensureUser, controller.detail)
    .delete('/:id', ensureUser, controller.del);

export default {
    base_url,
    router: router
};
