import { Route } from 'vue-router'
interface VPermission {

}
declare class RoutingControlClass {
    constructor(option:RoutingControlClassOptions);
    getRouter():void
}
export interface RoutingControlClassOptions {
    //权限数据
    options:string[];
    router:object;
    to:object;
    from:object;
    next:object;
    page:string;
}

export interface RoutingControl {
    then?(resData:any):void
}
export default VPermission