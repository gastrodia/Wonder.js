import { UniformCacheMap, UniformShaderLocationMap } from "../../../../../type/dataType";
import { Vector3 } from "../../../../../../math/Vector3";
export declare const sendBuffer: (gl: WebGLRenderingContext, type: string, pos: number, buffer: WebGLBuffer, geometryIndex: number, GLSLSenderDataFromSystem: any, ArrayBufferData: any) => void;
export declare const sendMatrix3: (gl: WebGLRenderingContext, program: WebGLProgram, name: string, data: Float32Array, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare const sendMatrix4: (gl: WebGLRenderingContext, program: WebGLProgram, name: string, data: Float32Array, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare const sendVector3: (gl: WebGLRenderingContext, shaderIndex: number, program: WebGLProgram, name: string, data: Vector3, uniformCacheMap: UniformCacheMap, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare const sendInt: Function;
export declare const sendFloat1: Function;
export declare const sendFloat3: (gl: WebGLRenderingContext, shaderIndex: number, program: WebGLProgram, name: string, data: number[] | Float32Array, uniformCacheMap: UniformCacheMap, uniformLocationMap: UniformShaderLocationMap, getUniformLocation: Function, isUniformLocationNotExist: Function) => void;
export declare const initData: (GLSLSenderDataFromSystem: any) => void;
export declare const setVaoConfigData: Function;
