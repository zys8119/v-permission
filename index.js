const plugin = {
    install (vue, pluginOptions) {
        vue.directive("permission",(el,binding,vnode,oldVnode)=>{
            try {
                let mapData = binding.value || [];
                let keyName = Object.keys(binding.modifiers)[0];
                if(Object.prototype.toString.call(mapData) == "[object Array]" &&  mapData.indexOf(keyName) == -1){
                    return;
                }
                if(Object.prototype.toString.call(mapData) == "[object String]" &&  mapData != keyName){
                    return;
                }
                if(Object.prototype.toString.call(mapData) == "[object Object]" &&  !mapData[keyName]){
                    return;
                }
                setTimeout(()=>{
                    switch (binding.arg) {
                        case "noDrop":
                            el.style.cursor = "no-drop";
                            el.className += " v-permission";
                            el.insertAdjacentHTML("afterend",el.outerHTML);
                            el.remove();
                            try {
                                let styleSheetsObj= document.styleSheets[document.styleSheets.length - 1];
                                styleSheetsObj.addRule(".v-permission, .v-permission *","cursor:no-drop !important;");
                            }catch (e) {};
                            break;
                        case "remove":
                            el.remove();
                            break;
                        case "href":
                            el.href = "javascript:void(0)";
                            break;
                        default:
                            try {
                                pluginOptions(el,binding,vnode,oldVnode);
                            }catch (e) {}
                            break;
                    }
                })
            }catch (e) {}
        });
    }
};

export class RoutingControl {
    constructor({options,router,to, from, next,page}){
        let routerPublicAll = this.getRouter(router.options.routes);
        return new Promise((resolve) => {
            if(routerPublicAll.some(e=>e == to.path) || options.some(e=>e == to.path)){
                resolve();
            }else {
                next(page);
            }
        });
    }

    getRouter(router,routerAll = []){
        router.forEach(e=>{
            try {
                if(e.meta && e.meta.isPublic){
                    routerAll.push(e.path);
                }
            }catch (e) {}
            if(e.children && e.children.length > 0){
                this.getRouter(e.children,routerAll)
            }
        });
        return routerAll;
    }
}

export default plugin
export const install = plugin.install;