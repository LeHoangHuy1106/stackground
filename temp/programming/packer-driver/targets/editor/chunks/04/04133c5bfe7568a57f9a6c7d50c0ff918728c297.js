System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, director, NodeCustom, _dec, _class, _class2, _crd, ccclass, property, ObjectPool;

  function _reportPossibleCrUseOfNodeCustom(extras) {
    _reporterNs.report("NodeCustom", "./NodeCustom", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      director = _cc.director;
    }, function (_unresolved_2) {
      NodeCustom = _unresolved_2.NodeCustom;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "457cdIu0L5E+LiiBeCXX+Fl", "ObjectPool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'game', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ObjectPool", ObjectPool = (_dec = ccclass('ObjectPool'), _dec(_class = (_class2 = class ObjectPool extends Component {
        constructor(...args) {
          super(...args);
          this.index = 0;
          this.dictQueue = {};
        }

        static get Instance() {
          if (this.instance === null) {
            this.instance = new ObjectPool();
          }

          return this.instance;
        }

        onLoad() {
          if (ObjectPool.instance !== null && ObjectPool.instance !== this) {
            this.node.destroy();
            return;
          } else {
            ObjectPool.instance = this;
          }

          director.addPersistRootNode(this.node);
        }

        CreateListObject(name, prefab, n, parent) {
          const queueObject = [];

          for (let i = 0; i < n; i++) {
            const obj = instantiate(prefab);
            let objCustom = obj.addComponent(_crd && NodeCustom === void 0 ? (_reportPossibleCrUseOfNodeCustom({
              error: Error()
            }), NodeCustom) : NodeCustom);
            obj.setParent(parent);
            objCustom.GetNode().name = obj.name + "_" + this.index;
            objCustom.GetNode().active = false;
            this.index++;
            queueObject.push(objCustom);
          }

          this.dictQueue[name] = queueObject;
        }

        getObject(name, parent = null, isQuantityLimit = false) {
          let objCustom;
          const count = this.dictQueue[name].length;

          for (let i = 0; i < count; i++) {
            objCustom = this.dictQueue[name].shift();

            if (!objCustom.GetNode().active) {
              this.dictQueue[name].push(objCustom);
              return objCustom;
            }

            this.dictQueue[name].push(objCustom);
          }

          if (isQuantityLimit) {
            return null;
          }

          let obj = instantiate(this.dictQueue[name][0].GetNode());
          objCustom = obj.getComponent(_crd && NodeCustom === void 0 ? (_reportPossibleCrUseOfNodeCustom({
            error: Error()
          }), NodeCustom) : NodeCustom);

          if (parent != null) {
            objCustom.GetNode().setParent(parent);
          }

          objCustom.GetNode().active = false;
          this.dictQueue[name].push(objCustom);
          return objCustom;
        }

      }, _class2.instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=04133c5bfe7568a57f9a6c7d50c0ff918728c297.js.map