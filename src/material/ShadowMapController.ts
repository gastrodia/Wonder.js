module wd{
    export class ShadowMapController extends MapController{
        public static create(material:Material) {
            var obj = new this(material);

            return obj;
        }

        private _twoDShadowMapList:wdCb.Collection<TwoDShadowMapTexture> = wdCb.Collection.create<TwoDShadowMapTexture>();

        public addTwoDShadowMap(shadowMap:TwoDShadowMapTexture){
            this.setMapOption(shadowMap, {
                samplerData: this._twoDShadowMapList.getCount()
            });

            this._twoDShadowMapList.addChild(shadowMap);
        }

        public getTwoDShadowMapList(){
            return this._twoDShadowMapList;
        }

        public hasTwoDShadowMap(shadowMap:TwoDShadowMapTexture){
            return this.hasMap(this._twoDShadowMapList, shadowMap);
        }

        public getAllMaps(){
            return this._twoDShadowMapList.toArray();
        }
    }
}

