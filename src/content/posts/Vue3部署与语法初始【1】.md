---
title: Vue3部署与基本语法实例【1】
published: 2025-02-14 18:51:00
top_img: false
tags: [Vue3]
category: 学习笔记
slug: "45dc8b5b"
---

# Vue

1 . **Vue**是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。


# 渐进式框架

**Vue** 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：

- 无需构建步骤，渐进式增强静态的 HTML
- 在任何页面中作为 Web Components 嵌入
- 单页应用 (SPA)
- 全栈 / 服务端渲染 (SSR)
- Jamstack / 静态站点生成 (SSG)
- 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面


# 部署
> 所需环境: Node.js

1 . 创建Vue项目
```bash
npm init vue@latest
```
2 .安装Vue依赖项
```bash
npm install
```

# 目录描述
1 . 用于了解创建好的Vue项目目录结构(下面做了一些的修改，忽略了src下的一些子文件)
```bash
Vue3-Project/
├── node_modules/             # 项目所依赖的Node模块
├── public/                   # 公共资源目录
│   └── favicon.ico           # 图标
├── src/                      # 源代码目录
│   ├── assets/               # 静态资源，如图像、字体等
│   ├── components/           # 存放 Vue 组件，每个组件都是一个独立的 .vue 文件
│   ├── views/                # 存放视图组件
│   │   └── Home.vue          # 默认生成的主页组件。
│   ├── App.vue               # 根组件，整个应用的入口组件。
│   ├── main.js               # 应用的入口文件，负责创建 Vue 实例并挂载到 DOM 上。
│   └── router/               # 存放路由配置文件。
│       └── index.js          # 路由的配置文件，定义了应用的路由规则。
├── .gitignore                # Git 忽略文件列表，指定哪些文件和目录不被包含在版本控制中
├── index.html                # 应用的主 HTML 文件，Vue CLI 会在构建时自动注入生成的静态资源链接。
├── babel.config.js           # Babel 配置文件，指定 Babel 的编译规则。
├── package.json              # 项目的依赖、脚本和其他元数据。
├── README.md                 # 项目的说明文件
├── vue.config.js             # Vue CLI 的配置文件，用于修改默认配置。
└── yarn.lock or package-lock.json   # 锁定安装的依赖版本，确保项目依赖的一致性。
```

# 运行

```bash
npm run dev
```

# 选项式与组合式

1 . 在 Vue 中，选项式 API（`Options API`）和组合式 API（`Composition API`）是两种不同的组件编写方式，选项式属于Vue2的编写风格，组合式是Vue3的编写风格。两者各有优缺点，适用于不同的场景。

![](https://gcore.jsdelivr.net/gh/Almango/Blog_imgbed@main/post/vue3_1_1.png)
> 我仿照`大帅老猿（掘金）`的动图设计了一张简易图纸，我们也可以查看下列代码来区别两者

- **选项式 API**：通过一组选项（如 data、methods、computed、watch 等）来定义组件的状态、逻辑和行为。
```js
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  }
};
```
- **组合式 API**：通过 setup 函数组织逻辑，允许将相关逻辑集中在一起，不受选项划分的限制。
```js
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increment = () => count.value++;
    const doubleCount = computed(() => count.value * 2);

    return { count, increment, doubleCount };
  }
};
```

2 . 可以看到，组合式编写风格是要比选项式编写风格要简洁许多的。
3 . 在`Options API`中的代码是需要进行严格规范的，比如，所有的`方法`统一写到`methods()`函数中，所有声明的数据必须写在`data()`函数中，最后通过`return()`函数将内容返回给渲染页面。这就导致原本一起的代码变得十分的分散，这是选项式API的一大弊端，而`Composition API`则更像Javascript，你声明完变量后可以立马在下面接着写方法.....
4 . 事实上组合式提供更强的灵活性和复用能力，适合大型项目和复杂业务逻辑，而选项式代码逻辑直观且易于维护。
5 . 由于我们学习的Vue3的语法，所以我们会选择更新颖的`组合式编写风格`。

6 . 另外，组合式还有一种更优雅的返回方法，这样就不需要在写一个return()了。
```js
<script setup>
    const count = ref(0);
    const increment = () => count.value++;
    const doubleCount = computed(() => count.value * 2);
</script>
```

# 条件渲染
## v-if
>v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。
1 . 很明显，p标签并`不会`在页面显示出来，因为返回值都为假。
```html
<p v-if="expression">Hello World</p>
<p v-if="number === 2">你好世界！</p>
```
```js
<script setup>
    const expression = false;
    const number = 3;
</script>
```
## v-else
>当v-if不成立时，执行该语句

1 . 我们继续沿用上面的代码，在此基础上加一个注入了`v-else`的b标签。expression仍为false，所以最终会`显示b标签`
```html
<p v-if="expression">Hello World</p>
<p v-if="number === 2">你好世界！</p>
<b v-else>Hello Vue</b>
```
```js
<script setup>
    const expression = false;
    const number = 3;
</script>
```

## v-else-if
>v-else-if 提供的是相应于 v-if 的“else if 区块”。它可以连续多次重复使用：

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
## v-show

>元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。

1 . `v-if`和`v-show`十分相似，但内在原理不同。当条件成立时，v-if会将元素渲染，否则不渲染，而v-show不管成不成立，元素都会被渲染，但受css的display控制是否显示在页面。

```html
<p v-show>无论如何都会被渲染</p>
```

>总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。

# 列表渲染

## vue-for
>我们可以使用 v-for 指令基于一个数组来渲染一个列表。

1 . v-for像极了JavaScript中的迭代器，例如下方代码：在p标签中，name每循环一次会抽取一次space中的值，直到最后......
2 . 结果我们会看到，我们只用了一个p标签，就实现渲染了4个p标签。
```html
<p v-for="name in space">{{ name }}</p>
```
```js
<script setup>
    const space = ["北京", "江西", "四川", "云南"]
</script>
```
3 . 在上述代码中，我们也可以使用`v-for="name of space"`,来写，`in`和`of`功能上本质是一致的。

## vue-for与对象

>我们可以使用 v-for 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 Object.values() 的返回值来决定。

1 . 当我们用到数组对象时，需要分别渲染出数组中的对象时，我们同样可以使用 v-for，并且使用这一功能十分高效！
2 . 我们会使用到三个基本的属性：value、index 和 key。
- value 表示数组中每个对象的值。
- index 表示对象在数组中的下标索引。
- key 是一个特殊的属性，用于为 Vue 提供唯一标识，以优化 DOM 更新。它通常是一个字符串，可以是对象的某个唯一属性（如 id），也可以是数组的索引。

3 . 下方代码中，我们在div中注入了`v-for`，使用`value`和`index`将取到的值返回给p标签和img标签，这样我分别得到的值为序号，地名和图片链接。其实当我们看到结果的时候会发现，并不是p和img循环了，而是整个div元素(处container外)。

```html

  <div class="container">
    <div v-for="(value, index) in trip">
      <p>{{ value.space }}</p>
      <img :src="value.img">
    </div>
  </div>
```
```js
<script setup>
  const trip = [
        {
          space: "北京",
          img: "https://ts1.cn.mm.bing.net/th/id/R-C.f3838fb03a54d25118a6607861e1bce9?rik=y0XZao50qB2TzA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50112%2f1130.jpg_wh860.jpg&ehk=%2bT2S%2bRcrhCvzxqKiJqGrKAe6XlXFzKu1kNje3i4F3oE%3d&risl=&pid=ImgRaw&r=0",
          creattime: "2025-2-15-20:41"
        },
        {
          space: "西藏",
          img: "https://ts1.cn.mm.bing.net/th/id/R-C.162267d7399d5a97fa7f18e16009a8e1?rik=as93Op7T1kND7Q&riu=http%3a%2f%2fhimg2.huanqiu.com%2fattachment2010%2f2017%2f0609%2f16%2f24%2f20170609042446633.jpg&ehk=Lt0gA8N3Od1Qpvew3inPQenGQjRZSOcEm8f8eH%2blM9I%3d&risl=&pid=ImgRaw&r=0",
          creattime: "2025-2-15-20:41"
        },
        {
          space: "扬州",
          img: "https://www.szyou.net/uploadpic/20225161848098822.jpg",
          creattime: "2025-2-15-20:41"
        },
        {
          space: "上海",
          img: "https://tse3-mm.cn.bing.net/th/id/OIP-C.6mfrs-U8Vixytje3TtlLLQHaE7?rs=1&pid=ImgDetMain",
          creattime: "2025-2-15-20:41"
        },
      ]
</script>
```
```css
.container {
  width: 90%;
  height: 800px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 15px;
  display: flex;
}
.container div{
  padding: 39px;
  text-align: center;
}
.container img{
  width: 300px;
  height: 200px;
  border-radius: 15px;
  transition: all 0.1s ease 0.1s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.container img:hover{margin-top: 10px;}
```

# 响应式

>Vue.js 是一个构建用户界面的渐进式框架，其核心特性之一是响应式系统。Vue 的响应式系统允许开发者以声明式的方式构建用户界面，当数据发生变化时，视图会自动更新以反映这些变化。

1 .Vue 的响应式系统不仅仅是简单的数据绑定，Vue 能够自动追踪数据的依赖关系，只有当相关数据发生变化时，才会触发视图更新，Vue 的响应式系统与组件化架构紧密结合，每个组件都有自己的数据和逻辑，便于复用和维护，不仅如此，Vue还提供了丰富的生态系统，如 Vuex（状态管理）、Vue Router（路由管理）等，进一步增强了响应式系统的功能。

## ref函数

>在组合式 API 中，推荐使用 ref() 函数来声明响应式状态：
```js
import { ref } from 'vue'
const number = ref(0)
```
1 . 例如我们可以使用简单的响应式来实现一个按钮递增的效果。

```html
<button @click="change">数字递增{{ number }}</button>
```
```js
import { ref } from 'vue';
    const number = ref(0);
    function change(){
        number.value ++;
}
```

>#[为什么使用ref()？](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals#why-refs)


## reactive函数

>reactive函数与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性。
>其实，ref也同样可以做到将对象数据类型响应化，不过它的原理也是调用了reactive函数。
```js
const Objectlist = reactive(
  [
    {
    name: "Boom",
    password: "123root",
    creattime: "2025-2-15-20:46"
    },
    {
    name: "Lizhi",
    password: "123456",
    creattime: "2025-2-15-20:46"
    }
  ]
)
```