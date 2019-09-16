# v-permission

vue 权限控制

## 起步

### 插件导入

```javascript
  //权限控制导入
  import vPermission from "v-permission"
  Vue.use(vPermission);
  import { RoutingControl } from "v-permission"
```

### 路由控制

```javascript
new RoutingControl({options,router,to, from, next,store,page:"/404"}).then(res=>{
    //to do...
})
```
### 页面元素控制

#### noDrop

> 禁用指令

示例：

```vue
<template>
    <div v-permission:noDrop="noDrop">
        我是被禁止的
    </div>
</template>
<script>
export default {
    name:"noDropTest",
    data(){
        return {
            noDrop:true
        }
    }
}
</script>

```

#### href

> 删除url链接跳转，针对a标签

示例：

```vue
<template>
    <a v-permission:href="href" href="htttp://www.baidu.com">
        渲染后我的href属性值被更改为【 href="javasrcipt:void(0)"】
    </a>
</template>
<script>
export default {
    name:"hrefTest",
    data(){
        return {
            href:true
        }
    }
}
</script>

```

#### remove

> 移除指令

示例：

```vue
<template>
    <div v-permission:remove="remove">
        我是被移除指令，渲染后不可见
    </div>
</template>
<script>
export default {
    name:"removeTest",
    data(){
        return {
            remove:true
        }
    }
}
</script>

```



## 接口
```typescript
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
```


