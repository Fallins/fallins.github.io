---
title: Junior to Senior Web Developer Roadmap (Part II)
subTitle: "The note of udemy course: The Complete Junior to Senior Web Developer Roadmap(2018)"
category: "NOTE"
cover: photo-1490474418585-ba9bad8fd0ea-cover.jpg
---

## SSR (Server Side Rendering)
### SSR VS CSR
CSR 需要在第一次時將所有需要用到的資源全部下載完後，使用者才能看到第一屏的畫面。
優點是後續的操作將會非常快，缺點則是初次訪問時必須下載較大量的資源。
![](https://i.imgur.com/3dC2Nkj.png)

SSR 則是取得HTML檔案後，透過解析的過程在去下載需要的 JS、CSS 檔案，使用者能先看到畫面。
但如果需要有完整的互動功能，與 CSR 一樣要等全部檔案下載解析完成後才能操作。
![](https://i.imgur.com/hRn3weS.png)

所以兩著之間最大的差別就是在於使用者看到首屏的時間。

**[Server-side vs Client-side Routing](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)**
### Gatsby

### Next

#### Install
```javascript=
npm install --save next react react-dom
```

#### Setup
在跟目錄建立一個 `pages` 資料，並執行 start script。
`packages.json`
```javascript=
"scripts": {
    "start": "next"
}
```

#### Usage
在 `pages` 資料夾中新增兩個檔案，`index.js`、`about.js`。
Next 會使用資料夾中的檔案名來做 route，也就是說在新增了兩個檔案之後，我們可以直接訪問 `/index`、`/about` 這兩個頁面。

另外，Next 還提供了 Link 來提供給 Client 做頁面的切換，透過 Link 只會下載所需的檔案並不會重新向伺服器發起完整的請求。
如果是透過 a 標籤來做導向，則會發起完整的請求。

`index.js`
```javascript=
import Link from 'next/link'

const Index = () => (
    <div>
        <h1>this is index page.</h1>
        <Link href='/about'>
            <button>About</button>
        </Link>
        
        
        //<a href='/about'>About</a>   
        
    </div>
)

export default Index
```

`about.js`
```javascript=
import Link from 'next/link'

const About = () => (
    <div>
        <h1>this is about page.</h1>
        <Link href='/index'>
            <button>Back</button>
        </Link>
    </div>
)

export default About
```


#### Refference
**another choice for SEO**
[prerender.io](https://prerender.io/)

## Security
![](https://i.imgur.com/ilf9rzs.png)
### SQL Injection

### 3rd Party Libraries
#### nsp (Node Security Platform)
已於 2018/04 被 NPM [收購](https://medium.com/npm-inc/npm-acquires-lift-security-258e257ef639)，會繼續提供服務直到 2018/09 ，之後安全性檢查的功能將由 NPM 提供(NPM@6 之後)，[透過 `npm audit` 取代原本nsp的檢查](https://blog.npmjs.org/post/175511531085/the-node-security-platform-service-is-shutting)。

[nsp](https://github.com/nodesecurity/nsp) 會幫忙檢查所有使用到的套件是否有安全性的問題
##### Install & Usage
```javascript=
// Install
npm install nsp -g

// Usage
nsp check
```
檢查出有漏洞的套件，及其版本、路徑等等資訊。
![](https://i.imgur.com/FMsaqV9.png)
#### [snyk](https://github.com/snyk/snyk)
另一個可以檢查所有相依套件的漏洞的套件，但是與 nsp 一樣的共同問題就是套件之間的相依是層層嵌套的。
假設A套件底下的B套件在某個版本有安全性漏洞。雖然在下個版本修復了，但是A套件並沒有相對的更新，導致B套件更新之後A套件也不能用了，於是就只能等待A套件的更新，或是不使用A套件，目前沒有好的解法只能從中取捨。


### Logging
#### [morgan](https://github.com/expressjs/morgan)
使用簡單，幫助紀錄HTTP Request 的 LOG。

#### [winston](https://github.com/winstonjs/winston/tree/2.x)
全方位 Logger 工具(? ，可以客製化logger。


### HTTPS Everywhere
如上面提到的，透過 Https 來保護機敏性資料的傳送。


### XSS (Javascript Injection)
XSS 透過與使用者的互動來達到攻擊目的。最常見的就是留言版的頁面，如果攻擊者透過留言板輸入惡意的代碼，網站又沒有做好防護(例如: 未過濾使用者的輸入、輸出時候也沒有過濾HTML Tag等等)，就會導致其他使用者在進到此頁面時被攻擊竊取資訊。

[XSS攻擊的深入探討與防護之道](https://www.qa-knowhow.com/?p=2992)


### CSRF (Cross-Site Request Forgery)
[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)




### Secure Headers

#### [Helmet](https://github.com/helmetjs/helmet)
Helmet 會適當設定 HTTP 標頭，提高安全性以及防範一些已知的漏洞。

![](https://i.imgur.com/kE5ASpB.png)
如上圖所示，在沒有戴上頭盔之前，Header 中會有 x-powered-by: Express，如此就有可能被有心人士方便的尋找漏洞並進行惡意行為。

![](https://i.imgur.com/GRyY9Xe.png)
戴上頭盔以後，x-powered-by: Express 沒有了，多了其他能夠幫助提升安全性(應該? 的 Header 屬性。

##### Reference
[express 中文文檔](http://expressjs.com/zh-tw/advanced/best-practice-security.html)
[為你的網站帶上帽子— 使用helmet 保護Express 應用](https://juejin.im/post/5a24fd8f51882509e5438247)
[HTTP - Header Fields](https://www.tutorialspoint.com/http/http_header_fields.htm)




### Access Control
控制使用者能夠存取的內容，給予適當的權限予以適當的使用者。
像是必須要登入才能使用某些特定功能，或是要特定的 domain 才能存取 api。




### Data Management
透過替資料庫(部分欄位)加密，以及登入或註冊時密碼的加密，來保護使用者的隱私。

#### Refernece
[How to Store User Passwords and Overcome Security Threats in 2017](https://blog.rangle.io/how-to-store-user-passwords-and-overcome-security-threats-in-2017/)


### Reference
[2017鐵人賽資安系列](https://ithelp.ithome.com.tw/articles/10186125)
[hacksplaining(A place to demonstrate how hacker acttack your system)](https://www.hacksplaining.com/lessons)
[Watch Your Hack](https://watchyourhack.com/)





## Performance III
### CDN
Content Delivery Network 或 Content Distribution Network 簡稱 CDN。
透過使用 CDN 服務，可以就近向最近的伺服器請求資料加快存取速度，並針對其做 Caching 加快第一次以後存取的速度。還可以防護像是 DDos 之類的惡意攻擊。
[Cloudflare](https://www.cloudflare.com/zh-tw/)、[Azure CDN](https://azure.microsoft.com/zh-tw/services/cdn/)、[AWS CloudFront](https://aws.amazon.com/tw/cloudfront/?sc_channel=PS&sc_campaign=acquisition_TW&sc_publisher=google&sc_medium=cloudfront_b&sc_content=cloudfront_e&sc_detail=amazon%20cloudfront&sc_category=cloudfront&sc_segment=165240657802&sc_matchtype=e&sc_country=TW&s_kwcid=AL!4422!3!165240657802!e!!g!!amazon%20cloudfront&ef_id=Wr9hAwAAAEjDEDyy:20180821091504:s) 是目前比較有名的幾個 CDN 服務供應商。

#### Reference
[wiki](https://zh.wikipedia.org/wiki/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF)

### GZIP
GZIP是一種壓縮的技術，一般來說使用者如果向有使用 GZIP 技術的網站發起請求，伺服器端會先將文件(HTML、CSS etc.)壓縮，而壓縮過後大概會是原始文件的 30%-40% 的大小而已，大幅度的減少需要傳輸的內容，藉以提高速度並減少流量的消耗。
在 Production 下，實作壓縮最好的地方是在反向代理伺服器。

#### Usage
```javascript=
// work with GZIP
var compression = require('compression')
var express = require('express')

var app = express()
app.use(compression())
```
![](https://i.imgur.com/Wz3MAii.png)


#### [Brotli](https://github.com/google/brotli)
由 GOOGLE 提出的新的壓縮技術，壓縮比高於 GZIP。

對於現代瀏覽器的支援度
![](https://i.imgur.com/srhakkU.png)


![](https://i.imgur.com/1F6vWf9.png)

#### Reference
[淺談網頁壓縮GZIP](https://blog.csdn.net/gscaiyucheng/article/details/28282533)
[Express DOC](http://expressjs.com/zh-tw/advanced/best-practice-performance.html)
[Brotli Wiki](https://zh.wikipedia.org/wiki/Brotli)
[Brotli Compression](https://medium.com/@samparkinson_/brotli-compression-34e436efca0)

### Caching

[循序漸進理解HTTP Cache 機制](https://blog.techbridge.cc/2017/06/17/cache-introduction/)

