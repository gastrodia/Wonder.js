module wd {
    export class QuadCommand {
        public static create():QuadCommand {
            var obj = new this();

            return obj;
        }

        get program(){
            return this.material.program;
        }

        public buffers:BufferContainer = null;
        public mMatrix:Matrix4 = null;
        public vMatrix:Matrix4 = null;
        public pMatrix:Matrix4 = null;
        public drawMode:DrawMode = DrawMode.TRIANGLES;
        public z:number = null;
        public material:Material = null;
        public animation:Animation = null;

        public execute() {
            this.material.updateTexture();
            this.material.updateShader(this);

            this._draw();
        }

        public init() {
        }

        private _draw() {
            var totalNum = 0,
                startOffset = 0,
                vertexBuffer = null,
                gl = DeviceManager.getInstance().gl;

            this._setEffects();

            if (this.buffers.hasChild(BufferDataType.INDICE)) {
                let indexBuffer:ElementBuffer = <ElementBuffer>this.buffers.getChild(BufferDataType.INDICE);

                totalNum = indexBuffer.count;

                gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer.buffer);
                gl.drawElements(gl[this.drawMode], totalNum, indexBuffer.type, indexBuffer.typeSize * startOffset);
            }
            else {
                vertexBuffer = this.buffers.getChild(BufferDataType.VERTICE);
                totalNum = vertexBuffer.count;
                gl.drawArrays(gl[this.drawMode], startOffset, totalNum);
            }
        }

        private _setEffects(){
            var deviceManager = DeviceManager.getInstance(),
                material = this.material;

            deviceManager.setColorWrite(material.redWrite, material.greenWrite, material.blueWrite, material.alphaWrite);
            deviceManager.polygonOffsetMode = material.polygonOffsetMode;

            deviceManager.side = this._getSide();

            deviceManager.blend = material.blend;
            if(material.blendFuncSeparate && material.blendEquationSeparate){
                deviceManager.setBlendFuncSeparate(material.blendFuncSeparate);
                deviceManager.setBlendEquationSeparate(material.blendEquationSeparate);
            }
            else{
                wdCb.Log.error(!material.blendSrc || !material.blendDst || !material.blendEquation, wdCb.Log.info.FUNC_MUST("material.blendSrc || material.blendDst || material.blendEquation", "be set"));

                deviceManager.setBlendFunc(material.blendSrc, material.blendDst);
                deviceManager.setBlendEquation(material.blendEquation);
            }
        }

        private _getSide(){
            var scene:SceneDispatcher = Director.getInstance().scene;

            return scene.side ? scene.side : this.material.side;
        }
    }
}
