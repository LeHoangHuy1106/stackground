System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, Extention;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49ff5XvVFhPVr73cTb+ZMtA", "Extention", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Extention", Extention = (_dec = ccclass('Extention'), _dec(_class = class Extention {
        static RandomFloatInRange(minValue, maxValue) {
          return minValue + Math.random() * (maxValue - minValue);
        }

        static CheckMobileDevice() {
          var userAgent = navigator.userAgent;
          return /Mobi|Android|iPhone|iPad|iPod|Windows Phone|KFAPWI|BlackBerry|PlayBook|BB10|RIM Tablet|Mobile|Touch|webOS|Opera Mini/i.test(userAgent);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a07913fb15be5e338e59f1efc0b8ac9309f47749.js.map