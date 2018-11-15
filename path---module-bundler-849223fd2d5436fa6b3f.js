webpackJsonp([48202776212062],{797:function(e,t){e.exports={data:{post:{id:"D:/document/blog/content/posts/2018-10-24--module-bundler/index.md absPath of file >>> MarkdownRemark",html:'<h1></h1>\n<p><img src="https://i.imgur.com/tPPsDbS.png"></p>\n<h2>Webpack</h2>\n<h3>Install</h3>\n<p>Install in develop environment</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">npm install --save-dev webpack webpack-dev-server webpack-cli\n\n// 安裝 babel 相關的 module\n// babel-core: Babel 的主要程式\n// babel-loader: 讓 webpack 能夠使用 Babel\n// babel-preset-env: 將 ES6+ 的語法轉譯為 ES5\n// babel-preset-react: 編譯 JSX\nnpm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react\n\n// 安裝 eslint 相關的 module\n// eslint: 主程式\n// eslint-loader: 讓 webpack 使用 eslint\n// babel-eslint: 讓 eslint 能夠提示其尚不支援的語法錯誤\nnpm install --save-dev eslint eslint-loader babel-eslint\n\n// 使用 eslint-config-airbnb 的規則需要安裝以下 modules\nnpm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react</code></pre>\n      </div>\n<h3>Setup</h3>\n<p><code class="language-text">package.json</code> 新增 <code class="language-text">start</code> script</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">  &quot;scripts&quot;: {\n    &quot;start&quot;: &quot;webpack-dev-server --config ./webpack.config.js --mode development&quot;\n  }</code></pre>\n      </div>\n<p><code class="language-text">.babelrc</code> 設定 babel 相關的 config</p>\n<div class="gatsby-highlight" data-language="json=">\n      <pre class="language-json="><code class="language-json=">{\n    &quot;presets&quot;: [\n        &quot;env&quot;,\n        &quot;react&quot;\n    ]\n}</code></pre>\n      </div>\n<p><code class="language-text">.eslintrc</code> 設定 eslint 相關的 config</p>\n<div class="gatsby-highlight" data-language="json=">\n      <pre class="language-json="><code class="language-json=">{\n    &quot;parser&quot;: &quot;babel-eslint&quot;,\n    &quot;rules&quot;: {\n        // 如果程式中有 console 則會提示 warning\n        &quot;no-console&quot;: &quot;warn&quot;\n    },\n    // 使用 eslint-config-airbnb 的規則需要增加下面 extends 設定\n    &quot;extends&quot;: [        \n        &quot;airbnb&quot;\n    ]\n}</code></pre>\n      </div>\n<p><code class="language-text">webpack.config.js</code></p>\n<ul>\n<li>entry: 提供程式的進入點給 webpack</li>\n<li>output: bundle 後檔案存放位置及檔名</li>\n<li>module: 當中的 rules 用來設定多個規則，供 webpack 比對檔名(透過test屬性)，並使用正確的loader</li>\n<li>resolve: import 檔案時，如果副檔名是 resolve 中設定的則可以省略</li>\n<li>\n<p>devServer: 設定要給 server 提供服務的路徑</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">module.exports = {    \nentry: [\n    &#39;./src/index.js&#39;\n],\noutput: {\n    path: __dirname + &#39;/dist&#39;,\n    publicPath: &#39;/&#39;,\n    filename: &#39;bundle.js&#39;\n},    \nmodule: {\n    rules: [\n        {\n            test: /\\.(js|jsx)/,\n            exclude: /node_modules/,\n            use: [&#39;babel-loader&#39;]\n        },\n        {\n            test: /\\.(js|jsx)/,\n            exclude: /node_modules/,\n            use: [&#39;eslint-loader&#39;]\n        }\n    ]\n},\nresolve: {\n    extensions: [&#39;.js&#39;, &#39;.jsx&#39;]\n},\ndevServer: {\n    contentBase: &#39;./dist&#39;\n}\n}</code></pre>\n      </div>\n</li>\n</ul>\n<p><a href="https://webpack.jakoblind.no/">online webpack confing creator</a></p>\n<h2>Parcel</h2>\n<h3>Install</h3>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">npm install --save-dev parcel-bundler babel-preset-env babel-preset-react</code></pre>\n      </div>\n<h3>Setup</h3>\n<ul>\n<li>有使用到 Babel 一樣要設置 <code class="language-text">.babelrc</code></li>\n<li>\n<p>在<code class="language-text">package.json</code>中設定 <code class="language-text">start</code> script</p>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">&quot;scripts&quot;: {\n&quot;start&quot;: &quot;parcel index.html&quot;\n},</code></pre>\n      </div>\n</li>\n</ul>\n<h3>Usage</h3>\n<p>執行 <code class="language-text">npm start</code> ，Parcel 會從 <code class="language-text">index.html</code> 為進入點開始解析，任何有用到的JS、CSS、IMAGE等等都會打包完成</p>\n<h3>Refference</h3>\n<p><a href="https://parceljs.org/">官網</a>\n<a href="http://www.css88.com/doc/parcel/getting_started.html">中文文檔</a></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/tPPsDbS.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Webpack"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Install"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Install in develop environment"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"npm install --save-dev webpack webpack-dev-server webpack-cli\n\n// 安裝 babel 相關的 module\n// babel-core: Babel 的主要程式\n// babel-loader: 讓 webpack 能夠使用 Babel\n// babel-preset-env: 將 ES6+ 的語法轉譯為 ES5\n// babel-preset-react: 編譯 JSX\nnpm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react\n\n// 安裝 eslint 相關的 module\n// eslint: 主程式\n// eslint-loader: 讓 webpack 使用 eslint\n// babel-eslint: 讓 eslint 能夠提示其尚不支援的語法錯誤\nnpm install --save-dev eslint eslint-loader babel-eslint\n\n// 使用 eslint-config-airbnb 的規則需要安裝以下 modules\nnpm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Setup"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"package.json"}]},{type:"text",value:" 新增 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"start"}]},{type:"text",value:" script"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:'  "scripts": {\n    "start": "webpack-dev-server --config ./webpack.config.js --mode development"\n  }'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:".babelrc"}]},{type:"text",value:" 設定 babel 相關的 config"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"json="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-json="]},children:[{type:"element",tagName:"code",properties:{className:["language-json="]},children:[{type:"text",value:'{\n    "presets": [\n        "env",\n        "react"\n    ]\n}'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:".eslintrc"}]},{type:"text",value:" 設定 eslint 相關的 config"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"json="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-json="]},children:[{type:"element",tagName:"code",properties:{className:["language-json="]},children:[{type:"text",value:'{\n    "parser": "babel-eslint",\n    "rules": {\n        // 如果程式中有 console 則會提示 warning\n        "no-console": "warn"\n    },\n    // 使用 eslint-config-airbnb 的規則需要增加下面 extends 設定\n    "extends": [        \n        "airbnb"\n    ]\n}'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"webpack.config.js"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"entry: 提供程式的進入點給 webpack"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"output: bundle 後檔案存放位置及檔名"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"module: 當中的 rules 用來設定多個規則，供 webpack 比對檔名(透過test屬性)，並使用正確的loader"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"resolve: import 檔案時，如果副檔名是 resolve 中設定的則可以省略"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"devServer: 設定要給 server 提供服務的路徑"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"module.exports = {    \nentry: [\n    './src/index.js'\n],\noutput: {\n    path: __dirname + '/dist',\n    publicPath: '/',\n    filename: 'bundle.js'\n},    \nmodule: {\n    rules: [\n        {\n            test: /\\.(js|jsx)/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        },\n        {\n            test: /\\.(js|jsx)/,\n            exclude: /node_modules/,\n            use: ['eslint-loader']\n        }\n    ]\n},\nresolve: {\n    extensions: ['.js', '.jsx']\n},\ndevServer: {\n    contentBase: './dist'\n}\n}"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://webpack.jakoblind.no/"},children:[{type:"text",value:"online webpack confing creator"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Parcel"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Install"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"npm install --save-dev parcel-bundler babel-preset-env babel-preset-react"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Setup"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"有使用到 Babel 一樣要設置 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:".babelrc"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"在"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"package.json"}]},{type:"text",value:"中設定 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"start"}]},{type:"text",value:" script"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:'"scripts": {\n"start": "parcel index.html"\n},'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"執行 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm start"}]},{type:"text",value:" ，Parcel 會從 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"index.html"}]},{type:"text",value:" 為進入點開始解析，任何有用到的JS、CSS、IMAGE等等都會打包完成"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Refference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://parceljs.org/"},children:[{type:"text",value:"官網"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"http://www.css88.com/doc/parcel/getting_started.html"},children:[{type:"text",value:"中文文檔"}]}]}],data:{quirksMode:!1}},fields:{slug:"/module-bundler/",prefix:"2018-10-24"},frontmatter:{title:"Module Bundler",subTitle:"Introduction to webpack and parcel",cover:{childImageSharp:{resize:{src:"/static/webpack-4591ad9879f1084b13d4ecc08e2eaaf2-160fa.png"}}}}},author:{id:"D:/document/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Ben</strong> 紀錄學習過程中的筆記…</p>"},footnote:{id:"D:/document/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/module-bundler/"}}}});
//# sourceMappingURL=path---module-bundler-849223fd2d5436fa6b3f.js.map