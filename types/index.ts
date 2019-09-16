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
    options:string[];//允许访问的路由
    router:Route[];//router实例化对象
    to:Route;//
    from:Route;//
    next:(to?: RawLocation | false | ((vm: object) => any) | void) => void;
    page:string;//不被允许访问的路由将被从定向至此路由
}

export interface RoutingControl {
    then?(resData:any):void
}
export default VPermission