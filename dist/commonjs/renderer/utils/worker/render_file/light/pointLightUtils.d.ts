import { Color } from "../../../../../structure/Color";
export declare const getColor: (index: number, PointLightDataFromSystem: any) => Color;
export declare const getColorArr3: (index: number, PointLightDataFromSystem: any) => number[];
export declare const getIntensity: (index: number, PointLightDataFromSystem: any) => number;
export declare const getConstant: (index: number, PointLightDataFromSystem: any) => number;
export declare const getLinear: (index: number, PointLightDataFromSystem: any) => number;
export declare const getQuadratic: (index: number, PointLightDataFromSystem: any) => number;
export declare const getRange: (index: number, PointLightDataFromSystem: any) => number;
export declare const getColorDataSize: () => number;
export declare const getIntensityDataSize: () => number;
export declare const getConstantDataSize: () => number;
export declare const getLinearDataSize: () => number;
export declare const getQuadraticDataSize: () => number;
export declare const getRangeDataSize: () => number;
export declare const createTypeArrays: (buffer: any, count: number, PointLightDataFromSystem: any) => void;
export declare const isPositionDirty: (index: number, PointLightDataFromSystem: any) => boolean;
export declare const isColorDirty: (index: number, PointLightDataFromSystem: any) => boolean;
export declare const isIntensityDirty: (index: number, PointLightDataFromSystem: any) => boolean;
export declare const isAttenuationDirty: (index: number, PointLightDataFromSystem: any) => boolean;
export declare const cleanPositionDirty: (index: number, PointLightDataFromSystem: any) => void;
export declare const cleanColorDirty: (index: number, PointLightDataFromSystem: any) => void;
export declare const cleanIntensityDirty: (index: number, PointLightDataFromSystem: any) => void;
export declare const cleanAttenuationDirty: (index: number, PointLightDataFromSystem: any) => void;
