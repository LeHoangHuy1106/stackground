System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DataManager, _crd;

  _export("DataManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea5d4M3zfVHi4sq+ZIXPHBF", "DataManager", undefined);

      _export("DataManager", DataManager = class DataManager {
        constructor() {
          this.data = {};
        }

        static getInstance() {
          if (this.instance === null) {
            this.instance = new DataManager();
          }

          return this.instance;
        }

        SetData(key, value) {
          this.data[key] = value;
        }

        GetData(key, defaultValue = null) {
          if (key in this.data) {
            return this.data[key];
          }

          this.SetData(key, defaultValue);
          return defaultValue;
        }

      });

      DataManager.instance = null;
      DataManager.DataUser = {
        highScore: 0
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=606916592f7b4cbf4c7bce74ba9d7f3b587bcea3.js.map