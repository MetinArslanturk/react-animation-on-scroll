(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "lodash.throttle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("lodash.throttle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.lodash);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _lodash) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AnimationOnScroll = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const animatedClass = 'animate__animated';
  const serverSide = typeof window === 'undefined';
  let scrollableParentRefInitialValue = undefined;

  if (!serverSide) {
    scrollableParentRefInitialValue = window;
  }

  const AnimationOnScroll = exports.AnimationOnScroll = ({
    offset = 150,
    duration = 1,
    style: styleProps,
    className: classNameProps,
    initiallyVisible = false,
    animateIn,
    afterAnimatedIn,
    animateOut,
    delay = 0,
    animatePreScroll = true,
    afterAnimatedOut,
    scrollableParentSelector,
    animateOnce = false,
    children
  }) => {
    const [classes, setClasses] = (0, _react.useState)(animatedClass);
    const [style, setStyle] = (0, _react.useState)({
      animationDuration: `${duration}s`,
      opacity: initiallyVisible ? 1 : 0
    });
    const node = (0, _react.useRef)(null);
    const animating = (0, _react.useRef)(false);
    const visibilityRef = (0, _react.useRef)({
      onScreen: false,
      inViewport: false
    });
    const delayedAnimationTORef = (0, _react.useRef)(undefined);
    const callbackTORef = (0, _react.useRef)(undefined);
    const scrollableParentRef = (0, _react.useRef)(scrollableParentRefInitialValue);
    const getElementTop = (0, _react.useCallback)(elm => {
      let yPos = 0;

      while (elm && elm.offsetTop !== undefined && elm.clientTop !== undefined) {
        yPos += elm.offsetTop + elm.clientTop;
        elm = elm.offsetParent;
      }

      return yPos;
    }, []);
    const getScrollPos = (0, _react.useCallback)(() => {
      if (scrollableParentRef.current.pageYOffset !== undefined) {
        return scrollableParentRef.current.pageYOffset;
      }

      return scrollableParentRef.current.scrollTop;
    }, [scrollableParentRef]);
    const getScrollableParentHeight = (0, _react.useCallback)(() => {
      if (scrollableParentRef.current.innerHeight !== undefined) {
        return scrollableParentRef.current.innerHeight;
      }

      return scrollableParentRef.current.clientHeight;
    }, [scrollableParentRef]);
    const getViewportTop = (0, _react.useCallback)(() => {
      return getScrollPos() + offset;
    }, [offset, getScrollPos]);
    const getViewportBottom = (0, _react.useCallback)(() => {
      return getScrollPos() + getScrollableParentHeight() - offset;
    }, [offset, getScrollPos, getScrollableParentHeight]);
    const isInViewport = (0, _react.useCallback)(y => {
      return y >= getViewportTop() && y <= getViewportBottom();
    }, [getViewportTop, getViewportBottom]);
    const isAboveViewport = (0, _react.useCallback)(y => {
      return y < getViewportTop();
    }, [getViewportTop]);
    const isBelowViewport = (0, _react.useCallback)(y => {
      return y > getViewportBottom();
    }, [getViewportBottom]);
    const inViewport = (0, _react.useCallback)((elementTop, elementBottom) => {
      return isInViewport(elementTop) || isInViewport(elementBottom) || isAboveViewport(elementTop) && isBelowViewport(elementBottom);
    }, [isInViewport, isAboveViewport, isBelowViewport]);
    const isAboveScreen = (0, _react.useCallback)(y => {
      return y < getScrollPos();
    }, [getScrollPos]);
    const isBelowScreen = (0, _react.useCallback)(y => {
      return y > getScrollPos() + getScrollableParentHeight();
    }, [getScrollPos, getScrollableParentHeight]);
    const onScreen = (0, _react.useCallback)((elementTop, elementBottom) => {
      return !isAboveScreen(elementBottom) && !isBelowScreen(elementTop);
    }, [isAboveScreen, isBelowScreen]);
    const getVisibility = (0, _react.useCallback)(() => {
      const elementTop = getElementTop(node.current) - getElementTop(scrollableParentRef.current);
      const elementBottom = elementTop + node.current.clientHeight;
      return {
        inViewport: inViewport(elementTop, elementBottom),
        onScreen: onScreen(elementTop, elementBottom)
      };
    }, [getElementTop, node, inViewport, onScreen, scrollableParentRef]);
    const visibilityHasChanged = (0, _react.useCallback)((previousVis, currentVis) => {
      return previousVis.inViewport !== currentVis.inViewport || previousVis.onScreen !== currentVis.onScreen;
    }, []);
    const animate = (0, _react.useCallback)((animation, callback) => {
      delayedAnimationTORef.current = setTimeout(() => {
        animating.current = true;
        setClasses(`${animatedClass} ${animation}`);
        setStyle({
          animationDuration: `${duration}s`
        });
        callbackTORef.current = setTimeout(callback, duration * 1000);
      }, delay);
    }, [animating, delay, duration]);
    const animateInTrigger = (0, _react.useCallback)(callback => {
      animate(animateIn, () => {
        if (!animateOnce) {
          setStyle({
            animationDuration: `${duration}s`,
            opacity: 1
          });
          animating.current = false;
        }

        const vis = getVisibility();

        if (callback) {
          callback(vis);
        }
      });
    }, [animating, animateIn, animateOnce, duration, animate, getVisibility]);
    const animateOutTrigger = (0, _react.useCallback)(callback => {
      animate(animateOut, () => {
        setClasses(animatedClass);
        setStyle({
          animationDuration: `${duration}s`,
          opacity: 0
        });
        const vis = getVisibility();

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
    const handleScroll = (0, _react.useCallback)(() => {
      if (!animating.current) {
        const {
          current: visibility
        } = visibilityRef;
        const currentVis = getVisibility();

        if (visibilityHasChanged(visibility, currentVis)) {
          clearTimeout(delayedAnimationTORef.current);

          if (!currentVis.onScreen) {
            setClasses(animatedClass);
            setStyle({
              animationDuration: `${duration}s`,
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
    const listener = (0, _react.useMemo)(() => (0, _lodash2.default)(() => {
      handleScroll();
    }, 50), [handleScroll]);
    (0, _react.useEffect)(() => {
      if (!serverSide) {
        const parentSelector = scrollableParentSelector;
        scrollableParentRef.current = parentSelector ? document.querySelector(parentSelector) : window;

        if (scrollableParentRef.current && scrollableParentRef.current.addEventListener) {
          scrollableParentRef.current.addEventListener('scroll', listener);
        } else {
          console.warn(`Cannot find element by locator: ${scrollableParentSelector}`);
        }

        if (animatePreScroll) {
          handleScroll();
        }

        return () => {
          clearTimeout(delayedAnimationTORef.current);
          clearTimeout(callbackTORef.current);

          if (window && window.removeEventListener) {
            window.removeEventListener('scroll', listener);
          }
        };
      }
    }, [handleScroll, scrollableParentSelector, scrollableParentRef, listener, animatePreScroll]);
    return /*#__PURE__*/_react2.default.createElement("div", {
      ref: node,
      className: classNameProps ? `${classNameProps} ${classes}` : classes,
      style: Object.assign({}, style, styleProps)
    }, children);
  };

  AnimationOnScroll.propTypes = {
    offset: _propTypes2.default.number,
    duration: _propTypes2.default.number,
    style: _propTypes2.default.any,
    className: _propTypes2.default.string,
    initiallyVisible: _propTypes2.default.bool,
    animateIn: _propTypes2.default.string,
    afterAnimatedIn: _propTypes2.default.any,
    animateOut: _propTypes2.default.string,
    delay: _propTypes2.default.number,
    animatePreScroll: _propTypes2.default.bool,
    afterAnimatedOut: _propTypes2.default.any,
    scrollableParentSelector: _propTypes2.default.string,
    animateOnce: _propTypes2.default.bool,
    children: _propTypes2.default.any
  };
});
//# sourceMappingURL=AnimationOnScroll.js.map