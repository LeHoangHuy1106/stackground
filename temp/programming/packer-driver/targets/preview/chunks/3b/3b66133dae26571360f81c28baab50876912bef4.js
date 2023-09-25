System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SelectorNode, SequenceNode, ActionNode, ConditionNode, _dec, _class, _crd, ccclass, property, BehaviorTree, NodeState;

  _export({
    SelectorNode: void 0,
    SequenceNode: void 0,
    ActionNode: void 0,
    ConditionNode: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57d041lozZBBKt78tdb/I1r", "BehaviorTree", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BehaviorTree", BehaviorTree = (_dec = ccclass('BehaviorTree'), _dec(_class = class BehaviorTree {
        constructor() {
          this.rootNode = void 0;
          this.isActive = false;
        }

        SetRoot(nodeState) {
          this.rootNode = nodeState;
        }

        Action() {
          if (this.isActive) if (this.rootNode != null) this.rootNode.Execute();
        }

        Stop() {
          this.isActive = false;
        }

        Continue() {
          this.isActive = false;
        }

        Destroy() {
          this.rootNode = null;
        }

      }) || _class));

      _export("NodeState", NodeState = /*#__PURE__*/function (NodeState) {
        NodeState[NodeState["Success"] = 0] = "Success";
        NodeState[NodeState["Failure"] = 1] = "Failure";
        NodeState[NodeState["Running"] = 2] = "Running";
        return NodeState;
      }({}));

      _export("SelectorNode", SelectorNode = class SelectorNode {
        constructor(children) {
          this.childNodes = void 0;
          this.childNodes = children;
        }

        Execute() {
          for (var childNode of this.childNodes) {
            var result = childNode.Execute();

            if (result === NodeState.Success) {
              return NodeState.Success;
            } else if (result === NodeState.Running) {
              return NodeState.Running;
            }
          }

          return NodeState.Failure;
        }

      });

      _export("SequenceNode", SequenceNode = class SequenceNode {
        constructor(children) {
          this.childNodes = void 0;
          this.childNodes = children;
        }

        Execute() {
          for (var childNode of this.childNodes) {
            var result = childNode.Execute();

            if (result === NodeState.Failure) {
              return NodeState.Failure;
            } else if (result === NodeState.Running) {
              return NodeState.Running;
            }
          }

          return NodeState.Success;
        }

      });

      _export("ActionNode", ActionNode = class ActionNode {
        constructor(action) {
          this.action = void 0;
          this.action = action;
        }

        Execute() {
          return this.action();
        }

      });

      _export("ConditionNode", ConditionNode = class ConditionNode {
        constructor(condition) {
          this.condition = void 0;
          this.condition = condition;
        }

        Execute() {
          if (this.condition()) {
            return NodeState.Success;
          }

          return NodeState.Failure;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b66133dae26571360f81c28baab50876912bef4.js.map