---
title: Basics of react and react-router (Part II)
subTitle: Learn the Basics of react and react-router
category: "NOTE"
cover: react.png
---

## Fragments
React 16.2 Feature
可以不用額外包一層div
```javascript=
// 原來的寫法
<div>        
  <p>First</p>
  <p>Second</p>
  <p>Thired</p>
</div>

// 新的用法
<>
  <p>First</p>
  <p>Second</p>
  <p>Thired</p>
</>

// 概念
// 利用 HOC 直接回傳其 children 
export default (props) => props.children
```

## HOC(High Order Component)
本質上只是一個函數，可以回傳 JSX、Stateless and Stateful component
透過 HOC 可以將一些固定的邏輯抽取出來，或是增刪修改 state 或 props 。

#### e.g.
僅是把收到的 children 再回傳出去，也就是回傳 JSX
```javascript=
// Auxiliary(與 react 16.2 Fragments 一樣的作用)

export default (props) => props.children
```
#### Usage
```javascript=
render() {
    return (
      <Aux>
        <Cockpit click={this.Addhandler}/>
        <ErrorBoundary>
          <Persons persons={this.state.persons}/>
        </ErrorBoundary>
      </Aux>
    );
  }
```

#### e.g.
回傳一個 stateless component，作用是把傳進來的組件再包裹一層使用者自訂的 class 
```javascript=
import React, { Component } from 'react'

const withClass = (Comp, classes) => {
    return props => (
        <div className={classes}> 
            <Comp {...props}/>
        </div>
    )
}

export default withClass
```

#### Usage
`export default withClass(App, styles.App);`

## PropTypes
React 透過 PropTypes 來做類型檢測的功能。
React v15.5 開始，已把 PropTypes 拆做獨立的 library。
使用上需要另外安裝 `npm install --save prop-types`

#### usage
```javascript=
import PropTypes from 'prop-types'

const Example = (props) => {
  return (
    <div>      
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  )
}

Example.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default Example
```
[PropTypes 中文文檔](http://www.css88.com/react/docs/typechecking-with-proptypes.html)

# React-router(V4) note
## Install
```javascript=
npm install --save react-router-dom
```
## Introduction
#### react-router 與 react-router-dom 的差別
react-router-dom 是基於 react-router 並針對瀏覽器環境加入一些功能，像是 Link、BrowserRouter和HashRouter。其他與 react-router 中相同的方法則是將其再導出而已。所以瀏覽器環境下使用 react-router-dom 即可。


## Usage
需要在最外層使用 HashRouter 或 BrowserRouter，差別如下:

#### HashRouter
通過hash值來對路由進行控制，所以網址內會有個#
#### BrowserRouter
基於HTML5 history API (pushState, replaceState, popState)，但可能會有相容性的問題
#### Route
用來控制對應的路由顯示對應的組件，常用的屬性exact、path 以及 component。

```javascript=
<Route exact path="/" component={Homw} />
<Route path="/about" component={About} />
<Route path="/hello" render={() => <h1>Hello</h1} />
```
**exact** 用來作完全匹配，預設為 false，會匹配 `/about`、`/about/a`、`/about/b`，改為 true 的話便只會匹配`/about`
**path** 用來設定要匹配的路徑
**component** 用來設定匹配後要顯示的組件
**render** 用來設定匹配後要顯示的東西

#### Link、NavLink
控制路由跳轉
```javascript=
<link to="/about"/>
<link to="/about?name=windy"/>
<link to={{
     pathname:'/about',
     search:'?name=angel',
     hash:'#women',
     state:{fromDashboard:true}
}}/>
```
#### Switch
只渲染出第一個與當前訪問地址匹配的 Route 或 Redirect
否則只要匹配的都會顯示
#### Redirect
重新導向
```javascript=
<Switch>
  <Redirect from='/users/:id' to='/users/profile/:id'/>
  <Route path='/users/profile/:id' component={Profile}/>
</Switch>
```
#### match
match是在使用router之後被放入props中的一個屬性，在class創建的組件中我們需要通過this.props.match來獲取match之中的信息。match中包含的信息如下。
![](https://i.imgur.com/btstriI.png)

### 參考來源
[一探究竟了解React-router 4簡易教學](http://www.ucamc.com/e-learning/javascript/278-%E7%B0%A1%E5%96%AE%E4%BB%8B%E7%B4%B9%E4%BA%86%E8%A7%A3react-router-4%E6%95%99%E5%AD%B8.html)
[React 快速上手 - 07 前端路由 react-router](https://hk.saowen.com/a/73172216c8b96ab4f135316b229c9d578a81be535f5c7feb4b06cc032a99c1d3)
