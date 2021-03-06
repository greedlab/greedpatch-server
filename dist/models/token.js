'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = require('bluebird');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise; /**
                                              * Created by Bell on 16/8/24.
                                              */

var Token = new _mongoose2.default.Schema({
    name: { type: String },
    userid: { type: String, required: true },
    token: { type: String, required: true },
    timestamp: { type: Number, default: 0 },
    type: { type: Number, default: 0 }
});

Token.pre('save', function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(next) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        user = this;

                        if (user.timestamp <= 0) {
                            user.timestamp = Date.now();
                        }
                        return _context.abrupt('return', next());

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function preSave(_x) {
        return _ref.apply(this, arguments);
    }

    return preSave;
}());

exports.default = _mongoose2.default.model('token', Token);
//# sourceMappingURL=token.js.map
