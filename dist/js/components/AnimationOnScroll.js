"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationOnScroll = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var animatedClass = 'animate__animated';
var serverSide = typeof window === 'undefined';
var scrollableParentRefInitialValue = undefined;

if (!serverSide) {
  scrollableParentRefInitialValue = window;
}

var AnimationOnScroll = function AnimationOnScroll(_ref) {
  var _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? 150 : _ref$offset,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      styleProps = _ref.style,
      classNameProps = _ref.className,
      _ref$initiallyVisible = _ref.initiallyVisible,
      initiallyVisible = _ref$initiallyVisible === void 0 ? false : _ref$initiallyVisible,
      animateIn = _ref.animateIn,
      afterAnimatedIn = _ref.afterAnimatedIn,
      animateOut = _ref.animateOut,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$animatePreScroll = _ref.animatePreScroll,
      animatePreScroll = _ref$animatePreScroll === void 0 ? true : _ref$animatePreScroll,
      afterAnimatedOut = _ref.afterAnimatedOut,
      scrollableParentSelector = _ref.scrollableParentSelector,
      _ref$animateOnce = _ref.animateOnce,
      animateOnce = _ref$animateOnce === void 0 ? false : _ref$animateOnce,
      children = _ref.children;

  var _useState = (0, _react.useState)(animatedClass),
      _useState2 = _slicedToArray(_useState, 2),
      classes = _useState2[0],
      setClasses = _useState2[1];

  var _useState3 = (0, _react.useState)({
    animationDuration: "".concat(duration, "s"),
    opacity: initiallyVisible ? 1 : 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      style = _useState4[0],
      setStyle = _useState4[1];

  var node = (0, _react.useRef)(null);
  var animating = (0, _react.useRef)(false);
  var visibilityRef = (0, _react.useRef)({
    onScreen: false,
    inViewport: false
  });
  var delayedAnimationTORef = (0, _react.useRef)(undefined);
  var callbackTORef = (0, _react.useRef)(undefined);
  var scrollableParentRef = (0, _react.useRef)(scrollableParentRefInitialValue);
  var getElementTop = (0, _react.useCallback)(function (elm) {
    var yPos = 0;

    while (elm && elm.offsetTop !== undefined && elm.clientTop !== undefined) {
      yPos += elm.offsetTop + elm.clientTop;
      elm = elm.offsetParent;
    }

    return yPos;
  }, []);
  var getScrollPos = (0, _react.useCallback)(function () {
    if (scrollableParentRef.current.pageYOffset !== undefined) {
      return scrollableParentRef.current.pageYOffset;
    }

    return scrollableParentRef.current.scrollTop;
  }, [scrollableParentRef]);
  var getScrollableParentHeight = (0, _react.useCallback)(function () {
    if (scrollableParentRef.current.innerHeight !== undefined) {
      return scrollableParentRef.current.innerHeight;
    }

    return scrollableParentRef.current.clientHeight;
  }, [scrollableParentRef]);
  var getViewportTop = (0, _react.useCallback)(function () {
    return getScrollPos() + offset;
  }, [offset, getScrollPos]);
  var getViewportBottom = (0, _react.useCallback)(function () {
    return getScrollPos() + getScrollableParentHeight() - offset;
  }, [offset, getScrollPos, getScrollableParentHeight]);
  var isInViewport = (0, _react.useCallback)(function (y) {
    return y >= getViewportTop() && y <= getViewportBottom();
  }, [getViewportTop, getViewportBottom]);
  var isAboveViewport = (0, _react.useCallback)(function (y) {
    return y < getViewportTop();
  }, [getViewportTop]);
  var isBelowViewport = (0, _react.useCallback)(function (y) {
    return y > getViewportBottom();
  }, [getViewportBottom]);
  var inViewport = (0, _react.useCallback)(function (elementTop, elementBottom) {
    return isInViewport(elementTop) || isInViewport(elementBottom) || isAboveViewport(elementTop) && isBelowViewport(elementBottom);
  }, [isInViewport, isAboveViewport, isBelowViewport]);
  var isAboveScreen = (0, _react.useCallback)(function (y) {
    return y < getScrollPos();
  }, [getScrollPos]);
  var isBelowScreen = (0, _react.useCallback)(function (y) {
    return y > getScrollPos() + getScrollableParentHeight();
  }, [getScrollPos, getScrollableParentHeight]);
  var onScreen = (0, _react.useCallback)(function (elementTop, elementBottom) {
    return !isAboveScreen(elementBottom) && !isBelowScreen(elementTop);
  }, [isAboveScreen, isBelowScreen]);
  var getVisibility = (0, _react.useCallback)(function () {
    var elementTop = getElementTop(node.current) - getElementTop(scrollableParentRef.current);
    var elementBottom = elementTop + node.current.clientHeight;
    return {
      inViewport: inViewport(elementTop, elementBottom),
      onScreen: onScreen(elementTop, elementBottom)
    };
  }, [getElementTop, node, inViewport, onScreen, scrollableParentRef]);
  var visibilityHasChanged = (0, _react.useCallback)(function (previousVis, currentVis) {
    return previousVis.inViewport !== currentVis.inViewport || previousVis.onScreen !== currentVis.onScreen;
  }, []);
  var animate = (0, _react.useCallback)(function (animation, callback) {
    delayedAnimationTORef.current = setTimeout(function () {
      animating.current = true;
      setClasses("".concat(animatedClass, " ").concat(animation));
      setStyle({
        animationDuration: "".concat(duration, "s")
      });
      callbackTORef.current = setTimeout(callback, duration * 1000);
    }, delay);
  }, [animating, delay, duration]);
  var animateInTrigger = (0, _react.useCallback)(function (callback) {
    animate(animateIn, function () {
      if (!animateOnce) {
        setStyle({
          animationDuration: "".concat(duration, "s"),
          opacity: 1
        });
        animating.current = false;
      }

      var vis = getVisibility();

      if (callback) {
        callback(vis);
      }
    });
  }, [animating, animateIn, animateOnce, duration, animate, getVisibility]);
  var animateOutTrigger = (0, _react.useCallback)(function (callback) {
    animate(animateOut, function () {
      setClasses(animatedClass);
      setStyle({
        animationDuration: "".concat(duration, "s"),
        opacity: 0
      });
      var vis = getVisibility();

      if (vis.inViewport && animateIn) {
        animateInTrigger(afterAnimatedIn);
      } else {
        animating.current = false;
      }

      if (callback) {
        callback(vis);
      }
    });
  }, [animating, animate, animateIn, duration, afterAnimatedIn, animateInTrigger, animateOut, getVisibility]);
  var handleScroll = (0, _react.useCallback)(function () {
    if (!animating.current) {
      var visibility = visibilityRef.current;
      var currentVis = getVisibility();

      if (visibilityHasChanged(visibility, currentVis)) {
        clearTimeout(delayedAnimationTORef.current);

        if (!currentVis.onScreen) {
          setClasses(animatedClass);
          setStyle({
            animationDuration: "".concat(duration, "s"),
            opacity: initiallyVisible ? 1 : 0
          });
        } else if (currentVis.inViewport && animateIn) {
          animateInTrigger(afterAnimatedIn);
        } else if (currentVis.onScreen && visibility.inViewport && animateOut && node.current.style.opacity === '1') {
          animateOutTrigger(afterAnimatedOut);
        }

        visibilityRef.current = currentVis;
      }
    }
  }, [afterAnimatedIn, afterAnimatedOut, animateIn, animateInTrigger, animateOut, duration, initiallyVisible, visibilityHasChanged, animateOutTrigger, getVisibility]);
  var listener = (0, _react.useMemo)(function () {
    return (0, _lodash.default)(function () {
      handleScroll();
    }, 50);
  }, [handleScroll]);
  (0, _react.useEffect)(function () {
    if (!serverSide) {
      var parentSelector = scrollableParentSelector;
      scrollableParentRef.current = parentSelector ? document.querySelector(parentSelector) : window;

      if (scrollableParentRef.current && scrollableParentRef.current.addEventListener) {
        scrollableParentRef.current.addEventListener('scroll', listener);
      } else {
        console.warn("Cannot find element by locator: ".concat(scrollableParentSelector));
      }

      if (animatePreScroll) {
        handleScroll();
      }

      return function () {
        clearTimeout(delayedAnimationTORef.current);
        clearTimeout(callbackTORef.current);

        if (window && window.removeEventListener) {
          window.removeEventListener('scroll', listener);
        }
      };
    }
  }, [handleScroll, scrollableParentSelector, scrollableParentRef, listener, animatePreScroll]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: node,
    className: classNameProps ? "".concat(classNameProps, " ").concat(classes) : classes,
    style: Object.assign({}, style, styleProps)
  }, children);
};

exports.AnimationOnScroll = AnimationOnScroll;
AnimationOnScroll.propTypes = {
  offset: _propTypes.default.number,
  duration: _propTypes.default.number,
  style: _propTypes.default.any,
  className: _propTypes.default.string,
  initiallyVisible: _propTypes.default.bool,
  animateIn: _propTypes.default.string,
  afterAnimatedIn: _propTypes.default.any,
  animateOut: _propTypes.default.string,
  delay: _propTypes.default.number,
  animatePreScroll: _propTypes.default.bool,
  afterAnimatedOut: _propTypes.default.any,
  scrollableParentSelector: _propTypes.default.string,
  animateOnce: _propTypes.default.bool,
  children: _propTypes.default.any
};
//# sourceMappingURL=AnimationOnScroll.js.map