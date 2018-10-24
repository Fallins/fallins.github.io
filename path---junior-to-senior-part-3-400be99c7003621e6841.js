webpackJsonp([0x8c4667d7671c],{794:function(e,t){e.exports={data:{post:{id:"D:/document/blog/content/posts/2018-10-24--junior-to-senior-part3/index.md absPath of file >>> MarkdownRemark",html:'<h2>Docker</h2>\n<h3>Install</h3>\n<p>透過官網下載符合系統的安裝檔，一步一步完成安裝即可。</p>\n<p><a href="https://store.docker.com/editions/community/docker-ce-desktop-windows">Docker</a></p>\n<h2><a href="https://redis.io/download">Redis</a></h2>\n<p>Redis 是一個儲存在記憶體中(memory)的鍵值(key-value)資料庫。</p>\n<h3>Install</h3>\n<p>透過官網下載安裝檔進行安裝</p>\n<h3>Usage</h3>\n<p>透過命令行執行 <code class="language-text">redis-cli</code>\n<img src="https://i.imgur.com/fprWjAH.png"></p>\n<h3>Data Types</h3>\n<h4>Hash</h4>\n<p>可以想像成 JS 中的物件</p>\n<div class="gatsby-highlight" data-language="shell=">\n      <pre class="language-shell="><code class="language-shell=">HMSET user id 45 name &quot;Jessie&quot;\n# 大概是像這樣\n# const user = {\n#     id: 45,\n#     name: &quot;Jessie&quot;\n# }\n\nHGET user id\n# &quot;45&quot;\nHGET user name\n# &quot;Jessie&quot;\n\nHGETALL user\n# &quot;id&quot;\n# &quot;45&quot;\n# &quot;name&quot;\n# &quot;Jessie&quot;</code></pre>\n      </div>\n<h4>List</h4>\n<div class="gatsby-highlight" data-language="shell=">\n      <pre class="language-shell="><code class="language-shell=">lpush list &quot;item1&quot;\n\n# 取得 List 所有資料\nlrange list 0 -1\n# &quot;item1&quot;\n\n# 從 List 最左邊加入一個 item\nlpush list &quot;item2&quot;\n# &quot;item2&quot;\n# &quot;item1&quot;\n\n# 從 List 最右邊加入一個 item\nrpush list &quot;item3&quot;\n# &quot;item2&quot;\n# &quot;item1&quot;\n# &quot;item3&quot;\n\n# 同理，移除的話可以用 LPOP、RPOP</code></pre>\n      </div>\n<h4>SET、Sorted SET</h4>\n<h5>SET</h5>\n<p>是無序且唯一的。</p>\n<div class="gatsby-highlight" data-language="shell=">\n      <pre class="language-shell="><code class="language-shell="># 加入 KEY 為 set 的 SET\nSADD set 1 2 3 4 5\n\n# 取得 set 的值\nSMEMBERS set\n# &quot;1&quot;\n# &quot;2&quot;\n# &quot;3&quot;\n# &quot;4&quot;\n# &quot;5&quot;\n\n# 在加入一個 hello 進入 set\nSADD set &quot;hello&quot;\n\n# 可以看出 set 是無序的\nSMEMBERS set\n# &quot;hello&quot;\n# &quot;4&quot;\n# &quot;3&quot;\n# &quot;5&quot;\n# &quot;1&quot;\n# &quot;2&quot;\n \n# 確認是否為 set 中的值\nSISMEMBER set &quot;hello&quot;\n# &quot;1&quot; =&gt; 代表有\n# &quot;0&quot; =&gt; 代表沒有</code></pre>\n      </div>\n<h5>Sorted Sets</h5>\n<p>有序，但一樣是唯一的。</p>\n<div class="gatsby-highlight" data-language="shell=">\n      <pre class="language-shell="><code class="language-shell="># 加入 KEY 為 sortedset 的 Sorted SET\nZADD sortedset 50 &quot;item1&quot;\nZADD sortedset 40 &quot;item2&quot;\n\n# 取得 sortedset 的值\nZRANGE sortedset 0 -1\n# 會根據加入時給的分數由小到大排列\n# &quot;item2&quot;\n# &quot;item1&quot;\n\n# 在加入一個 hello 進入 set\nZADD sortedset 10 &quot;item3&quot;\n# &quot;item3&quot;\n# &quot;item2&quot;\n# &quot;item1&quot;\n\nZRANK sortedset &quot;item2&quot;\n# &quot;1&quot; =&gt; 代表其排定的 Index</code></pre>\n      </div>\n<h3>Reference</h3>\n<p><a href="https://redis.io/topics/quickstart">Quick Start</a>\n<a href="https://blog.techbridge.cc/2016/06/18/redis-introduction/">資料庫的好夥伴：Redis</a></p>\n<h2>AWS</h2>\n<h3>Lambda</h3>\n<h3>IAM</h3>\n<p>由 AWS 提供的一個權限控管服務，透過此服務來控管對 AWS 上其他資源的訪問。</p>\n<p><a href="https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html">官方DOC</a>\n<a href="https://serverless.com/framework/docs/providers/aws/guide/iam/">serverless DOC</a></p>\n<h3>Serverless</h3>\n<h4>Install</h4>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">npm install -g serverless</code></pre>\n      </div>\n<h4>Usage</h4>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">// type sls as alias\n\n// this cmd can show all commands that can use\nserverless\n\n// 會在當前目錄創建一個模板(aws-nodejs)\nsls create -t aws-nodejs\n\n// 利用 IAM 增加一個使用者，並使用其權限進行操作，僅需設定一次\nsls config credentials --provider aws --key AKIAIMM3C43GP5LBTUFA --secret 9odr/t5NB9GL5HBpK5 x1gLuj+o/jDO8tJSjWjQcP\n\n// 透過 serverless 部署至 lambda\nsls deploy\n\n// 測試部署是否成功\n// 加上 local 僅會在本地端測試 並不會計量\nsls invoke local --function test\n// 沒加上 local 的話就會被AWS計量\nsls invoke --function test</code></pre>\n      </div>\n<p><img src="https://i.imgur.com/XjOX0fB.png">\nYML Config</p>\n<p><img src="https://i.imgur.com/sKorLgh.png">\nHandler</p>\n<p><img src="https://i.imgur.com/F5v10fX.png">\nDeploying</p>\n<p><img src="https://i.imgur.com/SZAkZP9.png">\nINVOKE</p>\n<h2>CI/CD</h2>\n<h3>CI (Continuous Integration)</h3>\n<h3>CD (Continuous Delivery &#x26; Continuous Deployment)</h3>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Docker"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Install"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"透過官網下載符合系統的安裝檔，一步一步完成安裝即可。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://store.docker.com/editions/community/docker-ce-desktop-windows"},children:[{type:"text",value:"Docker"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://redis.io/download"},children:[{type:"text",value:"Redis"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Redis 是一個儲存在記憶體中(memory)的鍵值(key-value)資料庫。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Install"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"透過官網下載安裝檔進行安裝"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"透過命令行執行 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"redis-cli"}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/fprWjAH.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Data Types"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Hash"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"可以想像成 JS 中的物件"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell="]},children:[{type:"element",tagName:"code",properties:{className:["language-shell="]},children:[{type:"text",value:'HMSET user id 45 name "Jessie"\n# 大概是像這樣\n# const user = {\n#     id: 45,\n#     name: "Jessie"\n# }\n\nHGET user id\n# "45"\nHGET user name\n# "Jessie"\n\nHGETALL user\n# "id"\n# "45"\n# "name"\n# "Jessie"'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"List"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell="]},children:[{type:"element",tagName:"code",properties:{className:["language-shell="]},children:[{type:"text",value:'lpush list "item1"\n\n# 取得 List 所有資料\nlrange list 0 -1\n# "item1"\n\n# 從 List 最左邊加入一個 item\nlpush list "item2"\n# "item2"\n# "item1"\n\n# 從 List 最右邊加入一個 item\nrpush list "item3"\n# "item2"\n# "item1"\n# "item3"\n\n# 同理，移除的話可以用 LPOP、RPOP'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"SET、Sorted SET"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"SET"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"是無序且唯一的。"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell="]},children:[{type:"element",tagName:"code",properties:{className:["language-shell="]},children:[{type:"text",value:'# 加入 KEY 為 set 的 SET\nSADD set 1 2 3 4 5\n\n# 取得 set 的值\nSMEMBERS set\n# "1"\n# "2"\n# "3"\n# "4"\n# "5"\n\n# 在加入一個 hello 進入 set\nSADD set "hello"\n\n# 可以看出 set 是無序的\nSMEMBERS set\n# "hello"\n# "4"\n# "3"\n# "5"\n# "1"\n# "2"\n \n# 確認是否為 set 中的值\nSISMEMBER set "hello"\n# "1" => 代表有\n# "0" => 代表沒有'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"Sorted Sets"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"有序，但一樣是唯一的。"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell="]},children:[{type:"element",tagName:"code",properties:{className:["language-shell="]},children:[{type:"text",value:'# 加入 KEY 為 sortedset 的 Sorted SET\nZADD sortedset 50 "item1"\nZADD sortedset 40 "item2"\n\n# 取得 sortedset 的值\nZRANGE sortedset 0 -1\n# 會根據加入時給的分數由小到大排列\n# "item2"\n# "item1"\n\n# 在加入一個 hello 進入 set\nZADD sortedset 10 "item3"\n# "item3"\n# "item2"\n# "item1"\n\nZRANK sortedset "item2"\n# "1" => 代表其排定的 Index'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://redis.io/topics/quickstart"},children:[{type:"text",value:"Quick Start"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://blog.techbridge.cc/2016/06/18/redis-introduction/"},children:[{type:"text",value:"資料庫的好夥伴：Redis"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"AWS"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Lambda"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"IAM"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"由 AWS 提供的一個權限控管服務，透過此服務來控管對 AWS 上其他資源的訪問。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html"},children:[{type:"text",value:"官方DOC"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://serverless.com/framework/docs/providers/aws/guide/iam/"},children:[{type:"text",value:"serverless DOC"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Serverless"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Install"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"npm install -g serverless"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"// type sls as alias\n\n// this cmd can show all commands that can use\nserverless\n\n// 會在當前目錄創建一個模板(aws-nodejs)\nsls create -t aws-nodejs\n\n// 利用 IAM 增加一個使用者，並使用其權限進行操作，僅需設定一次\nsls config credentials --provider aws --key AKIAIMM3C43GP5LBTUFA --secret 9odr/t5NB9GL5HBpK5 x1gLuj+o/jDO8tJSjWjQcP\n\n// 透過 serverless 部署至 lambda\nsls deploy\n\n// 測試部署是否成功\n// 加上 local 僅會在本地端測試 並不會計量\nsls invoke local --function test\n// 沒加上 local 的話就會被AWS計量\nsls invoke --function test"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/XjOX0fB.png"},children:[]},{type:"text",value:"\nYML Config"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/sKorLgh.png"},children:[]},{type:"text",value:"\nHandler"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/F5v10fX.png"},children:[]},{type:"text",value:"\nDeploying"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/SZAkZP9.png"},children:[]},{type:"text",value:"\nINVOKE"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"CI/CD"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CI (Continuous Integration)"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CD (Continuous Delivery & Continuous Deployment)"}]}],data:{quirksMode:!1}},fields:{slug:"/junior-to-senior-part3/",prefix:"2018-10-24"},frontmatter:{title:"Junior to Senior Web Developer Roadmap (Part III)",subTitle:"The note of udemy course: The Complete Junior to Senior Web Developer Roadmap(2018)",cover:{childImageSharp:{resize:{src:"/fallins.github.io/static/photo-1490474418585-ba9bad8fd0ea-cover-1b0e3b65008965142a63adb983e4a904-ada8c.jpg"}}}}},author:{id:"D:/document/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Ben</strong> 紀錄學習過程中的筆記…</p>"},footnote:{id:"D:/document/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/junior-to-senior-part3/"}}}});
//# sourceMappingURL=path---junior-to-senior-part-3-400be99c7003621e6841.js.map