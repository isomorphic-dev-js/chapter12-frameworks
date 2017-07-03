
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

__webpack_require__(544);

var _postList = __webpack_require__(546);

var _postList2 = _interopRequireDefault(_postList);

var _header = __webpack_require__(545);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/header.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

var _post = __webpack_require__(547);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/post-list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/post-list.js"); } } })();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elysekolker/dev/personal/chapter-12-frameworks/nextjs/components/post.js"); } } })();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ })

},[549]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzNlMGNhNTYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/M2UwY2E1NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcz8zZTBjYTU2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC5qcz8zZTBjYTU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC4vcGFnZXMvaW5kZXguanNcblxuLy8gSW1wb3J0IFJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3QtbGlzdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcblxuLy8gRXhwb3J0IGFuIGFub255bW91cyBhcnJvdyBmdW5jdGlvblxuLy8gd2hpY2ggcmV0dXJucyB0aGUgdGVtcGxhdGVcbmNvbnN0IEluZGV4UGFnZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvc2VtYW50aWMtdWkvMi4yLjQvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAvPlxuICAgIDwvSGVhZD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBtYWluIHRleHQgY29udGFpbmVyIG9mZnNldFwiID5cbiAgICAgIDxQb3N0TGlzdCBwb3N0cz17cHJvcHMucG9zdHN9IC8+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4pXG5cblxuSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGxldCByZXMsIGpzb247XG4gIHRyeSB7XG4gICAgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzUzNS9wb3N0cycpO1xuICAgIGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImVcIiwgZSk7XG4gIH1cbiAgcmV0dXJuIHsgcG9zdHM6IGpzb24gfHwgW10gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBib3JkZXJsZXNzIG1haW4gbWVudVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0ZXh0IGNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBpdGVtXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC82NHg2NFwiIC8+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3twYWRkaW5nTGVmdDogXCIxcmVtXCJ9fT5TYW1wbGUgQmxvZzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiPlBvc3RzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQb3N0IGZyb20gJy4vcG9zdCc7XG5cbmNvbnN0IFBvc3RMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGxldCB7IHBvc3RzIH0gPSBwcm9wcztcblxuICBsZXQgYnVpbGRQb3N0cyA9IChwb3N0cykgPT4ge1xuICAgIGNvbnN0IHBvc3RzQXJyYXkgPSBbXTtcbiAgICBwb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICBwb3N0c0FycmF5LnB1c2goXG4gICAgICAgIDxQb3N0IHsuLi5wb3N0fSBsaW1pdD1cIjI1MFwiIC8+XG4gICAgICApXG4gICAgfSk7XG4gICAgcmV0dXJuIHBvc3RzQXJyYXk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGxpbmsgaXRlbXNcIj5cbiAgICAgIHsgYnVpbGRQb3N0cyhwb3N0cyl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3Bvc3QtbGlzdC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsga2V5PXtwcm9wcy5pZH0gcHJlZmV0Y2ggaHJlZj17YHBvc3Q/aWQ9JHtwcm9wcy51cmxTbHVnfWB9PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB0aW55IGltYWdlXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPHA+e3Byb3BzLmJvZHkuc2xpY2UoMCwgcHJvcHMubGltaXQgPyBwcm9wcy5saW1pdCA6IHByb3BzLmJvZHkubGVuZ3RoKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9wb3N0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQVZBO0FBQ0E7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTtBQVBBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        