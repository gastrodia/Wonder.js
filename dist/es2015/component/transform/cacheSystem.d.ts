import { Matrix4 } from "../../math/Matrix4";
import { Vector3 } from "../../math/Vector3";
import { Matrix3 } from "../../math/Matrix3";
export declare const clearCache: any;
export declare const clearCacheMap: (ThreeDTransformData: any) => void;
export declare const getLocalToWorldMatrixCache: (uid: number, ThreeTransformData: any) => any;
export declare const setLocalToWorldMatrixCache: (uid: number, mat: Matrix4, ThreeTransformData: any) => void;
export declare const getPositionCache: (uid: number, ThreeTransformData: any) => any;
export declare const setPositionCache: (uid: number, pos: Vector3, ThreeTransformData: any) => void;
export declare const getLocalPositionCache: (uid: number, ThreeTransformData: any) => any;
export declare const setLocalPositionCache: (uid: number, pos: Vector3, ThreeTransformData: any) => void;
export declare const getNormalMatrixCache: (uid: number, ThreeTransformData: any) => any;
export declare const setNormalMatrixCache: (uid: number, mat: Matrix3, ThreeTransformData: any) => void;
