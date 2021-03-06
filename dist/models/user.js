'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = require('bluebird');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _encrypt = require('../utils/encrypt');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Bell on 16/8/10.
 */

_mongoose2.default.Promise = global.Promise;

var User = new _mongoose2.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0 },
    status: { type: Number, default: 0 }
});

User.pre('save', function () {
    var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(next) {
        var user, hash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        user = this;

                        if (user.isModified('password')) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt('return', next());

                    case 3:
                        _context.prev = 3;
                        _context.next = 6;
                        return (0, _encrypt.hashString)(user.password);

                    case 6:
                        hash = _context.sent;

                        user.password = hash;
                        return _context.abrupt('return', next());

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](3);
                        return _context.abrupt('return', next(_context.t0));

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 11]]);
    }));

    function preSave(_x) {
        return _ref.apply(this, arguments);
    }

    return preSave;
}());

User.methods.validatePassword = function () {
    var _ref2 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee2(password) {
        var user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        user = this;
                        _context2.next = 3;
                        return (0, _encrypt.compareHashString)(password, user.password);

                    case 3:
                        return _context2.abrupt('return', _context2.sent);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    function validatePassword(_x2) {
        return _ref2.apply(this, arguments);
    }

    return validatePassword;
}();

User.methods.updatePassword = function () {
    var _ref3 = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee3(password) {
        var user, hashedNewPassword;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        user = this;
                        _context3.next = 3;
                        return (0, _encrypt.hashString)(password);

                    case 3:
                        hashedNewPassword = _context3.sent;
                        _context3.next = 6;
                        return user.update({ $set: { password: hashedNewPassword } });

                    case 6:
                        return _context3.abrupt('return', _context3.sent);

                    case 7:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    function updatePassword(_x3) {
        return _ref3.apply(this, arguments);
    }

    return updatePassword;
}();

exports.default = _mongoose2.default.model('user', User);
//# sourceMappingURL=user.js.map
