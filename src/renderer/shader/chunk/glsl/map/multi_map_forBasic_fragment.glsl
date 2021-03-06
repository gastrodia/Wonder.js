@funcDefine
		vec4 getMapColor(){
            vec4 color0 = texture2D(u_sampler2D0, v_mapCoord);
            vec4 color1 = texture2D(u_sampler2D1, v_mapCoord);

            if(u_combineMode == 0){
                return mix(color0, color1, u_mixRatio);
            }
            else if(u_combineMode == 1){
                return color0 * color1;
            }
            else if(u_combineMode == 2){
                return color0 + color1;
            }
		}
@end

@body
    totalColor *= getMapColor();
@end

