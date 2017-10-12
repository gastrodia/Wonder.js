import { CameraController } from "./CameraController";
import { GameObject } from "../../core/entityObject/gameObject/GameObject";
import { Map } from "immutable";
import { IUIdEntity } from "../../core/entityObject/gameObject/IUIdEntity";
export declare const addAddComponentHandle: (_class: any) => void;
export declare const addDisposeHandle: (_class: any) => void;
export declare const create: Function;
export declare const addToDirtyList: Function;
export declare const init: (PerspectiveCameraData: any, CameraData: any, CameraControllerData: any, state: Map<any, any>) => Map<any, any>;
export declare const initCameraController: (state: Map<any, any>, index: number, PerspectiveCameraData: any, CameraData: any) => void;
export declare const update: (PerspectiveCameraData: any, CameraData: any, CameraControllerData: any, state: Map<any, any>) => Map<any, any>;
export declare const addComponent: (component: CameraController, gameObject: GameObject) => void;
export declare const disposeComponent: (component: CameraController) => void;
export declare const getGameObject: (index: number, CameraControllerData: any) => IUIdEntity;
export declare const getWorldToCameraMatrix: (...args: any[]) => any;
export declare const getPMatrix: (index: number, CameraData: any) => any;
export declare const initData: (CameraControllerData: any, PerspectiveCameraData: any, CameraData: any) => void;
