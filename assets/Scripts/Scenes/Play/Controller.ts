import { _decorator, Component, Node, input, EventTouch, Input, Prefab, view, Vec3, math, tween, random, director } from 'cc';
import { AudioController, ClipSound } from '../../Extention/AudioController';
import { Constants } from '../../Extention/Constants';
import { DataManager } from '../../Extention/DataManager';
import { NodeCustom } from '../../Extention/NodeCustom';
import { ObjectPool } from '../../Extention/ObjectPool';
import { View } from './View';
const { ccclass, property } = _decorator;

@ccclass('Controller')
export class Controller extends Component {
    @property(Prefab) ground: Prefab;
    @property(Node) parentGround: Node;
    @property(NodeCustom) groundCurr: NodeCustom
    @property(Node) cameraFollow: Node;
    @property(Node) background: Node;
    @property(View) view: View;
    @property(AudioController) audio: AudioController;

    private groundQueue: NodeCustom[] = [];
    private groundNext: NodeCustom;
    private width: number;
    private height: number;
    private groundExcess: NodeCustom;
    private score: number = 0;
    private isClose = false;



    onLoad(): void {
        ObjectPool.Instance.CreateListObject(Constants.ground, this.ground, 20, this.parentGround)
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        const screenSize = view.getVisibleSize()
        this.width = screenSize.width;
        this.height = screenSize.height;
    }
    start(): void {
        this.CreateGroundStart();
    }
    CreateGroundStart(): void {
        let i = random();
        let posX = this.groundCurr.GetSize().x / 2 + this.width / 2;
        if (i<0.5){
            posX = -this.groundCurr.GetSize().x / 2 - this.width / 2;
        }

        let posY = this.groundCurr.GetPositon().y + this.groundCurr.GetSize().y + 1;
        this.groundNext = ObjectPool.Instance.getObject(Constants.ground, this.parentGround)
        this.groundQueue.push(this.groundNext)
        this.groundNext.SetPositon(new Vec3(posX, posY, 0));
        this.groundNext.SetGravity(0);
        this.groundNext.SetIsMoving(false);
        this.groundNext.SetIsMoving(true);
        this.groundNext.SetSize(this.groundCurr.GetSize().x);
        this.groundNext.GetRb().enabled = true;
        this.groundNext.GetNode().active = true;

    }

    private StateGood(): void {
        this.groundNext.GetRb().enabled = false;
        let newSizeX = Math.min(500, this.groundNext.GetSize().x * 1.2)

        this.groundNext.increaseSize(newSizeX)
        this.groundCurr = this.groundNext;
        this.CreateGroundStart();
        this.audio.PlaySound(ClipSound.good)

    }
    private StateNormal(): void {
        this.audio.PlaySound(ClipSound.narmal);
        this.groundNext.GetRb().enabled = false;
        this.groundNext.SetIsMoving(false);
        let newSizeX = this.groundNext.GetSize().x - Math.abs(this.groundCurr.GetPositon().x - this.groundNext.GetPositon().x)
        let posCurr = this.groundNext.GetPositon();
        let newPos = new Vec3(posCurr.x + (this.groundCurr.GetPositon().x - this.groundNext.GetPositon().x) / 2, posCurr.y, posCurr.z)
        this.groundNext.SetSize(newSizeX)
        this.groundNext.SetPositon(newPos);
        // create groundExcess
        this.groundExcess = ObjectPool.Instance.getObject(Constants.ground, this.parentGround);
        let size_Excess = Math.abs(this.groundCurr.GetSize().x - this.groundNext.GetSize().x);
        let pos_Excess = null;
        if (this.groundNext.GetPositon().x < this.groundCurr.GetPositon().x) {
            pos_Excess = new Vec3(this.groundNext.GetPositon().x - this.groundNext.GetSize().x / 2 - size_Excess / 2, this.groundNext.GetPositon().y, 0)
        }
        else {
            pos_Excess = new Vec3(this.groundNext.GetPositon().x + this.groundNext.GetSize().x / 2 + size_Excess / 2, this.groundNext.GetPositon().y, 0)
        }
        this.groundQueue.push(pos_Excess);

        this.groundExcess.SetSize(size_Excess)
        this.groundExcess.SetPositon(pos_Excess);
        this.groundExcess.GetRb().enabled = true
        this.groundExcess.SetIsMoving(false);
        this.groundExcess.GetNode().active = true;
        this.groundExcess.SetGravity(1);
        this.groundCurr = this.groundNext;
        this.CreateGroundStart();
    }



    private StateBad(): void {
        
        this.isClose = true;
        this.groundNext.SetIsMoving(false);
        this.groundNext.SetGravity(1.5);
        DataManager.getInstance().SetData(Constants.score,this.score);
        this.scheduleOnce(()=> director.loadScene(Constants.mainScene),2)
    }
    onTouchStart(event: EventTouch) {
        
        if (this.isClose) {
            return;
        }
        let distance = Math.abs(this.groundCurr.GetPositon().x - this.groundNext.GetPositon().x)
        if (distance > this.groundCurr.GetSize().x) {
            this.audio.PlaySound(ClipSound.over);
            this.StateBad();
        }
        else if (distance < this.groundCurr.GetSize().x && distance > 1) {
            this.StateNormal();
            this.view.SetScore(this.score += 1)
        }
        else {
            this.StateGood();
            this.view.SetScore(this.score += 2)
        }
        this.CameraFollow();
        this.BackgroundFollow();

    }
    CameraFollow(): void {
        let posX = this.width / 2;
        let posY = Math.max(this.height / 2, this.groundCurr.GetPositon().y + this.height / 2);
        tween(this.cameraFollow)
            .to(0.3, { position: new Vec3(posX, posY, 0) })
            .start();

    }
    BackgroundFollow(): void {
        let posX = this.cameraFollow.position.x - this.width / 2
        let posY = this.cameraFollow.position.y - this.height / 2
        tween(this.background)
            .to(0.3, { position: new Vec3(posX, posY, 0) })
            .start();
    }

}


