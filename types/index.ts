import { Route, RawLocation } from 'vue-router'
interface VPermission {

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