(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.components);
    global.undefined = mod.exports;
  }
})(this, function (exports, _components) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_components).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _components[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map