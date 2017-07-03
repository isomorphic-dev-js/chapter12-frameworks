'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/post.js';


var Post = function Post(props) {
  return _react2.default.createElement(_link2.default, { key: props.id, prefetch: true, href: 'post?id=' + props.urlSlug, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('div', { className: 'ui tiny image', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('img', { src: props.image, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('div', { className: 'content', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('div', { className: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.title), _react2.default.createElement('div', { className: 'description', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.body.slice(0, props.limit ? props.limit : props.body.length))))));
};

exports.default = Post;