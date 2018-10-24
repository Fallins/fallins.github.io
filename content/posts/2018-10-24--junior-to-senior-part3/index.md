---
title: Junior to Senior Web Developer Roadmap (Part III)
subTitle: "The note of udemy course: The Complete Junior to Senior Web Developer Roadmap(2018)"
category: "NOTE"
cover: photo-1490474418585-ba9bad8fd0ea-cover.jpg
---


## [JWT (Json Web Token)](https://jwt.io/)
### Traditional Cookie-Based Auth
需要在 Server 端(DB)，儲存使用者的 Session，藉以達成帶有狀態的請求。
![](https://i.imgur.com/akxyHjm.png)

### Token-Based Auth
不需要儲存使用者 Session，需要的資訊可以從 Token 中解析出來。
![](https://i.imgur.com/lMLnI3n.png)

### Reference
[簡潔安全的資料傳輸方式](https://medium.com/origino/%E7%B0%A1%E6%BD%94%E5%AE%89%E5%85%A8%E7%9A%84%E8%B3%87%E6%96%99%E5%82%B3%E8%BC%B8%E6%96%B9%E5%BC%8F-json-web-token-jwt-a87093cc14d4)
[JWT介紹和優缺點及適用場景分析](https://www.guonanjun.com/220.html)

## Docker

### Install
透過官網下載符合系統的安裝檔，一步一步完成安裝即可。

[Docker](https://store.docker.com/editions/community/docker-ce-desktop-windows)


## [Redis](https://redis.io/download)
Redis 是一個儲存在記憶體中(memory)的鍵值(key-value)資料庫。
### Install
透過官網下載安裝檔進行安裝
### Usage
透過命令行執行 `redis-cli` 
![](https://i.imgur.com/fprWjAH.png)
### Data Types
#### Hash
可以想像成 JS 中的物件
```shell=
HMSET user id 45 name "Jessie"
# 大概是像這樣
# const user = {
#     id: 45,
#     name: "Jessie"
# }

HGET user id
# "45"
HGET user name
# "Jessie"

HGETALL user
# "id"
# "45"
# "name"
# "Jessie"
```
#### List
```shell=
lpush list "item1"

# 取得 List 所有資料
lrange list 0 -1
# "item1"

# 從 List 最左邊加入一個 item
lpush list "item2"
# "item2"
# "item1"

# 從 List 最右邊加入一個 item
rpush list "item3"
# "item2"
# "item1"
# "item3"

# 同理，移除的話可以用 LPOP、RPOP
```
#### SET、Sorted SET
##### SET
是無序且唯一的。
```shell=
# 加入 KEY 為 set 的 SET
SADD set 1 2 3 4 5

# 取得 set 的值
SMEMBERS set
# "1"
# "2"
# "3"
# "4"
# "5"

# 在加入一個 hello 進入 set
SADD set "hello"

# 可以看出 set 是無序的
SMEMBERS set
# "hello"
# "4"
# "3"
# "5"
# "1"
# "2"
 
# 確認是否為 set 中的值
SISMEMBER set "hello"
# "1" => 代表有
# "0" => 代表沒有
```
##### Sorted Sets
有序，但一樣是唯一的。
```shell=
# 加入 KEY 為 sortedset 的 Sorted SET
ZADD sortedset 50 "item1"
ZADD sortedset 40 "item2"

# 取得 sortedset 的值
ZRANGE sortedset 0 -1
# 會根據加入時給的分數由小到大排列
# "item2"
# "item1"

# 在加入一個 hello 進入 set
ZADD sortedset 10 "item3"
# "item3"
# "item2"
# "item1"

ZRANK sortedset "item2"
# "1" => 代表其排定的 Index
```
### Reference
[Quick Start](https://redis.io/topics/quickstart)
[資料庫的好夥伴：Redis](https://blog.techbridge.cc/2016/06/18/redis-introduction/)


## AWS
### Lambda

### IAM
由 AWS 提供的一個權限控管服務，透過此服務來控管對 AWS 上其他資源的訪問。

[官方DOC](https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html)
[serverless DOC](https://serverless.com/framework/docs/providers/aws/guide/iam/)
### Serverless
#### Install
```javascript=
npm install -g serverless
```
#### Usage
```javascript=
// type sls as alias

// this cmd can show all commands that can use
serverless

// 會在當前目錄創建一個模板(aws-nodejs)
sls create -t aws-nodejs

// 利用 IAM 增加一個使用者，並使用其權限進行操作，僅需設定一次
sls config credentials --provider aws --key AKIAIMM3C43GP5LBTUFA --secret 9odr/t5NB9GL5HBpK5 x1gLuj+o/jDO8tJSjWjQcP

// 透過 serverless 部署至 lambda
sls deploy

// 測試部署是否成功
// 加上 local 僅會在本地端測試 並不會計量
sls invoke local --function test
// 沒加上 local 的話就會被AWS計量
sls invoke --function test
```

![](https://i.imgur.com/XjOX0fB.png)
YML Config

![](https://i.imgur.com/sKorLgh.png)
Handler

![](https://i.imgur.com/F5v10fX.png)
Deploying

![](https://i.imgur.com/SZAkZP9.png)
INVOKE

## CI/CD
### CI (Continuous Integration)

### CD (Continuous Delivery & Continuous Deployment)