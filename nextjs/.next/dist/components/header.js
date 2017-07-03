'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/header.js';


var Header = function Header() {
  return _react2.default.createElement('div', { className: 'ui borderless main menu', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'ui text container', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: 'header item', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('img', { className: 'logo', src: 'http://placehold.it/64x64', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('span', { style: { paddingLeft: "1rem" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Sample Blog')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Posts'))));
};

exports.default = Header;