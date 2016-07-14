module wd{
    export class CommonBitmapFontShaderLib extends EngineShaderLib{
        public static create() {
            var obj = new this();

            return obj;
        }

        public type:string = "common_bitmapFont";

        public sendShaderVariables(program: Program, cmd:QuadCommand, material:SdfFontMaterial){
        }

        public setShaderDefinition(cmd:QuadCommand, material:MirrorMaterial){
            super.setShaderDefinition(cmd, material);

            this.addUniformVariable(["u_bitmapSampler"]);
        }
    }
}

