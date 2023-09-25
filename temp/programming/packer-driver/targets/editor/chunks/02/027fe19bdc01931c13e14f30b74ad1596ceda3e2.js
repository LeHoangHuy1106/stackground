System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, AudioClip, Toggle, Constants, DataManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, ClipSound, AudioController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "./DataManager", _context.meta, extras);
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
      AudioSource = _cc.AudioSource;
      AudioClip = _cc.AudioClip;
      Toggle = _cc.Toggle;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      DataManager = _unresolved_3.DataManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9353aEM1j1EjpenCVuEAbbC", "AudioController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'AudioClip', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ClipSound", ClipSound = /*#__PURE__*/function (ClipSound) {
        ClipSound[ClipSound["button"] = 0] = "button";
        ClipSound[ClipSound["good"] = 1] = "good";
        ClipSound[ClipSound["narmal"] = 2] = "narmal";
        ClipSound[ClipSound["over"] = 3] = "over";
        return ClipSound;
      }({}));

      _export("AudioController", AudioController = (_dec = ccclass('AudioController'), _dec2 = property(AudioSource), _dec3 = property([AudioClip]), _dec4 = property(Toggle), _dec5 = property(AudioSource), _dec6 = property(AudioClip), _dec7 = property(Toggle), _dec(_class = (_class2 = class AudioController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "source", _descriptor, this);

          _initializerDefineProperty(this, "clips", _descriptor2, this);

          _initializerDefineProperty(this, "bntSound", _descriptor3, this);

          _initializerDefineProperty(this, "sourceMusic", _descriptor4, this);

          _initializerDefineProperty(this, "clipMusic", _descriptor5, this);

          _initializerDefineProperty(this, "btnMusic", _descriptor6, this);
        }

        onLoad() {
          this.Setup();

          if (this.bntSound) {
            this.bntSound.node.on(Toggle.EventType.TOGGLE, this.SoundEvent, this);
          }

          if (this.btnMusic) {
            this.btnMusic.node.on(Toggle.EventType.TOGGLE, this.MusicEvent, this);
          }
        }

        SoundEvent() {
          if (!this.bntSound.isChecked) {
            this.source.volume = 0;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).getInstance().SetData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dataSound, false);
          } else {
            this.source.volume = 1;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).getInstance().SetData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dataSound, true);
          }
        }

        MusicEvent() {
          if (!this.btnMusic.isChecked) {
            this.sourceMusic.volume = 0;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).getInstance().SetData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dataMusic, false);
          } else {
            this.sourceMusic.volume = 1;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).getInstance().SetData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).dataMusic, true);
          }
        }

        Setup() {
          let isSound = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).getInstance().GetData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dataSound, true);

          if (this.bntSound) {
            this.bntSound.isChecked = isSound;
          }

          if (isSound) {
            this.source.volume = 1;
          } else {
            this.source.volume = 0;
          }

          let isMusic = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).getInstance().GetData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).dataMusic, true);

          if (this.btnMusic) {
            this.btnMusic.isChecked = isMusic;
          }

          if (isMusic) {
            this.sourceMusic.volume = 1;
          } else {
            this.sourceMusic.volume = 0;
          }

          this.PlayMusic();
        }

        PlaySound(sound) {
          switch (sound) {
            case ClipSound.button:
              this.source.clip = this.clips[0];
              this.source.play();
              break;

            case ClipSound.good:
              this.source.clip = this.clips[1];
              this.source.play();
              break;

            case ClipSound.narmal:
              this.source.clip = this.clips[2];
              this.source.play();
              break;

            case ClipSound.over:
              this.source.clip = this.clips[3];
              this.source.play();
              break;

            default:
              break;
          }
        }

        Stop() {
          this.source.stop();
        }

        PlayMusic() {
          this.sourceMusic.clip = this.clipMusic;
          this.source.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "source", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clips", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bntSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sourceMusic", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clipMusic", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnMusic", [_dec7], {
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
//# sourceMappingURL=027fe19bdc01931c13e14f30b74ad1596ceda3e2.js.map