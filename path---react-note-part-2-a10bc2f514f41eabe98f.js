webpackJsonp([0xb792a2a97d74],{800:function(e,t){e.exports={data:{post:{id:"D:/document/blog/content/posts/2018-10-24--react-note-part2/index.md absPath of file >>> MarkdownRemark",html:'<h2>Fragments</h2>\n<p>React 16.2 Feature\n可以不用額外包一層div</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">// 原來的寫法\n&lt;div&gt;        \n  &lt;p&gt;First&lt;/p&gt;\n  &lt;p&gt;Second&lt;/p&gt;\n  &lt;p&gt;Thired&lt;/p&gt;\n&lt;/div&gt;\n\n// 新的用法\n&lt;&gt;\n  &lt;p&gt;First&lt;/p&gt;\n  &lt;p&gt;Second&lt;/p&gt;\n  &lt;p&gt;Thired&lt;/p&gt;\n&lt;/&gt;\n\n// 概念\n// 利用 HOC 直接回傳其 children \nexport default (props) =&gt; props.children</code></pre>\n      </div>\n<h2>HOC(High Order Component)</h2>\n<p>本質上只是一個函數，可以回傳 JSX、Stateless and Stateful component\n透過 HOC 可以將一些固定的邏輯抽取出來，或是增刪修改 state 或 props 。</p>\n<h4>e.g.</h4>\n<p>僅是把收到的 children 再回傳出去，也就是回傳 JSX</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">// Auxiliary(與 react 16.2 Fragments 一樣的作用)\n\nexport default (props) =&gt; props.children</code></pre>\n      </div>\n<h4>Usage</h4>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">render() {\n    return (\n      &lt;Aux&gt;\n        &lt;Cockpit click={this.Addhandler}/&gt;\n        &lt;ErrorBoundary&gt;\n          &lt;Persons persons={this.state.persons}/&gt;\n        &lt;/ErrorBoundary&gt;\n      &lt;/Aux&gt;\n    );\n  }</code></pre>\n      </div>\n<h4>e.g.</h4>\n<p>回傳一個 stateless component，作用是把傳進來的組件再包裹一層使用者自訂的 class </p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">import React, { Component } from &#39;react&#39;\n\nconst withClass = (Comp, classes) =&gt; {\n    return props =&gt; (\n        &lt;div className={classes}&gt; \n            &lt;Comp {...props}/&gt;\n        &lt;/div&gt;\n    )\n}\n\nexport default withClass</code></pre>\n      </div>\n<h4>Usage</h4>\n<p><code class="language-text">export default withClass(App, styles.App);</code></p>\n<h2>PropTypes</h2>\n<p>React 透過 PropTypes 來做類型檢測的功能。\nReact v15.5 開始，已把 PropTypes 拆做獨立的 library。\n使用上需要另外安裝 <code class="language-text">npm install --save prop-types</code></p>\n<h4>usage</h4>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">import PropTypes from &#39;prop-types&#39;\n\nconst Example = (props) =&gt; {\n  return (\n    &lt;div&gt;      \n      &lt;p&gt;{props.name}&lt;/p&gt;\n      &lt;p&gt;{props.age}&lt;/p&gt;\n    &lt;/div&gt;\n  )\n}\n\nExample.propTypes = {\n  name: PropTypes.string,\n  age: PropTypes.number\n}\n\nexport default Example</code></pre>\n      </div>\n<p><a href="http://www.css88.com/react/docs/typechecking-with-proptypes.html">PropTypes 中文文檔</a></p>\n<h1>React-router(V4) note</h1>\n<h2>Install</h2>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">npm install --save react-router-dom</code></pre>\n      </div>\n<h2>Introduction</h2>\n<h4>react-router 與 react-router-dom 的差別</h4>\n<p>react-router-dom 是基於 react-router 並針對瀏覽器環境加入一些功能，像是 Link、BrowserRouter和HashRouter。其他與 react-router 中相同的方法則是將其再導出而已。所以瀏覽器環境下使用 react-router-dom 即可。</p>\n<h2>Usage</h2>\n<p>需要在最外層使用 HashRouter 或 BrowserRouter，差別如下:</p>\n<h4>HashRouter</h4>\n<p>通過hash值來對路由進行控制，所以網址內會有個#</p>\n<h4>BrowserRouter</h4>\n<p>基於HTML5 history API (pushState, replaceState, popState)，但可能會有相容性的問題</p>\n<h4>Route</h4>\n<p>用來控制對應的路由顯示對應的組件，常用的屬性exact、path 以及 component。</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">&lt;Route exact path=&quot;/&quot; component={Homw} /&gt;\n&lt;Route path=&quot;/about&quot; component={About} /&gt;\n&lt;Route path=&quot;/hello&quot; render={() =&gt; &lt;h1&gt;Hello&lt;/h1} /&gt;</code></pre>\n      </div>\n<p><strong>exact</strong> 用來作完全匹配，預設為 false，會匹配 <code class="language-text">/about</code>、<code class="language-text">/about/a</code>、<code class="language-text">/about/b</code>，改為 true 的話便只會匹配<code class="language-text">/about</code>\n<strong>path</strong> 用來設定要匹配的路徑\n<strong>component</strong> 用來設定匹配後要顯示的組件\n<strong>render</strong> 用來設定匹配後要顯示的東西</p>\n<h4>Link、NavLink</h4>\n<p>控制路由跳轉</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">&lt;link to=&quot;/about&quot;/&gt;\n&lt;link to=&quot;/about?name=windy&quot;/&gt;\n&lt;link to={{\n     pathname:&#39;/about&#39;,\n     search:&#39;?name=angel&#39;,\n     hash:&#39;#women&#39;,\n     state:{fromDashboard:true}\n}}/&gt;</code></pre>\n      </div>\n<h4>Switch</h4>\n<p>只渲染出第一個與當前訪問地址匹配的 Route 或 Redirect\n否則只要匹配的都會顯示</p>\n<h4>Redirect</h4>\n<p>重新導向</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">&lt;Switch&gt;\n  &lt;Redirect from=&#39;/users/:id&#39; to=&#39;/users/profile/:id&#39;/&gt;\n  &lt;Route path=&#39;/users/profile/:id&#39; component={Profile}/&gt;\n&lt;/Switch&gt;</code></pre>\n      </div>\n<h4>match</h4>\n<p>match是在使用router之後被放入props中的一個屬性，在class創建的組件中我們需要通過this.props.match來獲取match之中的信息。match中包含的信息如下。\n<img src="https://i.imgur.com/btstriI.png"></p>\n<h3>參考來源</h3>\n<p><a href="http://www.ucamc.com/e-learning/javascript/278-%E7%B0%A1%E5%96%AE%E4%BB%8B%E7%B4%B9%E4%BA%86%E8%A7%A3react-router-4%E6%95%99%E5%AD%B8.html">一探究竟了解React-router 4簡易教學</a>\n<a href="https://hk.saowen.com/a/73172216c8b96ab4f135316b229c9d578a81be535f5c7feb4b06cc032a99c1d3">React 快速上手 - 07 前端路由 react-router</a></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Fragments"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React 16.2 Feature\n可以不用額外包一層div"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"// 原來的寫法\n<div>        \n  <p>First</p>\n  <p>Second</p>\n  <p>Thired</p>\n</div>\n\n// 新的用法\n<>\n  <p>First</p>\n  <p>Second</p>\n  <p>Thired</p>\n</>\n\n// 概念\n// 利用 HOC 直接回傳其 children \nexport default (props) => props.children"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"HOC(High Order Component)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"本質上只是一個函數，可以回傳 JSX、Stateless and Stateful component\n透過 HOC 可以將一些固定的邏輯抽取出來，或是增刪修改 state 或 props 。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"e.g."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"僅是把收到的 children 再回傳出去，也就是回傳 JSX"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"// Auxiliary(與 react 16.2 Fragments 一樣的作用)\n\nexport default (props) => props.children"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"render() {\n    return (\n      <Aux>\n        <Cockpit click={this.Addhandler}/>\n        <ErrorBoundary>\n          <Persons persons={this.state.persons}/>\n        </ErrorBoundary>\n      </Aux>\n    );\n  }"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"e.g."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"回傳一個 stateless component，作用是把傳進來的組件再包裹一層使用者自訂的 class "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"import React, { Component } from 'react'\n\nconst withClass = (Comp, classes) => {\n    return props => (\n        <div className={classes}> \n            <Comp {...props}/>\n        </div>\n    )\n}\n\nexport default withClass"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"export default withClass(App, styles.App);"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"PropTypes"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React 透過 PropTypes 來做類型檢測的功能。\nReact v15.5 開始，已把 PropTypes 拆做獨立的 library。\n使用上需要另外安裝 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install --save prop-types"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"import PropTypes from 'prop-types'\n\nconst Example = (props) => {\n  return (\n    <div>      \n      <p>{props.name}</p>\n      <p>{props.age}</p>\n    </div>\n  )\n}\n\nExample.propTypes = {\n  name: PropTypes.string,\n  age: PropTypes.number\n}\n\nexport default Example"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.css88.com/react/docs/typechecking-with-proptypes.html"},children:[{type:"text",value:"PropTypes 中文文檔"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"React-router(V4) note"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Install"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"npm install --save react-router-dom"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Introduction"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"react-router 與 react-router-dom 的差別"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"react-router-dom 是基於 react-router 並針對瀏覽器環境加入一些功能，像是 Link、BrowserRouter和HashRouter。其他與 react-router 中相同的方法則是將其再導出而已。所以瀏覽器環境下使用 react-router-dom 即可。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"需要在最外層使用 HashRouter 或 BrowserRouter，差別如下:"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"HashRouter"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"通過hash值來對路由進行控制，所以網址內會有個#"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"BrowserRouter"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"基於HTML5 history API (pushState, replaceState, popState)，但可能會有相容性的問題"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Route"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"用來控制對應的路由顯示對應的組件，常用的屬性exact、path 以及 component。"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:'<Route exact path="/" component={Homw} />\n<Route path="/about" component={About} />\n<Route path="/hello" render={() => <h1>Hello</h1} />'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"exact"}]},{type:"text",value:" 用來作完全匹配，預設為 false，會匹配 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/about"}]},{type:"text",value:"、"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/about/a"}]},{type:"text",value:"、"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/about/b"}]},{type:"text",value:"，改為 true 的話便只會匹配"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/about"}]},{type:"text",value:"\n"},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"path"}]},{type:"text",value:" 用來設定要匹配的路徑\n"},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"component"}]},{type:"text",value:" 用來設定匹配後要顯示的組件\n"},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"render"}]},{type:"text",value:" 用來設定匹配後要顯示的東西"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Link、NavLink"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"控制路由跳轉"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"<link to=\"/about\"/>\n<link to=\"/about?name=windy\"/>\n<link to={{\n     pathname:'/about',\n     search:'?name=angel',\n     hash:'#women',\n     state:{fromDashboard:true}\n}}/>"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Switch"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"只渲染出第一個與當前訪問地址匹配的 Route 或 Redirect\n否則只要匹配的都會顯示"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Redirect"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"重新導向"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"<Switch>\n  <Redirect from='/users/:id' to='/users/profile/:id'/>\n  <Route path='/users/profile/:id' component={Profile}/>\n</Switch>"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"match"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"match是在使用router之後被放入props中的一個屬性，在class創建的組件中我們需要通過this.props.match來獲取match之中的信息。match中包含的信息如下。\n"},{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/btstriI.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"參考來源"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.ucamc.com/e-learning/javascript/278-%E7%B0%A1%E5%96%AE%E4%BB%8B%E7%B4%B9%E4%BA%86%E8%A7%A3react-router-4%E6%95%99%E5%AD%B8.html"},children:[{type:"text",value:"一探究竟了解React-router 4簡易教學"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://hk.saowen.com/a/73172216c8b96ab4f135316b229c9d578a81be535f5c7feb4b06cc032a99c1d3"},children:[{type:"text",value:"React 快速上手 - 07 前端路由 react-router"}]}]}],data:{quirksMode:!1}},fields:{slug:"/react-note-part2/",prefix:"2018-10-24"},frontmatter:{title:"Basics of react and react-router (Part II)",subTitle:"Learn the Basics of react and react-router",cover:{childImageSharp:{resize:{src:"/static/react-90552fc53de18398a934d32aec962234-160fa.png"}}}}},author:{id:"D:/document/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Ben</strong> 紀錄學習過程中的筆記…</p>"},footnote:{id:"D:/document/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/react-note-part2/"}}}});
//# sourceMappingURL=path---react-note-part-2-a10bc2f514f41eabe98f.js.map