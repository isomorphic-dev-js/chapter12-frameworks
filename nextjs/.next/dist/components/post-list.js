'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/post-list.js';


var PostList = function PostList(props) {
  var posts = props.posts;

  var buildPosts = function buildPosts(posts) {
    var postsArray = [];
    posts.forEach(function (post) {
      postsArray.push(_react2.default.createElement(_post2.default, (0, _extends3.default)({}, post, { limit: '250', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })));
    });
    return postsArray;
  };
  return _react2.default.createElement('div', { className: 'ui link items', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, buildPosts(posts));
};

exports.default = PostList;