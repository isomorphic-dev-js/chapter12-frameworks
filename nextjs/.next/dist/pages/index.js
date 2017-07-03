'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

require('isomorphic-fetch');

var _postList = require('../components/post-list');

var _postList2 = _interopRequireDefault(_postList);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/pages/index.js?entry',
    _this = undefined;

// ./pages/index.js

// Import React


// Export an anonymous arrow function
// which returns the template
var IndexPage = function IndexPage(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('div', { className: 'ui main text container offset', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_postList2.default, { posts: props.posts, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
};

IndexPage.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
    var req = _ref.req;
    var res, json;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = void 0, json = void 0;
            _context.prev = 1;
            _context.next = 4;
            return fetch('http://localhost:3535/posts');

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            json = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](1);

            console.log("e", _context.t0);

          case 13:
            return _context.abrupt('return', { posts: json || [] });

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 10]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = IndexPage;