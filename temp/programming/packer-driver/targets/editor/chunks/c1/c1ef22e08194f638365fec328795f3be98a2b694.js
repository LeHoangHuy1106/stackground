System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, Continuous;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22fe4AhyGNOHL7qTQiecyNw", "Continuous", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Continuous", Continuous = (_dec = ccclass('Continuous'), _dec(_class = class Continuous extends Component {
        constructor(...args) {
          super(...args);
          this.totalElapsedTime = 0;
          this.funcStart = void 0;
          this.funcEnd = void 0;
          this.time = void 0;
        }

        Call(actionStart, actionEnd, time) {
          this.funcStart = actionStart;
          this.funcEnd = actionEnd;
          this.time = time;
          this.schedule(this.handle, 0);
        }

        handle(dt) {
          this.totalElapsedTime += dt;

          if (this.totalElapsedTime < this.time) {
            this.funcStart();
          } else {
            this.totalElapsedTime = 0;

            if (this.funcEnd) {
              this.funcEnd();
            }

            this.unschedule(this.handle);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1ef22e08194f638365fec328795f3be98a2b694.js.map