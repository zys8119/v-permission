"use strict";
exports.__esModule = true;
var plugin = {
    install: function (vue, pluginOptions) {
        vue.directive("permission", function (el, binding, vnode, oldVnode) {
            try {
                var mapData = binding.value || [];
                var keyName = Object.keys(binding.modifiers)[0];
                if (Object.prototype.toString.call(mapData) == "[object Array]" && mapData.indexOf(keyName) == -1) {
                    return;
                }
                if (Object.prototype.toString.call(mapData) == "[object String]" && mapData != keyName) {
                    return;
                }
                if (Object.prototype.toString.call(mapData) == "[object Boolean]" && !mapData) {
                    return;
                }
                setTimeout(function () {
                    switch (binding.arg) {
                        case "noDrop":
                            el.style.cursor = "no-drop";
                            el.className += " v-permission";
                            el.insertAdjacentHTML("afterend", el.outerHTML);
                            el.remove();
                            try {
                                var styleSheetsObj = document.styleSheets[document.styleSheets.length - 1];
                                // @ts-ignore
                                styleSheetsObj.addRule(".v-permission, .v-permission *", "cursor:no-drop !important;");
                            }
                            catch (e) { }
                            ;
                            break;
                        case "remove":
                            el.remove();
                            break;
                        case "href":
                            el.href = "javascript:void(0)";
                            break;
                        default:
                            try {
                                pluginOptions(el, binding, vnode, oldVnode);
                            }
                            catch (e) { }
                            break;
                    }
                });
            }
            catch (e) { }
        });
    }
};
var RoutingControl = /** @class */ (function () {
    function RoutingControl(_a) {
        var options = _a.options, store = _a.store, router = _a.router, to = _a.to, from = _a.from, next = _a.next, page = _a.page;
        // @ts-ignore
        return new Promise(function (resolve) {
            try {
                if (store.state.airforce.layout.isPublic) {
                    resolve();
                    return;
                }
            }
            catch (e) { }
            if (options.some(function (e) { return e == to.path; })) {
                resolve();
                return;
            }
            next(page);
        });
    }
    return RoutingControl;
}());
exports.RoutingControl = RoutingControl;
exports["default"] = plugin;
exports.install = plugin.install;
