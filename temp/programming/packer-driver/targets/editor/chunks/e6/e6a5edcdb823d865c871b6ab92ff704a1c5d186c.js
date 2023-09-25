System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, input, Input, Prefab, view, Vec3, tween, random, director, AudioController, ClipSound, Constants, DataManager, NodeCustom, ObjectPool, View, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, Controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioController(extras) {
    _reporterNs.report("AudioController", "../../Extention/AudioController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClipSound(extras) {
    _reporterNs.report("ClipSound", "../../Extention/AudioController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Extention/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Extention/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeCustom(extras) {
    _reporterNs.report("NodeCustom", "../../Extention/NodeCustom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "../../Extention/ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfView(extras) {
    _reporterNs.report("View", "./View", _context.meta, extras);
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
      Node = _cc.Node;
      input = _cc.input;
      Input = _cc.Input;
      Prefab = _cc.Prefab;
      view = _cc.view;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      random = _cc.random;
      director = _cc.director;
    }, function (_unresolved_2) {
      AudioController = _unresolved_2.AudioController;
      ClipSound = _unresolved_2.ClipSound;
    }, function (_unresolved_3) {
      Constants = _unresolved_3.Constants;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }, function (_unresolved_5) {
      NodeCustom = _unresolved_5.NodeCustom;
    }, function (_unresolved_6) {
      ObjectPool = _unresolved_6.ObjectPool;
    }, function (_unresolved_7) {
      View = _unresolved_7.View;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fd01eiTbtFm7Ux+507cWT1", "Controller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'input', 'EventTouch', 'Input', 'Prefab', 'view', 'Vec3', 'math', 'tween', 'random', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Controller", Controller = (_dec = ccclass('Controller'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(_crd && NodeCustom === void 0 ? (_reportPossibleCrUseOfNodeCustom({
        error: Error()
      }), NodeCustom) : NodeCustom), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(_crd && View === void 0 ? (_reportPossibleCrUseOfView({
        error: Error()
      }), View) : View), _dec8 = property(_crd && AudioController === void 0 ? (_reportPossibleCrUseOfAudioController({
        error: Error()
      }), AudioController) : AudioController), _dec(_class = (_class2 = class Controller extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ground", _descriptor, this);

          _initializerDefineProperty(this, "parentGround", _descriptor2, this);

          _initializerDefineProperty(this, "groundCurr", _descriptor3, this);

          _initializerDefineProperty(this, "cameraFollow", _descriptor4, this);

          _initializerDefineProperty(this, "background", _descriptor5, this);

          _initializerDefineProperty(this, "view", _descriptor6, this);

          _initializerDefineProperty(this, "audio", _descriptor7, this);

          this.groundQueue = [];
          this.groundNext = void 0;
          this.width = void 0;
          this.height = void 0;
          this.groundExcess = void 0;
          this.score = 0;
          this.isClose = false;
        }

        onLoad() {
          (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
            error: Error()
          }), ObjectPool) : ObjectPool).Instance.CreateListObject((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ground, this.ground, 20, this.parentGround);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          const screenSize = view.getVisibleSize();
          this.width = screenSize.width;
          this.height = screenSize.height;
        }

        start() {
          this.CreateGroundStart();
        }

        CreateGroundStart() {
          let i = random();
          let posX = this.groundCurr.GetSize().x / 2 + this.width / 2;

          if (i < 0.5) {
            posX = -this.groundCurr.GetSize().x / 2 - this.width / 2;
          }

          let posY = this.groundCurr.GetPositon().y + this.groundCurr.GetSize().y + 1;
          this.groundNext = (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
            error: Error()
          }), ObjectPool) : ObjectPool).Instance.getObject((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ground, this.parentGround);
          this.groundQueue.push(this.groundNext);
          this.groundNext.SetPositon(new Vec3(posX, posY, 0));
          this.groundNext.SetGravity(0);
          this.groundNext.SetIsMoving(false);
          this.groundNext.SetIsMoving(true);
          this.groundNext.SetSize(this.groundCurr.GetSize().x);
          this.groundNext.GetRb().enabled = true;
          this.groundNext.GetNode().active = true;
        }

        StateGood() {
          this.groundNext.GetRb().enabled = false;
          let newSizeX = Math.min(500, this.groundNext.GetSize().x * 1.2);
          this.groundNext.increaseSize(newSizeX);
          this.groundCurr = this.groundNext;
          this.CreateGroundStart();
          this.audio.PlaySound((_crd && ClipSound === void 0 ? (_reportPossibleCrUseOfClipSound({
            error: Error()
          }), ClipSound) : ClipSound).good);
        }

        StateNormal() {
          this.audio.PlaySound((_crd && ClipSound === void 0 ? (_reportPossibleCrUseOfClipSound({
            error: Error()
          }), ClipSound) : ClipSound).narmal);
          this.groundNext.GetRb().enabled = false;
          this.groundNext.SetIsMoving(false);
          let newSizeX = this.groundNext.GetSize().x - Math.abs(this.groundCurr.GetPositon().x - this.groundNext.GetPositon().x);
          let posCurr = this.groundNext.GetPositon();
          let newPos = new Vec3(posCurr.x + (this.groundCurr.GetPositon().x - this.groundNext.GetPositon().x) / 2, posCurr.y, posCurr.z);
          this.groundNext.SetSize(newSizeX);
          this.groundNext.SetPositon(newPos); // create groundExcess

          this.groundExcess = (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
            error: Error()
          }), ObjectPool) : ObjectPool).Instance.getObject((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).ground, this.parentGround);
          let size_Excess = Math.abs(this.groundCurr.GetSize().x - this.groundNext.GetSize().x);
          let pos_Excess = null;

          if (this.groundNext.GetPositon().x < this.groundCurr.GetPositon().x) {
            pos_Excess = new Vec3(this.groundNext.GetPositon().x - this.groundNext.GetSize().x / 2 - size_Excess / 2, this.groundNext.GetPositon().y, 0);
          } else {
            pos_Excess = new Vec3(this.groundNext.GetPositon().x + this.groundNext.GetSize().x / 2 + size_Excess / 2, this.groundNext.GetPositon().y, 0);
          }

          this.groundQueue.push(pos_Excess);
          this.groundExcess.SetSize(size_Excess);
          this.groundExcess.SetPositon(pos_Excess);
          this.groundExcess.GetRb().enabled = true;
          this.groundExcess.SetIsMoving(false);
          this.groundExcess.GetNode().active = true;
          this.groundExcess.SetGravity(1);
          this.groundCurr = this.groundNext;
          this.CreateGroundStart();
        }

        StateBad() {
          this.isClose = true;
          this.groundNext.SetIsMoving(false);
          this.groundNext.SetGravity(1.5);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).getInstance().SetData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).score, this.score);
          this.scheduleOnce(() => director.loadScene((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).mainScene), 2);
        }

        onTouchStart(event) {
          if (this.isClose) {
            return;
          }

          let distance = Math.abs(this.groundCurr.GetPositon().x - this.groundNext.GetPositon().x);

          if (distance > this.groundCurr.GetSize().x) {
            this.audio.PlaySound((_crd && ClipSound === void 0 ? (_reportPossibleCrUseOfClipSound({
              error: Error()
            }), ClipSound) : ClipSound).over);
            this.StateBad();
          } else if (distance < this.groundCurr.GetSize().x && distance > 1) {
            this.StateNormal();
            this.view.SetScore(this.score += 1);
          } else {
            this.StateGood();
            this.view.SetScore(this.score += 2);
          }

          this.CameraFollow();
          this.BackgroundFollow();
        }

        CameraFollow() {
          let posX = this.width / 2;
          let posY = Math.max(this.height / 2, this.groundCurr.GetPositon().y + this.height / 2);
          tween(this.cameraFollow).to(0.3, {
            position: new Vec3(posX, posY, 0)
          }).start();
        }

        BackgroundFollow() {
          let posX = this.cameraFollow.position.x - this.width / 2;
          let posY = this.cameraFollow.position.y - this.height / 2;
          tween(this.background).to(0.3, {
            position: new Vec3(posX, posY, 0)
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "parentGround", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groundCurr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraFollow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "audio", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6a5edcdb823d865c871b6ab92ff704a1c5d186c.js.map