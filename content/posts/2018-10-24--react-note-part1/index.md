---
title: Basics of react and react-router (Part I)
subTitle: Learn the Basics of react and react-router
category: "NOTE"
cover: react.png
---

## Install
1. install node
2. install create-react-app
3. using create-react-app to create a new project
```shell=
create-react-app newProject
```
4. run `npm start` to start project

## Project Structure
#### public 
用來存放一些靜態設定檔或是HTML檔案
manifest.json 則是用來設定 meta data 資訊

#### src
用來存放 react source

#### build
透過 `npm run build` 會建立 build 資料夾，並編譯出真正放在伺服器上的所有資料、程式

## JSX
JSX 是一種語法糖，將 JS 中的 類HTML 結構編譯為 JS 程式，幫助開發者更直覺的開發並且開發較好維護的程式碼。
```javascript=
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      // JSX 寫法    
      // <div className="App">
      //   <h1>React App</h1>
      // </div>

      //this is how react really doing, compile jsx to js
      //and this is why you haven't used React but still need  import it
      //不用 JSX 的寫法
      React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'))
    );
  }
}
```

## CSS in React
透過 import 外部的 CSS ，但此種用法必須搭配 webpack(css-loader)，而且此種方式加入的 CSS 會是全域的 CSS，如果有同名稱的選擇器會相互覆蓋
```javascript=
import './Person.css'

const Person = () => {
    return (
        <div className="Person">
            <p>Person Component</p>
        </div>
        
    )
}
```
透過 inline 的方式，但缺點是不能寫 mediaQuery, pseudo 元素，但可透過一個套件 [radium](https://github.com/FormidableLabs/radium)
```javascript=
//透過一般的 inline 方式
const Person = () => {
    return (
        <p style={{color: "red"}}>Person Component</p>
    )
}

//inline 方式也可以透過變數來控制 css
const Animal = () => {
    const style = {
        color: "red",
        border: "1px solid #000",
        borderRadius: "3px"
    }
    return (
        <p style={style}>Person Component</p>
    )
}

//透過 Radium 來使用CSS
import Radium, { StyleRoot } from 'radium'

//如果要透過 Radium 加上 media query 則必須在父元素包上 StyleRoot，其他用法不用
class App extends Component {
  render() {    
    return (
      <StyleRoot>             
          <h1>Hello</h1>
          <Comp />
      </StyleRoot>
    );
  }
}

//可以使用正常的 CSS，也可以使用 Pseudo 元素
const Person = () => {
  const style = {
        '@media (min-width: 500px)': {
            width: '450px',
            color: 'green'
        },
        color: 'red',
        ':hover': {
          color: 'pink'
        }
    }
  return (    
      <div style={style}>        
          <p>Start editing to see some magic happen :)</p>
      </div>    
  )
}

//最後必須呼叫 Radium 並把 component 傳入
const Comp = Radium(Person)

```

透過CSS Module

##### 啟用
以 create-react-app 舉例，需要先在 webpack 中啟用。
1. 先執行 `npm run eject` 
2. 找到 config 資料夾下的 webpack.config.*(dev or prod)
3. 找到 module 下面設定 css 的區塊（`test: /\.css$/`)
4. 在 css-loader 的部分加入 options(modules、localIdentName)
```javascript=
{
    loader: require.resolve('css-loader'),
    options: {
        importLoaders: 1,
        //啟用 modules 功能
        modules: true,
        //設定編譯過後的 css name 加上一些識別使其成為唯一值
        localIdentName: '[name]__[local]__[hash:base64:5]'
        
        //下為 .prod 中的屬性，不要蓋掉
        minimize: true,
        sourceMap: shouldUseSourceMap,
    },
},
```

##### Usage
```css=
.Person{
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}

.big{
    font-size: 24px;
}

.red{
    color: red;
}
```
```javascript=
import React from 'react'
//與引入外部 CSS 不同，啟用 CSS Module 後引入的會變成一個物件
import styles from './Person.css'

const Person = () => {
    return (
        <div className={styles.Person}>
            <p className={styles.big}>Person Component</p>
            <p className={styles.red}>Person Component</p>
        </div>
        
    )
}

export default Person

```

## Stateless and Stateful
| Stateful | Stateless | 
| -------- | -------- | 
| class Abc extends Component { ... }    | const Abc = (props) => { ... }     | 
| Access to State | X | 
| Lifecycle Hooks | X |
| Access State and Props via "this" | Access Props via "this" |
| `this.state.value & this.props.value2`  | `props.value` |

## Lifecycle Hooks
![](https://rangle.github.io/react-training/img/reactjs_component_lifecycle_functions.png)
不管在 Mounting 或是 Updating 階段且執行到 render hooks 時，如果有其他嵌套的子組件的話，會先執行子組件的 Lifecycle Hooks。

```javascript=
<Father>
    <Child />
</Father>
```
以上方例子來說，如果在各個 Hook 中下 log 的話會依照如下順序：
1. `running constructor in Father comp`
2. `running componentWillMount in Father comp`
3. `running render in Father comp`
4. `running constructor in Child comp`
5. `running componentWillMount in Child comp`
6. `running render in Child comp`
7. `running componentDidMount in Child comp`
8. `running componentDidMount in Father comp`

## How React Updates The DOM
並不是執行了 render 方法後，就一定會更新。
React 會透過比較 virtual DOM 來確認是否需要更新，需要才會真正的去操作 DOM，藉此來優化效能。

![](https://i.imgur.com/kqLfoZz.png)

