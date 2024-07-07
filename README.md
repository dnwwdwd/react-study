# 一、React 基础

## 1. 创建一个 react 项目

1.利用 create-react-app 工具创建一个 react 项目

```bash
npx create-react-app project-name
npm start # 启动项目
```

2.src 目录只保留 App.js 和 index.js 文件

3.精简 App.js 和 index.js 文件

### 1.1 src 目录下文件的作用

index.js 是项目的入口，从这里开始运行，App 是根组件被 Index.js 导入，最后渲染到 index.html 中 root 节点上

index.js：

```react
// 项目的核心入口 从这里开始运行

// React 必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入项目的根组件
import App from './App';

// 把 App 根组件渲染到 id 为 root 的 dom 节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

App：

```react
// 项目的根组件

// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上
function App() {
  return (
    <div className="App">
      this is React App
    </div>
  );
}

export default App;

```

## 2. jsx 基础-概念和本质

### 2.1 JSX 是什么？

JSX 表示在 JS 代码中编写 HTML 模板结构，是 React 中编写 UI 模板的方式

**优势：**

1. HTML 的声明式模板写法
2. JS 的可编程能力



JSX 是 JS 的拓展，浏览器不可直接识别，需要解析工具解析才可识别

### 2.2 JSX 编写 JS 代码

在 jsx 中可通过**大括号 {} 识别 js 表达式**，比如常见的变量、函数调用、方法调用等等

App.js：

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

function getName() {
    return 'jack';
}

const count = 100;
function App() {
  return (
    <div className="App">
      this is React App
        {/*1. 引号传递字符串*/}
        {'this is message'}
        {/*2. 识别 js 变量*/}
        {count}
        {/*3. 函数调用*/}
        { getName() }
        {/*4. 方法调用*/}
        {new Date().getDate()}
        {/*5. 使用 js 对象*/}
        <div style={{ color: 'red' }}>this is div</div>
    </div>
  );
}

export default App;

```

### 2.3 JSX 中实现列表渲染

提示：在 JSX 中可以使用原生 JS 中 map 方法遍历渲染列表

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

const count = 100;

const list = [
    {id: 1001, name: 'Vue'},
    {id: 1002, name: 'React'},
    {id: 1003, name: 'Angular'},
];

function App() {
  return (
    <div className="App">
        this is App
        {/*渲染列表*/}
        {list.map(item => <li key={item.id}>{item.name}</li>)}
    </div>
  );
}

export default App;

```

注意：

1. 渲染哪个结构就 return 那个
2. 循环渲染记得要加上独一无二的 key（类型为 string 或 number）

### 2.4 JSX 实现条件渲染

在 React 中，可以通过**逻辑与运算符 &&、三元表达式（?:）**实现**基础的条件渲染*

类似 Vue 的 v-if

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

const isLogin = true;

function App() {
  return (
    <div className="App">
        {/*1. 逻辑与 &&*/}
        {isLogin && <span>this is span</span>}
        <br/>
        {/*2. 三元运算*/}
        {isLogin ? <span>is Login</span> : <span>not Login</span>}
    </div>
  );
}

export default App;
```

![image-20240706153914830](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240706153914.png)

#### 2.4.1 JSX 条件渲染的 demo

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

const articleType = 3; // 0 1 3 'articleType' 的取值范围

// 定义核心函数（根据文章类型返回不同的 JSX 模板）
function getArticleTemplate() {
    if (articleType === 0) {
        return <div>我是图文文章</div>
    } else if (articleType === 1) {
        return <div>我是单图文章</div>
    } else {
        return <div>我是三图文章</div>
    }

}

function App() {
  return (
    <div className="App">
        {/*调用函数渲染不同模板*/}
        {getArticleTemplate()}
    </div>
  );
}

export default App;
```

显示：我是三图文章

## 3. React 基础事件绑定

**语法**：on + 事件名 = {事件处理程序/函数名}，遵循驼峰命令

1.绑定事件

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

function App() {
    const handleClick = () => {
        console.log('button 被点击了');
    }

  return (
    <div className="App">
        <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
```

2.**传递事件参数 e**

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

function App() {

    // 拿到事件参数 e
    const handleClick = (e) => {
        console.log('button 被点击了', e);
    }

  return (
    <div className="App">
        <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
```

3.**传递自定义参数**

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

function App() {
	
    // 传递自定义参数
    const handleClick = (name) => {
        console.log('button 被点击了', name);
    }

  return (
    <div className="App">
        {/*箭头函数传参*/}
        <button onClick={() => handleClick('jack')}>click me</button>
    </div>
  );
}

export default App;

```

4.**同时传递自定义参数和事件参数 e**

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上



function App() {
    // const handleClick = () => {
    //     console.log('button 被点击了');
    // }

    // 拿到事件参数 e
    // const handleClick = (e) => {
    //     console.log('button 被点击了', e);
    // }

    const handleClick = (name, e) => {
        console.log('button 被点击了', name, e);
    }

  return (
    <div className="App">
        {/*箭头函数传参*/}
        <button onClick={(e) => handleClick('jack', e)}>click me</button>
    </div>
  );
}

export default App;
```

![image-20240706160509512](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240706160509.png)



## 4.  React组件

在 React 中，一个组件就是**一个首字母大写的函数**，内部含有组件的逻辑和 UI，渲染组件只需**将组件当做标签书写即可**

1.定义组件（function 定义或者箭头函数）

App.js：

```typescript
function Button() {
    // 组件逻辑
    return <button>click me</button>
}

const Button = () => {
    // 组件逻辑
    return <button>click me</button>
}

```

2.渲染组件（自闭和或成对标签）

```ts
function App() {
  return (
    <div className="App">
        {/*自闭和*/}
        <Button />
        {/*成对标签*/}
        <Button></Button>
    </div>
  );
}
```

## 5. useState 基础使用

其是 React 的一个 Hook，**允许我们向组件添加一个状态变量**，从而控制影响组件的渲染结果

```ts
const [count, setCount] = useState(0);
```

count 的值不可直接修改，只能通过 setCount 修改

本质：状态变量一旦发生变化组件的视图 UI 也会变化（**数据驱动视图**）

**特点：**

1. useState 是一个函数，返回值是一个数组
2. 数组的第一个参数是状态变量，第二个参数是 set 函数用来修改状态变量
3. useState 的参数将作为 count 的初始值

### 一个 useState 的小 demo

App.js：

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

// useState 实现一个计数器按钮
import {useState} from "react";

function App() {
    // 1. 调用 useState 添加一个状态变量
    // count 状态变量
    // setCount 修改状态变量
    const [count, setCount] = useState(0);

    // 2. 点击按钮的回调
    const handleClick = () => {
        // 作用：1.用传入的新值修改 count
        // 2.重新使用新的 count 渲染 UI
        setCount(count + 1);
    };
  return (
    <div className="App">
        <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
```

### 拓展 demo

App.js：

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

// useState 实现一个计数器按钮
import {useState} from "react";

function App() {

    // 修改对象
    const [form, setForm] = useState({name: 'jack'});

    const changeForm = () => {
        // 错误写法：直接修改
        // form.name = 'john';
        // 正确写法：setForm 传入一个全新的对象
        setForm({
            ...form,
            name: 'john',
        })
    };

  return (
    <div className="App">
        <button onClick={changeForm}>修改 form {form.name}</button>
    </div>
  );
}

export default App;
```

## 6. 如何修改组件样式

![image-20240706212148864](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240706212148.png)

App.js：

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

// 导入样式
import './index.css'
const style = {
    color: 'red',
    fontSize: '50px',
};

function App() {

  return (
    <div className="App">
        {/*行内控制*/}
        <span style={{color: 'red', fontSize: '50px'}}>this is span</span>
        <span style={style}>this is span</span>
        {/*通过 class 类名控制*/}
        <span className='foo'>this is foo</span>
    </div>
  );
}

export default App;
```

index.css：

```css
.foo {
    color: blue;
}
```

## 7. B 站评论案例

### 7.1 列表渲染

App.js：

```react
import './App.scss'
import avatar from './images/bozai.png'
import {useState} from "react";

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const list = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]


// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

// 渲染评论列表
// 1.使用 useState 维护 list


const App = () => {

  const [commentList, setCommentList] = useState(list);

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            <span className='nav-item'>最新</span>
            <span className='nav-item'>最热</span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
              <div key={item.rpid} className="reply-item">
                {/* 头像 */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                        className="bili-avatar-img"
                        alt=""
                        src={item.user.avatar}
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* 用户名 */}
                  <div className="user-info">
                    <div className="user-name">{item.user.uname}</div>
                  </div>
                  {/* 评论内容 */}
                  <div className="root-reply">
                    <span className="reply-content">{item.content}</span>
                    <div className="reply-info">
                      {/* 评论时间 */}
                      <span className="reply-time">{item.ctime}</span>
                      {/* 评论数量 */}
                      <span className="reply-time">点赞数:{item.like}</span>
                      <span className="delete-btn">
                    删除
                  </span>

                    </div>
                  </div>
                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
```

App.scss：

```scss
.app {
  width: 80%;
  margin: 50px auto;
}

.reply-navigation {
  margin-bottom: 22px;

  .nav-bar {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    .nav-title {
      display: flex;
      align-items: center;
      width: 114px;
      font-size: 20px;

      .nav-title-text {
        color: #18191c;
        font-weight: 500;
      }
      .total-reply {
        margin: 0 36px 0 6px;
        color: #9499a0;
        font-weight: normal;
        font-size: 13px;
      }
    }

    .nav-sort {
      display: flex;
      align-items: center;
      color: #9499a0;
      font-size: 13px;

      .nav-item {
        cursor: pointer;

        &:hover {
          color: #00aeec;
        }

        &:last-child::after {
          display: none;
        }
        &::after {
          content: ' ';
          display: inline-block;
          height: 10px;
          width: 1px;
          margin: -1px 12px;
          background-color: #9499a0;
        }
      }

      .nav-item.active {
        color: #18191c;
      }
    }
  }
}

.reply-wrap {
  position: relative;
}
.box-normal {
  display: flex;
  transition: 0.2s;

  .reply-box-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 50px;
  }

  .reply-box-wrap {
    display: flex;
    position: relative;
    flex: 1;

    .reply-box-textarea {
      width: 100%;
      height: 50px;
      padding: 5px 10px;
      box-sizing: border-box;
      color: #181931;
      font-family: inherit;
      line-height: 38px;
      background-color: #f1f2f3;
      border: 1px solid #f1f2f3;
      border-radius: 6px;
      outline: none;
      resize: none;
      transition: 0.2s;

      &::placeholder {
        color: #9499a0;
        font-size: 12px;
      }
      &:focus {
        height: 60px;
        background-color: #fff;
        border-color: #c9ccd0;
      }
    }
  }

  .reply-box-send {
    position: relative;
    display: flex;
    flex-basis: 86px;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;

    & .send-text {
      position: absolute;
      z-index: 1;
      color: #fff;
      font-size: 16px;
    }
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #00aeec;
      border-radius: 4px;
      opacity: 0.5;
      content: '';
    }
    &:hover::after {
      opacity: 1;
    }
  }
}
.bili-avatar {
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  margin: 0;
  padding: 0;
  border-radius: 50%;
}
.bili-avatar-img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 48px;
  height: 48px;
  object-fit: cover;
  border: none;
  border-radius: 50%;
  image-rendering: -webkit-optimize-contrast;
  transform: translate(-50%, -50%);
}

// 评论列表
.reply-list {
  margin-top: 14px;
}
.reply-item {
  padding: 22px 0 0 80px;
  .root-reply-avatar {
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    width: 80px;
    cursor: pointer;
  }

  .content-wrap {
    position: relative;
    flex: 1;

    &::after {
      content: ' ';
      display: block;
      height: 1px;
      width: 100%;
      margin-top: 14px;
      background-color: #e3e5e7;
    }

    .user-info {
      display: flex;
      align-items: center;
      margin-bottom: 4px;

      .user-name {
        height: 30px;
        margin-right: 5px;
        color: #61666d;
        font-size: 13px;
        line-height: 30px;
        cursor: pointer;
      }
    }

    .root-reply {
      position: relative;
      padding: 2px 0;
      color: #181931;
      font-size: 15px;
      line-height: 24px;
      .reply-info {
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 2px;
        color: #9499a0;
        font-size: 13px;

        .reply-time {
          width: 86px;
          margin-right: 20px;
        }
        .reply-like {
          display: flex;
          align-items: center;
          margin-right: 19px;

          .like-icon {
            width: 14px;
            height: 14px;
            margin-right: 5px;
            color: #9499a0;
            background-position: -153px -25px;
            &:hover {
              background-position: -218px -25px;
            }
          }
          .like-icon.liked {
            background-position: -154px -89px;
          }
        }
        .reply-dislike {
          display: flex;
          align-items: center;
          margin-right: 19px;
          .dislike-icon {
            width: 16px;
            height: 16px;
            background-position: -153px -153px;
            &:hover {
              background-position: -217px -153px;
            }
          }
          .dislike-icon.disliked {
            background-position: -154px -217px;
          }
        }
        .delete-btn {
          cursor: pointer;
          &:hover {
            color: #00aeec;
          }
        }
      }
    }
  }
}

.reply-none {
  height: 64px;
  margin-bottom: 80px;
  color: #99a2aa;
  font-size: 13px;
  line-height: 64px;
  text-align: center;
}
```

![image-20240706224956160](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240706224956.png)

### 7.2 删除功能实现

需求：

1. 只有自己的评论才可以删除
2. 点击删除按钮，删除当前评论，列表中不再显示

核心思路：

1. 删除显示 - 条件渲染
2. 删除功能 - 拿到当前项 id 以 id 为条件对评论列表做过滤

### 7.3 渲染 Tab + 点击高亮实现

需求：点击哪个 tab 项，哪个做高亮处理

核心思路：

点击谁就把谁的type(独一无二的标识)记录下来，然后和遍历时的每一项的type做匹配，谁匹配到就设置负责高亮的类名

```react
import './App.scss'
import avatar from './images/bozai.png'
import {useState} from "react";

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const list = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]


// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

const App = () => {

  // 渲染评论列表
  // 1.使用 useState 维护 list
  const [commentList, setCommentList] = useState(list);

  // 删除功能
  const handleDel = (id) => {
    // 对 commentList 进行过滤
    setCommentList(commentList.filter(item => item.rpid !== id));
  };

  // tab 切换功能
  // 1.点击谁就把谁的 type 记录下来
  // 2.通过记录 type 和每一项遍历时的 type 做匹配 控制激活类名的显示
  const [type, setType] = useState('hot');
  const handleTabChange = (type) => {
    console.log(type);
    setType(type);
  };

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item =>
                <span key={item.type}
                      onClick={() => handleTabChange(item.type)}
                      className={`nav-item ${type === item.type && 'active'}`}>
                  {item.text}
                </span>)}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
              <div key={item.rpid} className="reply-item">
                {/* 头像 */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                        className="bili-avatar-img"
                        alt=""
                        src={item.user.avatar}
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* 用户名 */}
                  <div className="user-info">
                    <div className="user-name">{item.user.uname}</div>
                  </div>
                  {/* 评论内容 */}
                  <div className="root-reply">
                    <span className="reply-content">{item.content}</span>
                    <div className="reply-info">
                      {/* 评论时间 */}
                      <span className="reply-time">{item.ctime}</span>
                      {/* 评论数量 */}
                      <span className="reply-time">点赞数:{item.like}</span>
                      {/*条件：user.id === item.user.id*/}
                      {user.uid === item.user.uid  && <span className="delete-btn" onClick={() => handleDel(item.rpid)}>删除</span>}

                    </div>
                  </div>
                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
```

### 7.4 排序功能

需求：点击最新，评论列表按照创建时间倒序排列（新的在前），点击最热按照点赞数排序（多的在前)

核心思路：把评论列表状态数据进行不同的排序处理，当成新值传给 set 函数重新渲染视图 UI

#### **lodash 库**

安装：

```bash
npm install lodash
```

引入：

```js
import _ from 'lodash';
```

使用：

```js
setCommentList(_.orderBy(commentList, 'like', 'desc'));
```

App.js：

```react
import './App.scss'
import avatar from './images/bozai.png'
import {useState} from "react";
import _ from 'lodash';
/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const list = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-20 08:15',
    like: 38,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '09-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]


// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

const App = () => {

  // 渲染评论列表
  // 1.使用 useState 维护 list
  const [commentList, setCommentList] = useState(_.orderBy(list, 'like', 'desc'));

  // 删除功能
  const handleDel = (id) => {
    // 对 commentList 进行过滤
    setCommentList(commentList.filter(item => item.rpid !== id));
  };

  // tab 切换功能
  // 1.点击谁就把谁的 type 记录下来
  // 2.通过记录 type 和每一项遍历时的 type 做匹配 控制激活类名的显示
  const [type, setType] = useState('hot');
  const handleTabChange = (type) => {
    console.log(type);
    setType(type);
    // 基于列表的排序
    if (type === 'hot') {
      // 根据点赞数量排序
      // lodash
      setCommentList(_.orderBy(commentList, 'like', 'desc'));
    } else {
      // 根据创建时间排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  };

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item =>
                <span key={item.type}
                      onClick={() => handleTabChange(item.type)}
                      className={`nav-item ${type === item.type && 'active'}`}>
                  {item.text}
                </span>)}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
              <div key={item.rpid} className="reply-item">
                {/* 头像 */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                        className="bili-avatar-img"
                        alt=""
                        src={item.user.avatar}
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* 用户名 */}
                  <div className="user-info">
                    <div className="user-name">{item.user.uname}</div>
                  </div>
                  {/* 评论内容 */}
                  <div className="root-reply">
                    <span className="reply-content">{item.content}</span>
                    <div className="reply-info">
                      {/* 评论时间 */}
                      <span className="reply-time">{item.ctime}</span>
                      {/* 评论数量 */}
                      <span className="reply-time">点赞数:{item.like}</span>
                      {/*条件：user.id === item.user.id*/}
                      {user.uid === item.user.uid  && <span className="delete-btn" onClick={() => handleDel(item.rpid)}>删除</span>}

                    </div>
                  </div>
                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
```

## 8. classnams 优化类名控制

classnams 是一个简单的 JS 库，可以非常方便的通过条件动态控制 class 类名的显示

以前出现的问题：

![image-20240707135835054](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240707135835.png)

语法：key 表示要控制的类名，value 表示条件，true 的时候类名就会显示



### 使用

安装：

```bash
npm install classnames
```

引入：

```js
import classNames from "classnames";
```

用法：

```jsx
    <span key={item.type}
      	onClick={() => handleTabChange(item.type)}
      	className={classNames('nav-item', {active: type === item.type})}>
      	{item.text}
    </span>)}
```

## 9. 受表单控制项

概念：使用 React 组件的状态（useState）控制表单状态

![image-20240707141640229](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240707141640.png)

App.js

```react
// 项目的根组件
// App -> index.js -> public/index.html(root)  => App 根组件被导入到 index.js，然后渲染到 index.html 的 root 节点上

// 1.声明一个 react 状态 - useState
// 2.核心绑定流程
// 2.1通过 value 属性绑定 react 状态
// 2.2绑定 onChange 事件，通过事件参数 e 拿到输入框最新值，反向修改 react 状态

import {useState} from "react";

function App() {

   const [value, setValue] =  useState();

  return (
    <div className="App">
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='text'
        />
    </div>
  );
}

export default App;

```



## 10. React 中获取DOM

在 React 中获取/操作 DOM，需要使用 useRef 钩子函数，分为两步：

1. 使用 useRef 创建 ref 对象，并与 JSX 绑定
2. 在 DOM 可用/DOM 渲染完毕时，通过 inputRef.current 拿到 DOM 对象

App.js：

```react
import React, { useRef } from "react";

function App() {
    const inputRef = useRef(null);

    const showDom = () => {
        console.log(inputRef.current);
    };

    const setInputValue = () => {
        inputRef.current.value = '新的值';
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    const selectInputText = () => {
        inputRef.current.select();
    };

    const addClassToInput = () => {
        inputRef.current.classList.add('new-class');
    };

    const removeClassFromInput = () => {
        inputRef.current.classList.remove('new-class');
    };

    const addEventListenerToInput = () => {
        inputRef.current.addEventListener('input', (event) => {
            console.log('Input changed:', event.target.value);
        });
    };

    return (
        <div className="App">
            <input ref={inputRef} type='text'/>
            <button onClick={showDom}>获取 dom</button>
            <button onClick={setInputValue}>设置值</button>
            <button onClick={focusInput}>聚焦</button>
            <button onClick={selectInputText}>选择文本</button>
            <button onClick={addClassToInput}>添加类</button>
            <button onClick={removeClassFromInput}>移除类</button>
            <button onClick={addEventListenerToInput}>添加事件监听器</button>
        </div>
    );
}

export default App;
```

## 11.B 站评论优化

### 11.1 发表评论

```react
import './App.scss'
import avatar from './images/bozai.png'
import {useState} from "react";
import _ from 'lodash';
import classNames from "classnames";
/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const list = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-20 08:15',
    like: 38,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '09-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]


// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

const App = () => {

  // 渲染评论列表
  // 1.使用 useState 维护 list
  const [commentList, setCommentList] = useState(_.orderBy(list, 'like', 'desc'));

  // 删除功能
  const handleDel = (id) => {
    // 对 commentList 进行过滤
    setCommentList(commentList.filter(item => item.rpid !== id));
  };

  // tab 切换功能
  // 1.点击谁就把谁的 type 记录下来
  // 2.通过记录 type 和每一项遍历时的 type 做匹配 控制激活类名的显示
  const [type, setType] = useState('hot');
  const handleTabChange = (type) => {
    console.log(type);
    setType(type);
    // 基于列表的排序
    if (type === 'hot') {
      // 根据点赞数量排序
      // lodash
      setCommentList(_.orderBy(commentList, 'like', 'desc'));
    } else {
      // 根据创建时间排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  };

  // 发表评论
  const [content, setContent] = useState('');
  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: 4,
        user: {
          uid: '30009257',
          avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
          uname: '黑马前端',
        },
        content: content,
        ctime: '10-19 09:00',
        like: 80,
      }
      ]);
  };

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item =>
                <span key={item.type}
                      onClick={() => handleTabChange(item.type)}
                      className={classNames('nav-item', {active: type === item.type})}>
                  {item.text}
                </span>)
            }
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
              <div key={item.rpid} className="reply-item">
                {/* 头像 */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                        className="bili-avatar-img"
                        alt=""
                        src={item.user.avatar}
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* 用户名 */}
                  <div className="user-info">
                    <div className="user-name">{item.user.uname}</div>
                  </div>
                  {/* 评论内容 */}
                  <div className="root-reply">
                    <span className="reply-content">{item.content}</span>
                    <div className="reply-info">
                      {/* 评论时间 */}
                      <span className="reply-time">{item.ctime}</span>
                      {/* 评论数量 */}
                      <span className="reply-time">点赞数:{item.like}</span>
                      {/*条件：user.id === item.user.id*/}
                      {user.uid === item.user.uid  && <span className="delete-btn" onClick={() => handleDel(item.rpid)}>删除</span>}
                    </div>
                  </div>
                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
```

![image-20240707150807010](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240707150807.png)

**uuid 库**

安装：

```bash
npm install uuid
```

引入：

```js
import {v4 as uuidV4} from 'uuid'
uuidV4(); // 使用
```



**dayjs 库**

安装：

```bash
npm install dayjs
```

引入：

```js
import dayjs from 'dayjs'
dayjs() // 使用
```

### 11.2 发表评论后清除输入框并聚焦

思路：

1. 设置输入框的 useState 的 setContent 为空
2. 利用 useRef 获取 dom 元素，再调用 focus 方法

App.js：

```react
import './App.scss'
import avatar from './images/bozai.png'
import {useRef, useState} from "react";
import _ from 'lodash';
import classNames from "classnames";
import {v4 as uuidV4} from 'uuid'
import dayjs from "dayjs";

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const list = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-20 08:15',
    like: 38,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '09-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]


// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

const App = () => {

  // 渲染评论列表
  // 1.使用 useState 维护 list
  const [commentList, setCommentList] = useState(_.orderBy(list, 'like', 'desc'));

  const inputRef = useRef(null);

  // 删除功能
  const handleDel = (id) => {
    // 对 commentList 进行过滤
    setCommentList(commentList.filter(item => item.rpid !== id));
  };

  // tab 切换功能
  // 1.点击谁就把谁的 type 记录下来
  // 2.通过记录 type 和每一项遍历时的 type 做匹配 控制激活类名的显示
  const [type, setType] = useState('hot');
  const handleTabChange = (type) => {
    console.log(type);
    setType(type);
    // 基于列表的排序
    if (type === 'hot') {
      // 根据点赞数量排序
      // lodash
      setCommentList(_.orderBy(commentList, 'like', 'desc'));
    } else {
      // 根据创建时间排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  };

  // 发表评论
  const [content, setContent] = useState('');
  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidV4(),
        user: {
          uid: '30009257',
          avatar: 'https://www.keaitupian.cn/cjpic/frombd/0/253/936677050/470164789.jpg',
          uname: '黑马前端',
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'),
        like: 80,
      }
      ]);
    // 1.清楚输入框内容
    setContent('')
    // 2.重新聚焦
    inputRef.current.focus();
  };

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {tabs.map(item =>
                <span key={item.type}
                      onClick={() => handleTabChange(item.type)}
                      className={classNames('nav-item', {active: type === item.type})}>
                  {item.text}
                </span>)
            }
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={inputRef}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
              <div key={item.rpid} className="reply-item">
                {/* 头像 */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                        className="bili-avatar-img"
                        alt=""
                        src={item.user.avatar}
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* 用户名 */}
                  <div className="user-info">
                    <div className="user-name">{item.user.uname}</div>
                  </div>
                  {/* 评论内容 */}
                  <div className="root-reply">
                    <span className="reply-content">{item.content}</span>
                    <div className="reply-info">
                      {/* 评论时间 */}
                      <span className="reply-time">{item.ctime}</span>
                      {/* 评论数量 */}
                      <span className="reply-time">点赞数:{item.like}</span>
                      {/*条件：user.id === item.user.id*/}
                      {user.uid === item.user.uid  && <span className="delete-btn" onClick={() => handleDel(item.rpid)}>删除</span>}
                    </div>
                  </div>
                </div>
              </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
```

## 12. 组件间通信

### 父传子 props

**传递步骤**：

1.父组件传递数据，子组件标签身上绑定属性
2.子组件接收数据，props 参数

**父传子 demo：**

App.js：

```react
import React from "react";

// 父传子
// 1.父组件传递数据，子组件标签身上绑定属性
// 2.子组件接收数据，props 参数
function Son (props) {
    // props：对象包含了父组件传递过来的所有数据
    console.log(props);
    return <div>this is son, father's param is {props.name}</div>;
}

function App() {

    const name = 'this is app name';

    return (
        <div className="App">
            <Son name={name} />
        </div>
    );
}

export default App;
```

小 demo：

App.js：

```react
import React from "react";

// 父传子
// 1.父组件传递数据，子组件标签身上绑定属性
// 2.子组件接收数据，props 参数
function Son (props) {
    // props：对象包含了父组件传递过来的所有数据
    console.log(props);
    return <div>this is son, father's param is {props.name}</div>;
}

function App() {

    const name = 'this is app name';

    return (
        <div className="App">
            <Son
                name={name}
                age={18}
                isTrue={false}
                list={['vue', 'react']}
                cb={() => console.log(123)}
                child={<span>this is span</span>}
            />
        </div>
    );
}

export default App;
```

> **注意**：
>
> 1. 父组件几乎可以给子组件传任何东西，包括布尔，数值，数组，对象和函数等
> 2. 但是子组件不可修改父组件传递的属性，谁传递的谁修改



### 父传子 特殊的 prop children

组件包裹传递

App.js：

```react
import React from "react";

// 父传子
// 1.父组件传递数据，子组件标签身上绑定属性
// 2.子组件接收数据，props 参数
function Son (props) {
    console.log(props)
    return <div>this is son, {props.children}</div>
}

function App() {
    return (
        <div className="App">
            <Son>
                <span>this is span</span>
            </Son>
        </div>
    );
}

export default App;
```

显示：this is son,this is span

### 子传父

思路：子组件调用父组件中的函数并传递参数

App.js：

```react
import React, {useState} from "react";

// 核心：在子组件中调用父组件中的函数并传递实参
function Son ({onGetSonMsg}) {
    const sonMsg = 'this is son msg';
    return (
        <div>
            this is son
            <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
        </div>
    );
}

function App() {
    const [msg, setMsg] = useState('');
    const getMsg = (msg) => {
        console.log(msg);
        setMsg(msg);
    };
    return (
        <div className="App">
            this is App, {msg}
            <Son onGetSonMsg={getMsg} />
        </div>
    );
}

export default App;
```

### 使用状态提升实现兄弟组件通信

思路：借助“状态提升”机制，通过父组件进行兄弟组件之间的数据传递

![image-20240707205817066](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240707205817.png)

App.js：

```react
import React, {useState} from "react";

// 1.子传父 A -> App
// 2.子传父 B -> App
function A ({onGetAName}) {
    // A 组件中的数据
    const name = 'this is A name';
    return (
        <div>
            this is A component
            <button onClick={() => onGetAName(name)}>send</button>
        </div>
    );
}

function B (props) {
    return (
        <div>
            this is B component, {props.name}
        </div>
    );
}

function App() {

    const [name, setName] = useState('');
    const getAName = (name) => {
        console.log(name);
        setName(name);
    };

    return (
        <div className="App">
            this is App
            <A onGetAName={getAName}/>
            <B name={name}/>
        </div>
    );
}

export default App;
```

### 使用 context 机制跨层级组件通信

实现步骤：

1. 使用createContext方法创建一个上下文对象Ctx
2. 在顶层组件（App）中通过Ctx.Provider组件提供数据
3. 在底层组件（B）中通过useContext钩子函数获取消费数据

![image-20240707212308649](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240707212308.png)

App.js：

```react
import React, {createContext, useContext} from "react";

// App -> A -> B

// 1.createContext 方法创建一个上下文对象
const MsgContext = createContext();
// 2.在顶层组件通过 Provider 组件提供数据
// 3.在底层组件通过 useContext 钩子函数使用数据

function A () {
    return (
        <div>
            this is A component
            <B />
        </div>
    );
}

function B () {
    const msg = useContext(MsgContext);
    return (
        <div>
            this is B component, {msg}
        </div>
    );
}

function App() {
    const msg = 'this is app msg';
    return (
        <div className="App">
            <MsgContext.Provider value={msg}>
                this is App
                <A />
            </MsgContext.Provider>
        </div>
    );
}

export default App;
```

结果：

![image-20240707213150328](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240707213150.png)

使用场景：

![image-20240707213956128](https://hejiajun-img-bucket.oss-cn-wuhan-lr.aliyuncs.com/img/20240707213956.png)