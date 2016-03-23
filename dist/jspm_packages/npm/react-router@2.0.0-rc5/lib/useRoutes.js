/* */ 
(function(process) {
  'use strict';
  exports.__esModule = true;
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
      target[i] = obj[i];
    }
    return target;
  }
  var _historyLibUseQueries = require('history/lib/useQueries');
  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
  var _createTransitionManager = require('./createTransitionManager');
  var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
  var _warning = require('./warning');
  var _warning2 = _interopRequireDefault(_warning);
  function useRoutes(createHistory) {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : undefined;
    return function() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var routes = _ref.routes;
      var options = _objectWithoutProperties(_ref, ['routes']);
      var history = _historyLibUseQueries2['default'](createHistory)(options);
      var transitionManager = _createTransitionManager2['default'](history, routes);
      return _extends({}, history, transitionManager);
    };
  }
  exports['default'] = useRoutes;
  module.exports = exports['default'];
})(require('process'));
