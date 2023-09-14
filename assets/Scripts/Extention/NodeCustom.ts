import { _decorator, Component, Node, RigidBody2D, Collider2D, UITransform, Vec2, Size, tween, Vec3, Tween, view, Rect, BoxCollider2D, v2, IPhysics2DContact, Contact2DType, find, random } from 'cc';
import { Extention } from './Extention';
const { ccclass, property } = _decorator;

@ccclass('NodeCustom')
export class NodeCustom extends Component {

    private uiTransform: UITransform;
    private rb: RigidBody2D;
    private col: BoxCollider2D;
    private width: number;
    private height: number;
    private direction: number = 1;
    private speed: number = 20;
    private isMoving = false;
    private camera: Node;

    onEnable():void{
        this.speed = Extention.RandomFloatInRange(15,30)
        
    }
    onLoad(): void {
        const screenSize = view.getVisibleSize()
        this.width = screenSize.width;
        this.height = screenSize.height;
        this.uiTransform = this.getComponent(UITransform);
        this.rb = this.getComponent(RigidBody2D);
        this.col = this.getComponent(BoxCollider2D);

    }
    public GetNode(): Node {
        return this.node;
    }
    public GetSize(): Vec2 {
        return new Vec2(this.uiTransform.contentSize.clone().width, this.uiTransform.contentSize.clone().height);
    }
    public increaseSize(size: number) {
        this.SetSize(size);

    }
    public SetSize(sizeX: number): void {
        this.uiTransform.setContentSize(new Size(sizeX, this.GetSize().y))
        const newColliderSize = new Rect(0, 0, sizeX, this.GetSize().y);

        // Gán kích thước mới cho collider2D
        this.col.size = newColliderSize;


    }
    public Active(isBool: boolean) {
        this.node.active = isBool;
    }
    public SetPositon(pos: Vec3) {
        this.node.position = pos;
    }
    public GetPositon(): Vec3 {
        return this.node.position;
    }
    public GetRb(): RigidBody2D {
        return this.rb;
    }
    public SetIsMoving(isBool: boolean) {
        this.isMoving = isBool;
        if (!isBool) {
            this.rb.linearVelocity = new Vec2(0, 0);
        }
    }
    public SetGravity(n: number) {
        this.rb.gravityScale = n;
    }

    private HorizontalScrolling(deltaTime: number): void {
        
        const newPositionX = this.node.position.x + this.speed * this.direction * deltaTime;
        if (newPositionX < - this.width / 2 - this.uiTransform.contentSize.width / 2 || newPositionX > this.width / 2 + this.uiTransform.contentSize.width / 2) {
            this.direction *= -1;
        }
        
        this.rb.linearVelocity = new Vec2(this.speed * this.direction, 0);
    }
    update(deltaTime: number) {
        if (this.rb && this.isMoving) {
            this.HorizontalScrolling(deltaTime)
        }
        this.node.angle =0;
    }

    

}


