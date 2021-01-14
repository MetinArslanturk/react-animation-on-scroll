(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./AnimationOnScroll"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./AnimationOnScroll"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.AnimationOnScroll);
    global.undefined = mod.exports;
  }
})(this, function (exports, _AnimationOnScroll) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_AnimationOnScroll).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _AnimationOnScroll[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map