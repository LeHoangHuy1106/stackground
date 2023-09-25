System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RigidBody2D, UITransform, Vec2, Size, view, Rect, BoxCollider2D, Extention, _dec, _class, _crd, ccclass, property, NodeCustom;

  function _reportPossibleCrUseOfExtention(extras) {
    _reporterNs.report("Extention", "./Extention", _context.meta, extras);
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
      RigidBody2D = _cc.RigidBody2D;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Size = _cc.Size;
      view = _cc.view;
      Rect = _cc.Rect;
      BoxCollider2D = _cc.BoxCollider2D;
    }, function (_unresolved_2) {
      Extention = _unresolved_2.Extention;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eee9f3DlI9Osp9qMdu8LrJb", "NodeCustom", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RigidBody2D', 'Collider2D', 'UITransform', 'Vec2', 'Size', 'tween', 'Vec3', 'Tween', 'view', 'Rect', 'BoxCollider2D', 'v2', 'IPhysics2DContact', 'Contact2DType', 'find', 'random']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodeCustom", NodeCustom = (_dec = ccclass('NodeCustom'), _dec(_class = class NodeCustom extends Component {
        constructor(...args) {
          super(...args);
          this.uiTransform = void 0;
          this.rb = void 0;
          this.col = void 0;
          this.width = void 0;
          this.height = void 0;
          this.direction = 1;
          this.speed = 20;
          this.isMoving = false;
          this.camera = void 0;
        }

        onEnable() {
          this.speed = (_crd && Extention === void 0 ? (_reportPossibleCrUseOfExtention({
            error: Error()
          }), Extention) : Extention).RandomFloatInRange(15, 30);
        }

        onLoad() {
          const screenSize = view.getVisibleSize();
          this.width = screenSize.width;
          this.height = screenSize.height;
          this.uiTransform = this.getComponent(UITransform);
          this.rb = this.getComponent(RigidBody2D);
          this.col = this.getComponent(BoxCollider2D);
        }

        GetNode() {
          return this.node;
        }

        GetSize() {
          return new Vec2(this.uiTransform.contentSize.clone().width, this.uiTransform.contentSize.clone().height);
        }

        increaseSize(size) {
          this.SetSize(size);
        }

        SetSize(sizeX) {
          this.uiTransform.setContentSize(new Size(sizeX, this.GetSize().y));
          const newColliderSize = new Rect(0, 0, sizeX, this.GetSize().y); // Gán kích thước mới cho collider2D

          this.col.size = newColliderSize;
        }

        Active(isBool) {
          this.node.active = isBool;
        }

        SetPositon(pos) {
          this.node.position = pos;
        }

        GetPositon() {
          return this.node.position;
        }

        GetRb() {
          return this.rb;
        }

        SetIsMoving(isBool) {
          this.isMoving = isBool;

          if (!isBool) {
            this.rb.linearVelocity = new Vec2(0, 0);
          }
        }

        SetGravity(n) {
          this.rb.gravityScale = n;
        }

        HorizontalScrolling(deltaTime) {
          const newPositionX = this.node.position.x + this.speed * this.direction * deltaTime;

          if (newPositionX < -this.width / 2 - this.uiTransform.contentSize.width / 2 || newPositionX > this.width / 2 + this.uiTransform.contentSize.width / 2) {
            this.direction *= -1;
          }

          this.rb.linearVelocity = new Vec2(this.speed * this.direction, 0);
        }

        update(deltaTime) {
          if (this.rb && this.isMoving) {
            this.HorizontalScrolling(deltaTime);
          }

          this.node.angle = 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75e4666cf7a0e114d9ed3fae6782d98fd4868581.js.map