/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Webpack Requirements


	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(2);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(4);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(5);

	var _path2 = _interopRequireDefault(_path);

	var _IntlWrapper = __webpack_require__(6);

	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

	var _webpack = __webpack_require__(10);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(11);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(15);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(16);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(17);

	var _reactRedux = __webpack_require__(9);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(48);

	var _reactRouter = __webpack_require__(49);

	var _reactHelmet = __webpack_require__(50);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(51);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(67);

	var _lane = __webpack_require__(69);

	var _lane2 = _interopRequireDefault(_lane);

	var _note = __webpack_require__(74);

	var _note2 = _interopRequireDefault(_note);

	var _dummyData = __webpack_require__(76);

	var _dummyData2 = _interopRequireDefault(_dummyData);

	var _config = __webpack_require__(31);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }

	  // feed some dummy data in DB.
	  (0, _dummyData2.default)();
	});

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
	app.use('/api', _lane2.default, _note2.default);

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("compression");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactIntl = __webpack_require__(8);

	var _reactRedux = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("react-intl");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("webpack");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(10);
	var cssnext = __webpack_require__(12);
	var postcssFocus = __webpack_require__(13);
	var postcssReporter = __webpack_require__(14);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = require("postcss-focus");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(18);

	var _reduxThunk = __webpack_require__(19);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _reducers = __webpack_require__(24);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    // enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
	  }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reduxDevtools = __webpack_require__(21);

	var _reduxDevtoolsLogMonitor = __webpack_require__(22);

	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

	var _reduxDevtoolsDockMonitor = __webpack_require__(23);

	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
	  toggleVisibilityKey: 'ctrl-h',
	  changePositionKey: 'ctrl-w'
	}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("redux-devtools");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(18);

	var _AppReducer = __webpack_require__(25);

	var _AppReducer2 = _interopRequireDefault(_AppReducer);

	var _LaneReducer = __webpack_require__(27);

	var _LaneReducer2 = _interopRequireDefault(_LaneReducer);

	var _NoteReducer = __webpack_require__(36);

	var _NoteReducer2 = _interopRequireDefault(_NoteReducer);

	var _IntlReducer = __webpack_require__(37);

	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Combine all reducers into one root reducer


	// Import Reducers
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  lanes: _LaneReducer2.default,
	  notes: _NoteReducer2.default,
	  intl: _IntlReducer2.default
	}); /**
	     * Root Reducer
	     */

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;

	var _AppActions = __webpack_require__(26);

	// Initial State
	var initialState = {
	  showAddPost: false
	}; // Import Actions


	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };

	    default:
	      return state;
	  }
	};

	/* Selectors */

	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};

	// Export Reducer
	exports.default = AppReducer;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';

	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = lanes;

	var _LaneActions = __webpack_require__(28);

	var _NoteActions = __webpack_require__(34);

	var _omit = __webpack_require__(35);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function moveNotes(array, sourceNoteId, targetNoteId) {
	  var sourceIndex = array.indexOf(sourceNoteId);
	  var targetIndex = array.indexOf(targetNoteId);
	  var arrayCopy = [].concat(_toConsumableArray(array));

	  arrayCopy.splice(targetIndex, 0, arrayCopy.splice(sourceIndex, 1)[0]);
	  return arrayCopy;
	}

	var initialState = {};

	function lanes() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _LaneActions.CREATE_LANE:
	    case _LaneActions.UPDATE_LANE:
	      return _extends({}, state, _defineProperty({}, action.lane.id, action.lane));
	    case _LaneActions.EDIT_LANE:
	      {
	        var lane = _extends({}, state[action.lane], { editing: true });
	        return _extends({}, state, _defineProperty({}, action.lane, lane));
	      }
	    case _LaneActions.CREATE_LANES:
	      return _extends({}, action.lanes);
	    case _NoteActions.DELETE_NOTE:
	      {
	        var newLane = _extends({}, state[action.laneId]);
	        newLane.notes = newLane.notes.filter(function (noteId) {
	          return noteId !== action.noteId;
	        });
	        return _extends({}, state, _defineProperty({}, action.laneId, newLane));
	      }
	    case _NoteActions.CREATE_NOTE:
	      {
	        var _newLane = _extends({}, state[action.laneId]);
	        _newLane.notes = _newLane.notes.concat(action.note.id);
	        return _extends({}, state, _defineProperty({}, action.laneId, _newLane));
	      }

	    case _NoteActions.MOVE_WITHIN_LANE:
	      {
	        var _newLane2 = _extends({}, state[action.laneId]);
	        _newLane2.notes = moveNotes(_newLane2.notes, action.sourceId, action.targetId);
	        return _extends({}, state, _defineProperty({}, action.laneId, _newLane2));
	      }
	    case _LaneActions.DELETE_LANE:
	      {
	        return (0, _omit2.default)(state, action.laneId);
	      }
	    case _LaneActions.MOVE_BETWEEN_LANES:
	      {
	        var _extends7;

	        var targetLane = _extends({}, state[action.targetLaneId]);;
	        targetLane.notes = [].concat(_toConsumableArray(targetLane.notes), [action.sourceNoteId]);
	        var sourceLane = _extends({}, state[action.sourceLaneId]);
	        sourceLane.notes = sourceLane.notes.filter(function (noteId) {
	          return noteId !== action.sourceNoteId;
	        });
	        return _extends({}, state, (_extends7 = {}, _defineProperty(_extends7, action.targetLaneId, targetLane), _defineProperty(_extends7, action.sourceLaneId, sourceLane), _extends7));
	      }
	    default:
	      return state;
	  }
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MOVE_BETWEEN_LANES = exports.CREATE_LANES = exports.DELETE_LANE = exports.EDIT_LANE = exports.UPDATE_LANE = exports.CREATE_LANE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.moveBetweenLanes = moveBetweenLanes;
	exports.moveBetweenLanesRequest = moveBetweenLanesRequest;
	exports.createLane = createLane;
	exports.createLaneRequest = createLaneRequest;
	exports.createLanes = createLanes;
	exports.updateLane = updateLane;
	exports.editLane = editLane;
	exports.updateLaneRequest = updateLaneRequest;
	exports.deleteLane = deleteLane;
	exports.deleteLaneRequest = deleteLaneRequest;
	exports.fetchLanes = fetchLanes;

	var _apiCaller = __webpack_require__(29);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	var _schema = __webpack_require__(32);

	var _normalizr = __webpack_require__(33);

	var _NoteActions = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CREATE_LANE = exports.CREATE_LANE = 'CREATE_LANE';
	var UPDATE_LANE = exports.UPDATE_LANE = 'UPDATE_LANE';
	var EDIT_LANE = exports.EDIT_LANE = 'EDIT_LANE';
	var DELETE_LANE = exports.DELETE_LANE = 'DELETE_LANE';
	var CREATE_LANES = exports.CREATE_LANES = 'CREATE_LANES';
	var MOVE_BETWEEN_LANES = exports.MOVE_BETWEEN_LANES = "MOVE_BETWEEN_LANES";

	function moveBetweenLanes(targetLaneId, sourceNoteId, sourceLaneId) {
	  return {
	    type: MOVE_BETWEEN_LANES,
	    targetLaneId: targetLaneId,
	    sourceNoteId: sourceNoteId,
	    sourceLaneId: sourceLaneId
	  };
	}

	function moveBetweenLanesRequest(targetLaneId, sourceNoteId, sourceLaneId) {
	  return function (dispatch) {
	    var path = 'lanes/' + sourceLaneId + '/notes/' + sourceNoteId;
	    return (0, _apiCaller2.default)(path, 'delete').then(function (deleted) {
	      return (0, _apiCaller2.default)('lanes/' + targetLaneId + '/move', 'post', { deleted: deleted, targetLaneId: targetLaneId }).then(function (res) {
	        dispatch(moveBetweenLanes(targetLaneId, sourceNoteId, sourceLaneId));
	      });
	    });
	  };
	};

	function createLane(lane) {
	  return {
	    type: CREATE_LANE,
	    lane: _extends({}, lane)
	  };
	}

	function createLaneRequest(lane) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lanes', 'post', lane).then(function (res) {
	      dispatch(createLane(res.lane));
	    });
	  };
	};

	function createLanes(lanesData) {
	  return {
	    type: CREATE_LANES,
	    lanes: lanesData
	  };
	}

	function updateLane(lane) {
	  return {
	    type: UPDATE_LANE,
	    lane: lane
	  };
	}

	function editLane(lane) {
	  return {
	    type: EDIT_LANE,
	    lane: lane
	  };
	}

	function updateLaneRequest(lane) {
	  return function (dispatch) {
	    var path = 'lanes/' + lane.id + '/new';
	    return (0, _apiCaller2.default)(path, 'put', { "name": lane.name }).then(function () {
	      dispatch(updateLane(lane));
	    });
	  };
	}

	function deleteLane(laneId) {
	  return {
	    type: DELETE_LANE,
	    laneId: laneId
	  };
	}

	function deleteLaneRequest(laneId) {
	  return function (dispatch) {
	    var path = 'lanes/' + laneId;
	    return (0, _apiCaller2.default)(path, 'delete').then(function () {
	      dispatch(deleteLane(laneId));
	    });
	  };
	}

	function fetchLanes() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lanes').then(function (res) {
	      var normalized = (0, _normalizr.normalize)(res.lanes, _schema.lanes);
	      var _normalized$entities = normalized.entities,
	          normalizedLanes = _normalized$entities.lanes,
	          notes = _normalized$entities.notes;

	      dispatch(createLanes(normalizedLanes));
	      dispatch((0, _NoteActions.createNotes)(notes));
	    });
	  };
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;

	var _isomorphicFetch = __webpack_require__(30);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	var _config = __webpack_require__(31);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];

	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;

	    if (!response.ok) {
	      return Promise.reject(json);
	    }

	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  // mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
	  mongoURL: process.env.MONGO_URL || 'mongodb://lukasz:parowakaczka@ds133127.mlab.com:33127/kanban',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.lanes = undefined;

	var _normalizr = __webpack_require__(33);

	var note = new _normalizr.schema.Entity('notes');

	var lane = new _normalizr.schema.Entity('lanes', {
	  notes: [note]
	});

	var lanes = exports.lanes = [lane];

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = require("normalizr");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MOVE_WITHIN_LANE = exports.DELETE_NOTE = exports.EDIT_NOTE = exports.UPDATE_NOTE = exports.CREATE_NOTES = exports.CREATE_NOTE = undefined;
	exports.moveWithinLane = moveWithinLane;
	exports.createNote = createNote;
	exports.createNoteRequest = createNoteRequest;
	exports.createNotes = createNotes;
	exports.updateNote = updateNote;
	exports.updateNoteRequest = updateNoteRequest;
	exports.editNote = editNote;
	exports.deleteNote = deleteNote;
	exports.deleteNoteRequest = deleteNoteRequest;

	var _apiCaller = __webpack_require__(29);

	var _apiCaller2 = _interopRequireDefault(_apiCaller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CREATE_NOTE = exports.CREATE_NOTE = 'CREATE_NOTE';
	var CREATE_NOTES = exports.CREATE_NOTES = 'CREATE_NOTES';
	var UPDATE_NOTE = exports.UPDATE_NOTE = 'UPDATE_NOTE';
	var EDIT_NOTE = exports.EDIT_NOTE = 'EDIT_NOTE';
	var DELETE_NOTE = exports.DELETE_NOTE = 'DELETE_NOTE';
	var MOVE_WITHIN_LANE = exports.MOVE_WITHIN_LANE = 'MOVE_NOTES';

	function moveWithinLane(laneId, targetId, sourceId) {
	  return {
	    type: MOVE_WITHIN_LANE,
	    laneId: laneId,
	    targetId: targetId,
	    sourceId: sourceId
	  };
	}

	function createNote(note, laneId) {
	  return {
	    type: CREATE_NOTE,
	    laneId: laneId,
	    note: note
	  };
	}

	function createNoteRequest(note, laneId) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('lanes/' + laneId + '/notes', 'post', { note: note, laneId: laneId }).then(function (noteResp) {
	      dispatch(createNote(noteResp, laneId));
	    });
	  };
	}

	function createNotes(notesData) {
	  return {
	    type: CREATE_NOTES,
	    notes: notesData
	  };
	}

	function updateNote(note) {
	  return {
	    type: UPDATE_NOTE,
	    note: note
	  };
	}

	function updateNoteRequest(note) {
	  return function (dispatch) {
	    var path = 'lanes/' + note.laneId + '/notes/' + note.id;
	    return (0, _apiCaller2.default)(path, 'put', { "task": note.task }).then(function () {
	      dispatch(updateNote(note));
	    });
	  };
	}

	function editNote(noteId) {
	  return {
	    type: EDIT_NOTE,
	    noteId: noteId
	  };
	}

	function deleteNote(noteId, laneId) {
	  return {
	    type: DELETE_NOTE,
	    noteId: noteId,
	    laneId: laneId
	  };
	}

	function deleteNoteRequest(noteId, laneId) {
	  return function (dispatch) {
	    var path = 'lanes/' + laneId + '/notes/' + noteId;
	    return (0, _apiCaller2.default)(path, 'delete').then(function () {
	      dispatch(deleteNote(noteId, laneId));
	    });
	  };
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = require("lodash/omit");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = notes;

	var _NoteActions = __webpack_require__(34);

	var _omit = __webpack_require__(35);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {};

	function notes() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _NoteActions.CREATE_NOTE:
	    case _NoteActions.UPDATE_NOTE:
	      return _extends({}, state, _defineProperty({}, action.note.id, action.note));
	    case _NoteActions.EDIT_NOTE:
	      {
	        var note = _extends({}, state[action.noteId], { editing: true });
	        console.log(note);
	        return _extends({}, state, _defineProperty({}, action.noteId, note));
	      }
	    case _NoteActions.DELETE_NOTE:
	      return (0, _omit2.default)(state, action.noteId);
	    case _NoteActions.CREATE_NOTES:
	      return _extends({}, action.notes);
	    default:
	      return state;
	  }
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _setup = __webpack_require__(38);

	var _IntlActions = __webpack_require__(47);

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var initLocale = global.navigator && global.navigator.language || 'en';

	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});

	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line


	        return _extends({}, state, actionWithoutType);
	      }

	    default:
	      return state;
	  }
	};

	exports.default = IntlReducer;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;

	var _reactIntl = __webpack_require__(8);

	var _intl = __webpack_require__(39);

	var _intl2 = _interopRequireDefault(_intl);

	var _intlLocalesSupported = __webpack_require__(40);

	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

	__webpack_require__(41);

	var _en = __webpack_require__(42);

	var _en2 = _interopRequireDefault(_en);

	var _en3 = __webpack_require__(43);

	var _en4 = _interopRequireDefault(_en3);

	__webpack_require__(44);

	var _fr = __webpack_require__(45);

	var _fr2 = _interopRequireDefault(_fr);

	var _fr3 = __webpack_require__(46);

	var _fr4 = _interopRequireDefault(_fr3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];

	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};

	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)


	// need Intl polyfill, Intl not supported in Safari


	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}

	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;

	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }

	    return messages;
	  }, {});
	}

	// bring in intl polyfill, react-intl, and app-specific language data

	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);

	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = require("intl");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'Kanban App',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.switchLanguage = switchLanguage;

	var _setup = __webpack_require__(38);

	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = require("react-helmet");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(49);

	var _App = __webpack_require__(52);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(55);
	}

	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  getComponent: function getComponent(nextState, cb) {
	    !/* require.ensure */(function (require) {
	      cb(null, __webpack_require__(55).default);
	    }(__webpack_require__));
	  }
	}));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(9);

	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7"
	};

	var _App2 = _interopRequireDefault(_App);

	var _reactHelmet = __webpack_require__(50);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _DevTools = __webpack_require__(20);

	var _DevTools2 = _interopRequireDefault(_DevTools);

	var _Header = __webpack_require__(53);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(54);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AppActions = __webpack_require__(26);

	var _IntlActions = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Import Style


	// Import Components


	// Import Actions


	var _ref = _jsx(_DevTools2.default, {});

	var _ref2 = _jsx(_Footer2.default, {});

	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	    };

	    _this.state = { isMounted: false };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
	        title: 'Kanban App',
	        titleTemplate: '',
	        meta: [{ charset: 'utf-8' }, {
	          'http-equiv': 'X-UA-Compatible',
	          content: 'IE=edge'
	        }, {
	          name: 'viewport',
	          content: 'width=device-width, initial-scale=1'
	        }]
	      }), _jsx(_Header2.default, {
	        switchLanguage: function switchLanguage(lang) {
	          return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
	        },
	        intl: this.props.intl,
	        toggleAddPost: this.toggleAddPostSection
	      }), _jsx('div', {
	        className: _App2.default.container
	      }, void 0, this.props.children), _ref2));
	    }
	  }]);

	  return App;
	}(_react.Component);

	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	exports.Header = Header;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(49);

	var _reactIntl = __webpack_require__(8);

	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
	  "content": "_1eavAvnySzoZc5rld6Q4pa",
	  "site-title": "UfFn6muOcOBjkVI5_yltp",
	  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk",
	  "language-switcher": "_3bviQya5ZWCvWr6lGdfO9h",
	  "selected": "_3IRlmCpgSZBcTGVIGHvgaI"
	};

	var _Header2 = _interopRequireDefault(_Header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_reactRouter.Link, {
	  to: '/'
	}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'siteTitle'
	}));

	function Header(props, context) {
	  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
	    return _jsx('li', {
	      onClick: function onClick() {
	        return props.switchLanguage(lang);
	      },
	      className: lang === props.intl.locale ? _Header2.default.selected : ''
	    }, lang, lang);
	  });

	  return _jsx('div', {
	    className: _Header2.default.header
	  }, void 0, _jsx('div', {
	    className: _Header2.default.content
	  }, void 0, _jsx('h1', {
	    className: _Header2.default['site-title']
	  }, void 0, _ref)));
	}

	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

	exports.default = Header;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	// Import Style


	// Import Images


	exports.Footer = Footer;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _reactIntl = __webpack_require__(8);

	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};

	var _Footer2 = _interopRequireDefault(_Footer);

	var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";

	var _headerBk2 = _interopRequireDefault(_headerBk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('p', {}, void 0, '\xA9 2016 \xB7 Hashnode \xB7 LinearBytes Inc.');

	var _ref2 = _jsx('p', {}, void 0, _jsx(_reactIntl.FormattedMessage, {
	  id: 'twitterMessage'
	}), ' : ', _jsx('a', {
	  href: 'https://twitter.com/@mern_io',
	  target: '_Blank'
	}, void 0, '@mern_io'));

	function Footer() {
	  return _jsx('div', {
	    style: { background: '#FFF url(' + _headerBk2.default + ') center' },
	    className: _Footer2.default.footer
	  }, void 0, _ref, _ref2);
	}

	exports.default = Footer;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(56);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactRedux = __webpack_require__(9);

	var _redux = __webpack_require__(18);

	var _Lanes = __webpack_require__(57);

	var _Lanes2 = _interopRequireDefault(_Lanes);

	var _Kanban = {
	  "container": "_2D__xIYb2JJSF09_21EGus"
	};

	var _Kanban2 = _interopRequireDefault(_Kanban);

	var _LaneActions = __webpack_require__(28);

	var _reactDnd = __webpack_require__(63);

	var _reactDndHtml5Backend = __webpack_require__(66);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Kanban = function (_React$Component) {
	  _inherits(Kanban, _React$Component);

	  function Kanban(props) {
	    _classCallCheck(this, Kanban);

	    return _possibleConstructorReturn(this, (Kanban.__proto__ || Object.getPrototypeOf(Kanban)).call(this, props));
	  }

	  _createClass(Kanban, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.fetch();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _jsx('div', {
	        className: _Kanban2.default.container
	      }, void 0, _jsx('button', {
	        className: _Kanban2.default.AddLane,
	        onClick: function onClick() {
	          return _this2.props.createLane({
	            name: 'New lane'
	          });
	        }
	      }, void 0, 'Add lane'), _jsx(_Lanes2.default, {
	        lanes: this.props.lanes
	      }));
	    }
	  }]);

	  return Kanban;
	}(_react2.default.Component);

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    lanes: Object.values(state.lanes)
	  };
	};

	var mapDispatchToProps = {
	  createLane: _LaneActions.createLaneRequest,
	  fetch: _LaneActions.fetchLanes
	};

	exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default))(Kanban);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _LaneContainer = __webpack_require__(58);

	var _LaneContainer2 = _interopRequireDefault(_LaneContainer);

	var _Lane = {
	  "lane": "_2KZVM7Dw6KDfGeCCoRl5v5",
	  "laneHeader": "_3dHhxDrzS-8eYeGFBWQmcn",
	  "laneAddNote": "_3fiG4goe39hSr5dN51gCUi",
	  "laneDelete": "_2814y3wdJqSpu13N7CS9_R",
	  "valueContainer": "_7p0Qc9ZCdxR21ZzY_mVaJ"
	};

	var _Lane2 = _interopRequireDefault(_Lane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Lanes = function Lanes(_ref) {
	  var lanes = _ref.lanes;
	  //lanes jest tutaj tablica obiektow
	  return _jsx('div', {}, void 0, lanes.map(function (lane) {
	    return _jsx(_LaneContainer2.default, {
	      lane: lane
	    }, lane.id);
	  }));
	};

	exports.default = Lanes;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(9);

	var _Lane = __webpack_require__(59);

	var _Lane2 = _interopRequireDefault(_Lane);

	var _LaneActions = __webpack_require__(28);

	var _NoteActions = __webpack_require__(34);

	var _redux = __webpack_require__(18);

	var _reactDnd = __webpack_require__(63);

	var _ItemTypes = __webpack_require__(64);

	var _ItemTypes2 = _interopRequireDefault(_ItemTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var noteTarget = {
	  drop: function drop(targetProps, monitor) {
	    var sourceProps = monitor.getItem();
	    var noteId = sourceProps.id,
	        sourceLaneId = sourceProps.laneId;

	    if (!targetProps.lane.notes.find(function (note) {
	      return note === noteId;
	    })) {
	      targetProps.moveNoteTo(targetProps.lane.id, noteId, sourceLaneId);
	    }
	  }
	};

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var obj = ownProps.lane;
	  var stateNotesArray = Object.values(state.notes);
	  return {
	    laneNotes: obj.notes.length > 0 && stateNotesArray.length > 0 ? obj.notes.map(function (noteId) {
	      return stateNotesArray.find(function (note) {
	        return note.id === noteId;
	      });
	    }) : []
	  };
	};

	var mapDispatchToProps = {
	  deleteLane: _LaneActions.deleteLaneRequest,
	  updateLane: _LaneActions.updateLaneRequest,
	  addNote: _NoteActions.createNoteRequest,
	  moveNoteTo: _LaneActions.moveBetweenLanesRequest,
	  editLane: _LaneActions.editLane
	};

	exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactDnd.DropTarget)(_ItemTypes2.default.NOTE, noteTarget, function (dragConnect) {
	  return {
	    connectDropTarget: dragConnect.dropTarget()
	  };
	}))(_Lane2.default);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _NotesContainer = __webpack_require__(60);

	var _NotesContainer2 = _interopRequireDefault(_NotesContainer);

	var _Edit = __webpack_require__(65);

	var _Edit2 = _interopRequireDefault(_Edit);

	var _Lane = {
	  "lane": "_2KZVM7Dw6KDfGeCCoRl5v5",
	  "laneHeader": "_3dHhxDrzS-8eYeGFBWQmcn",
	  "laneAddNote": "_3fiG4goe39hSr5dN51gCUi",
	  "laneDelete": "_2814y3wdJqSpu13N7CS9_R",
	  "valueContainer": "_7p0Qc9ZCdxR21ZzY_mVaJ"
	};

	var _Lane2 = _interopRequireDefault(_Lane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Lane = function Lane(props) {
	  var connectDropTarget = props.connectDropTarget,
	      lane = props.lane,
	      laneNotes = props.laneNotes,
	      updateLane = props.updateLane,
	      addNote = props.addNote,
	      deleteLane = props.deleteLane,
	      editLane = props.editLane;

	  var laneId = lane.id;

	  return connectDropTarget(_jsx('div', {
	    className: _Lane2.default.lane
	  }, void 0, _jsx('div', {
	    className: _Lane2.default.laneHeader
	  }, void 0, _jsx('div', {
	    className: _Lane2.default.laneAddNote
	  }, void 0, _jsx('button', {
	    onClick: function onClick() {
	      return addNote({ task: 'New Note' }, laneId);
	    }
	  }, void 0, 'Add Note')), _jsx('div', {
	    className: _Lane2.default.laneDelete
	  }, void 0, _jsx('button', {
	    onClick: function onClick() {
	      return deleteLane(laneId);
	    }
	  }, void 0, 'Remove Lane')), _jsx('div', {
	    className: _Lane2.default.valueContainer
	  }, void 0, _jsx(_Edit2.default, {
	    editing: lane.editing,
	    value: lane.name,
	    onValueClick: function onValueClick() {
	      return editLane(lane.id);
	    },
	    onUpdate: function onUpdate(name) {
	      return updateLane(_extends({}, lane, { name: name, editing: false }));
	    }
	  }))), _jsx(_NotesContainer2.default, {
	    notes: laneNotes,
	    laneId: laneId
	  })));
	};

	exports.default = Lane;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _reactRedux = __webpack_require__(9);

	var _Notes = __webpack_require__(61);

	var _Notes2 = _interopRequireDefault(_Notes);

	var _NoteActions = __webpack_require__(34);

	var noteActions = _interopRequireWildcard(_NoteActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapDispatchToProps = _extends({}, noteActions);

	exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Notes2.default);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Note = __webpack_require__(62);

	var _Note2 = _interopRequireDefault(_Note);

	var _Edit = __webpack_require__(65);

	var _Edit2 = _interopRequireDefault(_Edit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Notes = function Notes(_ref) {
			var notes = _ref.notes,
			    laneId = _ref.laneId,
			    editNote = _ref.editNote,
			    updateNoteRequest = _ref.updateNoteRequest,
			    deleteNoteRequest = _ref.deleteNoteRequest,
			    moveWithinLane = _ref.moveWithinLane;

			return _jsx('ul', {
					className: 'notes'
			}, void 0, notes.map(function (note) {
					return _jsx(_Note2.default, {
							id: note.id,
							editing: note.editing,
							moveWithinLane: moveWithinLane,
							laneId: laneId
					}, note.id, _jsx(_Edit2.default, {
							editing: note.editing,
							value: note.task,
							onValueClick: function onValueClick() {
									return editNote(note.id);
							},
							onUpdate: function onUpdate(task) {
									return updateNoteRequest(_extends({}, note, {
											task: task,
											laneId: laneId,
											editing: false
									}));
							},
							onDelete: function onDelete() {
									return deleteNoteRequest(note.id, laneId);
							}
					}));
			}));
	};

	exports.default = Notes;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Note = {
	  "note": "X7cEb3WPQPdM_Eamul22P",
	  "valueContainer": "_2O1XqA2yswk_ZkX0USZ-B-"
	};

	var _Note2 = _interopRequireDefault(_Note);

	var _reactDnd = __webpack_require__(63);

	var _redux = __webpack_require__(18);

	var _ItemTypes = __webpack_require__(64);

	var _ItemTypes2 = _interopRequireDefault(_ItemTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noteSource = {
	  beginDrag: function beginDrag(props) {
	    return {
	      id: props.id,
	      laneId: props.laneId
	    };
	  },
	  isDragging: function isDragging(props, monitor) {
	    return props.id === monitor.getItem().id;
	  }
	};

	var noteTarget = {
	  hover: function hover(targetProps, monitor) {
	    var sourceProps = monitor.getItem();
	    if (targetProps.id !== sourceProps.id && targetProps.laneId === sourceProps.laneId) {
	      targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
	    }
	  }
	};

	var Note = function (_React$Component) {
	  _inherits(Note, _React$Component);

	  function Note() {
	    _classCallCheck(this, Note);

	    return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).apply(this, arguments));
	  }

	  _createClass(Note, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          connectDragSource = _props.connectDragSource,
	          connectDropTarget = _props.connectDropTarget,
	          isDragging = _props.isDragging,
	          editing = _props.editing,
	          children = _props.children;


	      var dragSource = editing ? function (a) {
	        return a;
	      } : connectDragSource;

	      return dragSource(connectDropTarget(_jsx('li', {
	        className: _Note2.default.note,
	        style: {
	          opacity: isDragging ? 0 : 1
	        }
	      }, void 0, children)));
	    }
	  }]);

	  return Note;
	}(_react2.default.Component);

	exports.default = (0, _redux.compose)((0, _reactDnd.DragSource)(_ItemTypes2.default.NOTE, noteSource, function (connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource(),
	    isDragging: monitor.isDragging() };
	}), (0, _reactDnd.DropTarget)(_ItemTypes2.default.NOTE, noteTarget, function (connect) {
	  return {
	    connectDropTarget: connect.dropTarget()
	  };
	}))(Note);

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = require("react-dnd");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		NOTE: 'note'
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _Edit = {
	  "value": "_1CNxZUOHyzBTMr0e2Ya38Q"
	};

	var _Edit2 = _interopRequireDefault(_Edit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Edit = function (_Component) {
	  _inherits(Edit, _Component);

	  function Edit() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Edit);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.checkEnter = function (e) {
	      if (e.key === 'Enter') {
	        _this.finishEdit(e);
	      }
	    }, _this.finishEdit = function (e) {
	      var value = e.target.value;

	      if (_this.props.onUpdate) {
	        _this.props.onUpdate(value.trim());
	      }
	    }, _this.renderDelete = function () {
	      return _jsx('button', {
	        className: _Edit2.default.delete,
	        onClick: _this.props.onDelete
	      }, void 0, '\xD7');
	    }, _this.renderValue = function () {
	      var _this$props = _this.props,
	          value = _this$props.value,
	          onDelete = _this$props.onDelete,
	          onValueClick = _this$props.onValueClick;

	      return _jsx('div', {
	        className: _Edit2.default.valueContainer
	      }, void 0, _jsx('span', {
	        className: _Edit2.default.value,
	        onClick: onValueClick
	      }, void 0, value), onDelete ? _this.renderDelete() : null);
	    }, _this.renderEdit = function () {
	      return _jsx('input', {
	        type: 'text',
	        autoFocus: true,
	        defaultValue: _this.props.value,
	        onBlur: _this.finishEdit,
	        onKeyPress: _this.checkEnter
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Edit, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, this.props.editing ? this.renderEdit() : this.renderValue());
	    }
	  }]);

	  return Edit;
	}(_react.Component);

	exports.default = Edit;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	module.exports = require("react-dnd-html5-backend");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(68);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(1);

	var _lane = __webpack_require__(70);

	var LaneController = _interopRequireWildcard(_lane);

	var _note = __webpack_require__(74);

	var _note2 = _interopRequireDefault(_note);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router();
	router.use('/lanes/:laneId/', _note2.default); //jak to działa ?
	//finalna sciezka po uzyciu middleware noteRouter oraz po zmergowaniu parametrow bedzie wygladac
	//tak: /lanes/:laneId/notes ???????????????????

	//Get all lanes
	router.route('/lanes').get(LaneController.getLanes);

	// Add a new Lane
	router.route('/lanes').post(LaneController.addLane);

	// Edit line title
	router.route('/lanes/:laneId/new').put(LaneController.editLaneTitle);

	// Delete a lane by laneId
	router.route('/lanes/:laneId').delete(LaneController.deleteLane);

	exports.default = router;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSomething = getSomething;
	exports.addLane = addLane;
	exports.getLanes = getLanes;
	exports.deleteLane = deleteLane;
	exports.editLaneTitle = editLaneTitle;

	var _lane = __webpack_require__(71);

	var _lane2 = _interopRequireDefault(_lane);

	var _v = __webpack_require__(73);

	var _v2 = _interopRequireDefault(_v);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getSomething(req, res) {
	  return res.status(200).end();
	};

	function addLane(req, res) {
	  if (!req.body.name) {
	    res.status(403).end();
	  }

	  var newLane = new _lane2.default(req.body);

	  newLane.notes = [];
	  newLane.id = (0, _v2.default)();
	  newLane.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ lane: saved });
	  });
	};

	function getLanes(req, res) {
	  _lane2.default.find().exec(function (err, lanes) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ lanes: lanes });
	  });
	};

	function deleteLane(req, res) {
	  _lane2.default.findOne({ id: req.params.laneId }).exec(function (err, lane) {
	    if (err) {
	      res.status(500).send(err);
	    }

	    lane.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

	function editLaneTitle(req, res) {
	  _lane2.default.findOneAndUpdate({ id: req.params.laneId }, { $set: { name: req.body.name } }, { new: true }, function (err, newLane) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.send(newLane);
	  });
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _note = __webpack_require__(72);

	var _note2 = _interopRequireDefault(_note);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var laneSchema = new Schema({
	  name: { type: 'String', required: true },
	  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
	  id: { type: 'String', required: true, unique: true }
	});

	laneSchema.pre('find', function (next) {
	  this.populate('notes');
	  next();
	});

	laneSchema.pre('remove', function (next) {
	  this.notes.forEach(function (noteId) {
	    _note2.default.findById(noteId, function (err, note) {
	      if (err) {
	        next(err);
	      }
	      note.remove();
	    });
	  });
	  next();
	});

	exports.default = _mongoose2.default.model('Lane', laneSchema);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var noteSchema = new Schema({
	  task: { type: 'String', required: true },
	  id: { type: 'String', required: true, unique: true }
	});

	exports.default = _mongoose2.default.model('Note', noteSchema);

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = require("uuid/v4");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _express = __webpack_require__(1);

	var _note = __webpack_require__(75);

	var NoteController = _interopRequireWildcard(_note);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var router = new _express.Router({ mergeParams: true });

	// Add a new Note
	router.route('/notes').post(NoteController.addNote);

	// Move note
	router.route('/move').post(NoteController.moveNote);

	// Delete a new Note
	router.route('/notes/:noteId').delete(NoteController.deleteNote);

	// Edit an existing Note
	router.route('/notes/:noteId').put(NoteController.updateNote);

	exports.default = router;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSomething = getSomething;
	exports.moveNote = moveNote;
	exports.addNote = addNote;
	exports.deleteNote = deleteNote;
	exports.updateNote = updateNote;

	var _note = __webpack_require__(72);

	var _note2 = _interopRequireDefault(_note);

	var _lane = __webpack_require__(71);

	var _lane2 = _interopRequireDefault(_lane);

	var _v = __webpack_require__(73);

	var _v2 = _interopRequireDefault(_v);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getSomething(req, res) {
	  return res.status(200).end();
	};

	function moveNote(req, res) {

	  var movedNote = req.body.deleted;
	  var targetLaneId = req.body.targetLaneId;


	  if (!movedNote || !movedNote.task || !targetLaneId) {
	    res.status(400).end();
	  }
	  _lane2.default.findOne({ id: targetLaneId }).populate('notes').exec(function (err, lane) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    lane.notes.push(movedNote);
	    return lane.save();
	  }).then(function () {
	    res.status(200).end();
	  });
	}

	function addNote(req, res) {
	  var _req$body = req.body,
	      note = _req$body.note,
	      laneId = _req$body.laneId;


	  if (!note || !note.task || !laneId) {
	    res.status(400).end();
	  }

	  var newNote = new _note2.default({
	    task: note.task
	  });

	  newNote.id = (0, _v2.default)();
	  newNote.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    _lane2.default.findOne({ id: laneId }).then(function (lane) {
	      lane.notes.push(saved);
	      return lane.save();
	    }).then(function () {
	      res.json(saved);
	    });
	  });
	}

	function deleteNote(req, res) {
	  _lane2.default.findOne({ id: req.params.laneId }).populate('notes').exec(function (err, lane) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    lane.notes = lane.notes.filter(function (note) {
	      return note.id != req.params.noteId;
	    });
	    lane.save();
	  }).then(function () {
	    _note2.default.findOne({ id: req.params.noteId }).then(function (note) {
	      res.status(200).json(note);
	    });
	  });
	}

	function updateNote(req, res) {
	  _note2.default.findOneAndUpdate({ id: req.params.noteId }, { $set: { task: req.body.task } }, { new: true }, function (err, newNote) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.send(newNote);
	  });
	  _lane2.default.findOne({ id: req.params.laneId }).populate('notes').exec(function (err, lane) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    lane.save();
	  }).then(function () {
	    res.status(200).end();
	  });
	}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  _post2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }

	    var content1 = 'Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum';

	    var content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum. Sed ut perspiciatis unde omnis iste natus error\n      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,\n      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\n      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\n      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem\n      ipsum quia dolor sit amet.';

	    var post1 = new _post2.default({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
	    var post2 = new _post2.default({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

	    _post2.default.create([post1, post2], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};

	var _post = __webpack_require__(77);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});

	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ })
/******/ ]);