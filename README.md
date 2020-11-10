# bf-ui-vue3
一个使用 vue3 + vite + Vue Router + ts 编写的UI组件库，持续更新中！！

#### button

1. 在组件调用时，父组件给子组件传的click、mouseover、focus等事件，会默认绑定到组件的最外层元素（即根元素）中
```js
<bf-button
    @click="sayHi"
    @mouseover="sayHi"
    @focus="sayHi"
    size="small"
>你好</bf-button>
```
```html
<!-- 事件会默认绑定到div上，如果最外层标签时button，那么就会绑定到button上 -->
<div>
    <button>
        <slot></slot>
    </button>
</div>
```
2. 针对第一点，只需设置属性inheritAttrs为false即可取消默认绑定
```js
export default {
    inheritAttrs: false, // 不继承默认属性到最外层标签中
}
```
3. 使用`$attrs`或者`context.attrs`获取所有属性
4. 模板中使用`v-bind="$attrs"`可将所有属性绑定至当前元素上
```html
<div>
    <button v-bind="$attrs">
        <slot></slot>
    </button>
</div>
```
5. 使用es6的扩展操作，即`const {size, ...rest} = context.attrs`可扩展属性，将属性分开
```html
<div :size="size">
    <button v-bind="rest">
        <slot></slot>
    </button>
</div>
```

> props与attrs的区别

- `props`要先在props对象里面声明再取值，`attrs`直接通过`context.attrs`取值而不用先声明
- `props`不包含调用时的@事件，`attrs`包含事件
- `props`支持`String`以外的类型，`attrs`只有String类型
- `props`如果声明了某个属性，`attrs`里将不会包含这个属性

6. 禁用样式
```css
&[disabled] {
  cursor: not-allowed;
  color: $grey;
}
```

注意：css最小影响原则
- UI库的样式，不能使用`scoped`，方便开发者覆盖UI样式
- 使用class名匹配，将组件的通用样式写在一个文件下，详见`/lib/bf.scss`