import { Route, RawLocation } from 'vue-router'
interface VPermission {
    //禁用指令
    noDrop?:string;
    //移除指令
    remove?:string;
    //删除url链接跳转，针对a标签
    href?:string;
}
declare class RoutingControlClass {
    constructor(option:RoutingControlClassOptions);
    getRouter():void
}
export interface RoutingControlClassOptions {
    //权限数据
    options:string[];
    router:Route[];
    to:Route;
    from:Route;
    next:(to?: RawLocation | false | ((vm: V) => any) | void) => void;
    page:string;
}

export interface RoutingControl {
    then?(resData:any):void
}
export default VPermission