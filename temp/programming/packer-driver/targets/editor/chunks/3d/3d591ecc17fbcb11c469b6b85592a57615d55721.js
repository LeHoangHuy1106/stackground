System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EventHandler, Node, UITransform, Vec2, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Joystick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f7d6Jh2lxEN7agHOI/IYqT", "Joystick", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'EventHandler', 'EventTouch', 'Node', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Joystick", Joystick = (_dec = ccclass('Joystick'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: [EventHandler]
      }), _dec(_class = (_class2 = class Joystick extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "arrowsNode", _descriptor, this);

          _initializerDefineProperty(this, "axisEvents", _descriptor2, this);

          this.size = void 0;
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          this.size = this.getComponent(UITransform).contentSize.width / 2.0;
        }

        onTouchStart(event) {
          this.onBegin(event.getLocation());
        }

        onTouchMove(event) {
          this.onBegin(event.getLocation());
        }

        onTouchEnd(event) {
          this.onEnd();
        }

        onTouchCancel(event) {
          this.onEnd();
        }

        onBegin(screenPosition) {
          let position = new Vec3();
          position = this.node.inverseTransformPoint(position, new Vec3(screenPosition.x, screenPosition.y, 0.0));
          const length = position.length();

          if (length > this.size) {
            position.x = position.x * this.size / length;
            position.y = position.y * this.size / length;
          }

          this.arrowsNode.setPosition(position);
          const axis = new Vec2(position.x / this.size, position.y / this.size);
          EventHandler.emitEvents(this.axisEvents, this, axis);
        }

        onEnd() {
          this.arrowsNode.setPosition(Vec3.ZERO);
          EventHandler.emitEvents(this.axisEvents, this, Vec2.ZERO);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "arrowsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "axisEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d591ecc17fbcb11c469b6b85592a57615d55721.js.map