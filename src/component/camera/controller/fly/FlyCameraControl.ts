module wd {
    declare var document:any;

    export abstract class FlyCameraControl {
        constructor(cameraComponent:Camera) {
            this.cameraComponent = cameraComponent;
        }

        public moveSpeed:number = 1.2;
        public rotateSpeed:number = 100;

        protected cameraComponent:Camera = null;

        private _rotateX:number = 0;
        private _rotateY:number = 0;
        private _isRotate:boolean = false;
        private _mouseDragSubscription:wdFrp.IDisposable = null;
        private _keydownSubscription:wdFrp.IDisposable = null;
        private _gameObject:GameObject = null;

        public init(entityObject:GameObject) {
            var eulerAngles = entityObject.transform.eulerAngles;

            this._rotateX = eulerAngles.x;
            this._rotateY = eulerAngles.y;

            this._gameObject = entityObject;

            this._bindCanvasEvent();
        }

        public update(elapsedTime:number){
            if (!this._isRotate) {
                return;
            }

            this._isRotate = false;

            this._gameObject.transform.eulerAngles = Vector3.create(this._rotateX, this._rotateY, 0);
        }

        public dispose() {
            this._removeEvent();
        }

        protected abstract zoom(event:KeyboardEvent);

        private _move(event:KeyboardEvent) {
            var speed = this.moveSpeed,
                entityObject = this._gameObject,
                keyState = event.keyState;

            if (keyState["a"] || keyState["left"]) {
                entityObject.transform.translateLocal(Vector3.create(-speed, 0, 0));
            }
            else if(keyState["d"] || keyState["right"]) {
                entityObject.transform.translateLocal(Vector3.create(speed, 0, 0));
            }
            else if(keyState["w"] || keyState["up"]) {
                entityObject.transform.translateLocal(Vector3.create(0, 0, -speed));
            }
            else if(keyState["s"] || keyState["down"]) {
                entityObject.transform.translateLocal(Vector3.create(0, 0, speed));
            }
        }

        private _bindCanvasEvent() {
            var self = this,
                rotateSpeed = this.rotateSpeed,
                mousedrag = EventManager.fromEvent(Director.getInstance().scene, <any>EngineEvent.MOUSE_DRAG),
                keydown = EventManager.fromEvent(EventName.KEYDOWN),
                canvas = Director.getInstance().view;

            this._mouseDragSubscription = mousedrag
                .map((e:CustomEvent) => {
                    var movementDelta = e.userData.movementDelta,
                        dx = null,
                        dy = null,
                        factor = rotateSpeed / canvas.height;

                    dx = factor * movementDelta.x;
                    dy = factor * movementDelta.y;

                    self._isRotate = true;

                    return {
                        dx: dx,
                        dy: dy
                    };
                })
                .subscribe(function (pos) {
                    self._rotateY -= pos.dx;
                    self._rotateX -= pos.dy;
                });

            this._keydownSubscription = keydown.subscribe((e:KeyboardEvent) => {
                self._move(e);
                self.zoom(e);
            });
        }

        private _removeEvent() {
            this._mouseDragSubscription.dispose();
            this._keydownSubscription.dispose();
        }
    }
}
