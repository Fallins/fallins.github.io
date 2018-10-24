webpackJsonp([57657175938236],{792:function(e,t){e.exports={data:{post:{id:"D:/document/blog/content/posts/2018-10-24--junior-to-senior-part2/index.md absPath of file >>> MarkdownRemark",html:'<h2>Security</h2>\n<p><img src="https://i.imgur.com/ilf9rzs.png"></p>\n<h3>SQL Injection</h3>\n<h3>3rd Party Libraries</h3>\n<h4>nsp (Node Security Platform)</h4>\n<p>已於 2018/04 被 NPM <a href="https://medium.com/npm-inc/npm-acquires-lift-security-258e257ef639">收購</a>，會繼續提供服務直到 2018/09 ，之後安全性檢查的功能將由 NPM 提供(NPM@6 之後)，<a href="https://blog.npmjs.org/post/175511531085/the-node-security-platform-service-is-shutting">透過 <code class="language-text">npm audit</code> 取代原本nsp的檢查</a>。</p>\n<p><a href="https://github.com/nodesecurity/nsp">nsp</a> 會幫忙檢查所有使用到的套件是否有安全性的問題</p>\n<h5>Install &#x26; Usage</h5>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">// Install\nnpm install nsp -g\n\n// Usage\nnsp check</code></pre>\n      </div>\n<p>檢查出有漏洞的套件，及其版本、路徑等等資訊。\n<img src="https://i.imgur.com/FMsaqV9.png"></p>\n<h4><a href="https://github.com/snyk/snyk">snyk</a></h4>\n<p>另一個可以檢查所有相依套件的漏洞的套件，但是與 nsp 一樣的共同問題就是套件之間的相依是層層嵌套的。\n假設A套件底下的B套件在某個版本有安全性漏洞。雖然在下個版本修復了，但是A套件並沒有相對的更新，導致B套件更新之後A套件也不能用了，於是就只能等待A套件的更新，或是不使用A套件，目前沒有好的解法只能從中取捨。</p>\n<h3>Logging</h3>\n<h4><a href="https://github.com/expressjs/morgan">morgan</a></h4>\n<p>使用簡單，幫助紀錄HTTP Request 的 LOG。</p>\n<h4><a href="https://github.com/winstonjs/winston/tree/2.x">winston</a></h4>\n<p>全方位 Logger 工具(? ，可以客製化logger。</p>\n<h3>HTTPS Everywhere</h3>\n<p>如上面提到的，透過 Https 來保護機敏性資料的傳送。</p>\n<h3>XSS (Javascript Injection)</h3>\n<p>XSS 透過與使用者的互動來達到攻擊目的。最常見的就是留言版的頁面，如果攻擊者透過留言板輸入惡意的代碼，網站又沒有做好防護(例如: 未過濾使用者的輸入、輸出時候也沒有過濾HTML Tag等等)，就會導致其他使用者在進到此頁面時被攻擊竊取資訊。</p>\n<p><a href="https://www.qa-knowhow.com/?p=2992">XSS攻擊的深入探討與防護之道</a></p>\n<h3>CSRF (Cross-Site Request Forgery)</h3>\n<p><a href="https://blog.techbridge.cc/2017/02/25/csrf-introduction/">讓我們來談談 CSRF</a></p>\n<h3>Secure Headers</h3>\n<h4><a href="https://github.com/helmetjs/helmet">Helmet</a></h4>\n<p>Helmet 會適當設定 HTTP 標頭，提高安全性以及防範一些已知的漏洞。</p>\n<p><img src="https://i.imgur.com/kE5ASpB.png">\n如上圖所示，在沒有戴上頭盔之前，Header 中會有 x-powered-by: Express，如此就有可能被有心人士方便的尋找漏洞並進行惡意行為。</p>\n<p><img src="https://i.imgur.com/GRyY9Xe.png">\n戴上頭盔以後，x-powered-by: Express 沒有了，多了其他能夠幫助提升安全性(應該? 的 Header 屬性。</p>\n<h5>Reference</h5>\n<p><a href="http://expressjs.com/zh-tw/advanced/best-practice-security.html">express 中文文檔</a>\n<a href="https://juejin.im/post/5a24fd8f51882509e5438247">為你的網站帶上帽子— 使用helmet 保護Express 應用</a>\n<a href="https://www.tutorialspoint.com/http/http_header_fields.htm">HTTP - Header Fields</a></p>\n<h3>Access Control</h3>\n<p>控制使用者能夠存取的內容，給予適當的權限予以適當的使用者。\n像是必須要登入才能使用某些特定功能，或是要特定的 domain 才能存取 api。</p>\n<h3>Data Management</h3>\n<p>透過替資料庫(部分欄位)加密，以及登入或註冊時密碼的加密，來保護使用者的隱私。</p>\n<h4>Refernece</h4>\n<p><a href="https://blog.rangle.io/how-to-store-user-passwords-and-overcome-security-threats-in-2017/">How to Store User Passwords and Overcome Security Threats in 2017</a></p>\n<h3>Reference</h3>\n<p><a href="https://ithelp.ithome.com.tw/articles/10186125">2017鐵人賽資安系列</a>\n<a href="https://www.hacksplaining.com/lessons">hacksplaining(A place to demonstrate how hacker acttack your system)</a>\n<a href="https://watchyourhack.com/">Watch Your Hack</a></p>\n<h2><a href="https://jwt.io/">JWT (Json Web Token)</a></h2>\n<h3>Traditional Cookie-Based Auth</h3>\n<p>需要在 Server 端(DB)，儲存使用者的 Session，藉以達成帶有狀態的請求。\n<img src="https://i.imgur.com/akxyHjm.png"></p>\n<h3>Token-Based Auth</h3>\n<p>不需要儲存使用者 Session，需要的資訊可以從 Token 中解析出來。\n<img src="https://i.imgur.com/lMLnI3n.png"></p>\n<h3>Reference</h3>\n<p><a href="https://medium.com/origino/%E7%B0%A1%E6%BD%94%E5%AE%89%E5%85%A8%E7%9A%84%E8%B3%87%E6%96%99%E5%82%B3%E8%BC%B8%E6%96%B9%E5%BC%8F-json-web-token-jwt-a87093cc14d4">簡潔安全的資料傳輸方式</a>\n<a href="https://www.guonanjun.com/220.html">JWT介紹和優缺點及適用場景分析</a></p>\n<h2>Performance III</h2>\n<h3>CDN</h3>\n<p>Content Delivery Network 或 Content Distribution Network 簡稱 CDN。\n透過使用 CDN 服務，可以就近向最近的伺服器請求資料加快存取速度，並針對其做 Caching 加快第一次以後存取的速度。還可以防護像是 DDos 之類的惡意攻擊。\n<a href="https://www.cloudflare.com/zh-tw/">Cloudflare</a>、<a href="https://azure.microsoft.com/zh-tw/services/cdn/">Azure CDN</a>、<a href="https://aws.amazon.com/tw/cloudfront/?sc_channel=PS&#x26;sc_campaign=acquisition_TW&#x26;sc_publisher=google&#x26;sc_medium=cloudfront_b&#x26;sc_content=cloudfront_e&#x26;sc_detail=amazon%20cloudfront&#x26;sc_category=cloudfront&#x26;sc_segment=165240657802&#x26;sc_matchtype=e&#x26;sc_country=TW&#x26;s_kwcid=AL!4422!3!165240657802!e!!g!!amazon%20cloudfront&#x26;ef_id=Wr9hAwAAAEjDEDyy:20180821091504:s">AWS CloudFront</a> 是目前比較有名的幾個 CDN 服務供應商。</p>\n<h4>Reference</h4>\n<p><a href="https://zh.wikipedia.org/wiki/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF">wiki</a></p>\n<h3>GZIP</h3>\n<p>GZIP是一種壓縮的技術，一般來說使用者如果向有使用 GZIP 技術的網站發起請求，伺服器端會先將文件(HTML、CSS etc.)壓縮，而壓縮過後大概會是原始文件的 30%-40% 的大小而已，大幅度的減少需要傳輸的內容，藉以提高速度並減少流量的消耗。\n在 Production 下，實作壓縮最好的地方是在反向代理伺服器。</p>\n<h4>Usage</h4>\n<div class="gatsby-highlight" data-language="javascript=">\n      <pre class="language-javascript="><code class="language-javascript=">// work with GZIP\nvar compression = require(&#39;compression&#39;)\nvar express = require(&#39;express&#39;)\n\nvar app = express()\napp.use(compression())</code></pre>\n      </div>\n<p><img src="https://i.imgur.com/Wz3MAii.png"></p>\n<h4><a href="https://github.com/google/brotli">Brotli</a></h4>\n<p>由 GOOGLE 提出的新的壓縮技術，壓縮比高於 GZIP。</p>\n<p>對於現代瀏覽器的支援度\n<img src="https://i.imgur.com/srhakkU.png"></p>\n<p><img src="https://i.imgur.com/1F6vWf9.png"></p>\n<h4>Reference</h4>\n<p><a href="https://blog.csdn.net/gscaiyucheng/article/details/28282533">淺談網頁壓縮GZIP</a>\n<a href="http://expressjs.com/zh-tw/advanced/best-practice-performance.html">Express DOC</a>\n<a href="https://zh.wikipedia.org/wiki/Brotli">Brotli Wiki</a>\n<a href="https://medium.com/@samparkinson_/brotli-compression-34e436efca0">Brotli Compression</a></p>\n<h3>Caching</h3>\n<p><a href="https://blog.techbridge.cc/2017/06/17/cache-introduction/">循序漸進理解HTTP Cache 機制</a></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Security"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/ilf9rzs.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"SQL Injection"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"3rd Party Libraries"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"nsp (Node Security Platform)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"已於 2018/04 被 NPM "},{type:"element",tagName:"a",properties:{href:"https://medium.com/npm-inc/npm-acquires-lift-security-258e257ef639"},children:[{type:"text",value:"收購"}]},{type:"text",value:"，會繼續提供服務直到 2018/09 ，之後安全性檢查的功能將由 NPM 提供(NPM@6 之後)，"},{type:"element",tagName:"a",properties:{href:"https://blog.npmjs.org/post/175511531085/the-node-security-platform-service-is-shutting"},children:[{type:"text",value:"透過 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm audit"}]},{type:"text",value:" 取代原本nsp的檢查"}]},{type:"text",value:"。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/nodesecurity/nsp"},children:[{type:"text",value:"nsp"}]},{type:"text",value:" 會幫忙檢查所有使用到的套件是否有安全性的問題"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"Install & Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"// Install\nnpm install nsp -g\n\n// Usage\nnsp check"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"檢查出有漏洞的套件，及其版本、路徑等等資訊。\n"},{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/FMsaqV9.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/snyk/snyk"},children:[{type:"text",value:"snyk"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"另一個可以檢查所有相依套件的漏洞的套件，但是與 nsp 一樣的共同問題就是套件之間的相依是層層嵌套的。\n假設A套件底下的B套件在某個版本有安全性漏洞。雖然在下個版本修復了，但是A套件並沒有相對的更新，導致B套件更新之後A套件也不能用了，於是就只能等待A套件的更新，或是不使用A套件，目前沒有好的解法只能從中取捨。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Logging"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/expressjs/morgan"},children:[{type:"text",value:"morgan"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"使用簡單，幫助紀錄HTTP Request 的 LOG。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/winstonjs/winston/tree/2.x"},children:[{type:"text",value:"winston"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"全方位 Logger 工具(? ，可以客製化logger。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"HTTPS Everywhere"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"如上面提到的，透過 Https 來保護機敏性資料的傳送。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"XSS (Javascript Injection)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"XSS 透過與使用者的互動來達到攻擊目的。最常見的就是留言版的頁面，如果攻擊者透過留言板輸入惡意的代碼，網站又沒有做好防護(例如: 未過濾使用者的輸入、輸出時候也沒有過濾HTML Tag等等)，就會導致其他使用者在進到此頁面時被攻擊竊取資訊。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.qa-knowhow.com/?p=2992"},children:[{type:"text",value:"XSS攻擊的深入探討與防護之道"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CSRF (Cross-Site Request Forgery)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blog.techbridge.cc/2017/02/25/csrf-introduction/"},children:[{type:"text",value:"讓我們來談談 CSRF"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Secure Headers"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/helmetjs/helmet"},children:[{type:"text",value:"Helmet"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Helmet 會適當設定 HTTP 標頭，提高安全性以及防範一些已知的漏洞。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/kE5ASpB.png"},children:[]},{type:"text",value:"\n如上圖所示，在沒有戴上頭盔之前，Header 中會有 x-powered-by: Express，如此就有可能被有心人士方便的尋找漏洞並進行惡意行為。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/GRyY9Xe.png"},children:[]},{type:"text",value:"\n戴上頭盔以後，x-powered-by: Express 沒有了，多了其他能夠幫助提升安全性(應該? 的 Header 屬性。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://expressjs.com/zh-tw/advanced/best-practice-security.html"},children:[{type:"text",value:"express 中文文檔"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://juejin.im/post/5a24fd8f51882509e5438247"},children:[{type:"text",value:"為你的網站帶上帽子— 使用helmet 保護Express 應用"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://www.tutorialspoint.com/http/http_header_fields.htm"},children:[{type:"text",value:"HTTP - Header Fields"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Access Control"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"控制使用者能夠存取的內容，給予適當的權限予以適當的使用者。\n像是必須要登入才能使用某些特定功能，或是要特定的 domain 才能存取 api。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Data Management"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"透過替資料庫(部分欄位)加密，以及登入或註冊時密碼的加密，來保護使用者的隱私。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Refernece"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blog.rangle.io/how-to-store-user-passwords-and-overcome-security-threats-in-2017/"},children:[{type:"text",value:"How to Store User Passwords and Overcome Security Threats in 2017"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://ithelp.ithome.com.tw/articles/10186125"},children:[{type:"text",value:"2017鐵人賽資安系列"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://www.hacksplaining.com/lessons"},children:[{type:"text",value:"hacksplaining(A place to demonstrate how hacker acttack your system)"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://watchyourhack.com/"},children:[{type:"text",value:"Watch Your Hack"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://jwt.io/"},children:[{type:"text",value:"JWT (Json Web Token)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Traditional Cookie-Based Auth"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"需要在 Server 端(DB)，儲存使用者的 Session，藉以達成帶有狀態的請求。\n"},{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/akxyHjm.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Token-Based Auth"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"不需要儲存使用者 Session，需要的資訊可以從 Token 中解析出來。\n"},{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/lMLnI3n.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://medium.com/origino/%E7%B0%A1%E6%BD%94%E5%AE%89%E5%85%A8%E7%9A%84%E8%B3%87%E6%96%99%E5%82%B3%E8%BC%B8%E6%96%B9%E5%BC%8F-json-web-token-jwt-a87093cc14d4"},children:[{type:"text",value:"簡潔安全的資料傳輸方式"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://www.guonanjun.com/220.html"},children:[{type:"text",value:"JWT介紹和優缺點及適用場景分析"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Performance III"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"CDN"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Content Delivery Network 或 Content Distribution Network 簡稱 CDN。\n透過使用 CDN 服務，可以就近向最近的伺服器請求資料加快存取速度，並針對其做 Caching 加快第一次以後存取的速度。還可以防護像是 DDos 之類的惡意攻擊。\n"},{type:"element",tagName:"a",properties:{href:"https://www.cloudflare.com/zh-tw/"},children:[{type:"text",value:"Cloudflare"}]},{type:"text",value:"、"},{type:"element",tagName:"a",properties:{href:"https://azure.microsoft.com/zh-tw/services/cdn/"},children:[{type:"text",value:"Azure CDN"}]},{type:"text",value:"、"},{type:"element",tagName:"a",properties:{href:"https://aws.amazon.com/tw/cloudfront/?sc_channel=PS&sc_campaign=acquisition_TW&sc_publisher=google&sc_medium=cloudfront_b&sc_content=cloudfront_e&sc_detail=amazon%20cloudfront&sc_category=cloudfront&sc_segment=165240657802&sc_matchtype=e&sc_country=TW&s_kwcid=AL!4422!3!165240657802!e!!g!!amazon%20cloudfront&ef_id=Wr9hAwAAAEjDEDyy:20180821091504:s"},children:[{type:"text",value:"AWS CloudFront"}]},{type:"text",value:" 是目前比較有名的幾個 CDN 服務供應商。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://zh.wikipedia.org/wiki/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF"},children:[{type:"text",value:"wiki"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"GZIP"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"GZIP是一種壓縮的技術，一般來說使用者如果向有使用 GZIP 技術的網站發起請求，伺服器端會先將文件(HTML、CSS etc.)壓縮，而壓縮過後大概會是原始文件的 30%-40% 的大小而已，大幅度的減少需要傳輸的內容，藉以提高速度並減少流量的消耗。\n在 Production 下，實作壓縮最好的地方是在反向代理伺服器。"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript="},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript="]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript="]},children:[{type:"text",value:"// work with GZIP\nvar compression = require('compression')\nvar express = require('express')\n\nvar app = express()\napp.use(compression())"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/Wz3MAii.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/google/brotli"},children:[{type:"text",value:"Brotli"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"由 GOOGLE 提出的新的壓縮技術，壓縮比高於 GZIP。"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"對於現代瀏覽器的支援度\n"},{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/srhakkU.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"https://i.imgur.com/1F6vWf9.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blog.csdn.net/gscaiyucheng/article/details/28282533"},children:[{type:"text",value:"淺談網頁壓縮GZIP"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"http://expressjs.com/zh-tw/advanced/best-practice-performance.html"},children:[{type:"text",value:"Express DOC"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://zh.wikipedia.org/wiki/Brotli"},children:[{type:"text",value:"Brotli Wiki"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://medium.com/@samparkinson_/brotli-compression-34e436efca0"},children:[{type:"text",value:"Brotli Compression"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Caching"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blog.techbridge.cc/2017/06/17/cache-introduction/"},children:[{type:"text",value:"循序漸進理解HTTP Cache 機制"}]}]}],data:{quirksMode:!1}},fields:{slug:"/junior-to-senior-part2/",prefix:"2018-10-24"},frontmatter:{title:"Junior to Senior Web Developer Roadmap (Part II)",subTitle:"The note of udemy course: The Complete Junior to Senior Web Developer Roadmap(2018)",cover:{childImageSharp:{resize:{src:"/fallins.github.io/static/photo-1490474418585-ba9bad8fd0ea-cover-1b0e3b65008965142a63adb983e4a904-ada8c.jpg"}}}}},author:{id:"D:/document/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Ben</strong> 紀錄學習過程中的筆記…</p>"},footnote:{id:"D:/document/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:""},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/junior-to-senior-part2/"}}}});
//# sourceMappingURL=path---junior-to-senior-part-2-55e2f0ddefcb56cb9cca.js.map