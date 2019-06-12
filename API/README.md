# wx-serveAPI
自动化构建小程序API

---
## clone下来之后在项目文件下执行npm install便可使用

## 接口文档
### 随机拼接口
- 接口：/suijipin
- 参数：id
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/suijipin?id=1

### 帮你拼接口
- 接口：/bangnipin
- 参数：food_name
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/bangnipin?food_name=鱼香肉丝
- 说明：在菜品总表里面查询

### 帮你拼荤菜接口
- 接口：/help_hc
- 参数：food_hc_taste、food_hc_caixi
- 请求：get
- 成功返回值：array[]//一个数组，内容为菜的内容
- 查看接口数据（例）：https://zn1121.com/help_hc?food_hc_taste="咸鲜味"andfood_hc_caixi="浙菜"
- 说明：在荤菜表里面通过查询

### 帮你拼素菜接口
- 接口：/help_scid
- 参数：food_hcid
- 请求：get
- 成功返回值：array[]//一个数组，内容为菜的内容
- 查看接口数据（例）：https://zn1121.com/help_sc?food_sc_taste="咸鲜味"andfood_sc_caixi="浙菜"
- 说明：在素菜表里面通过查询

### 自主拼接口
- 接口：/zizhupin
- 参数：food_name
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/zizhupin?food_name=鱼香肉丝
- 说明：这个接口是判断你选择的是素菜，给你返回荤菜的列表，反之同理

### 自主拼二级页面接口
- 接口：/zizhupin_index
- 参数：food_name
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/zizhupin_index?food_name=鱼香肉丝
- 说明：这个接口是将页面传过来数据进行查询，返回的是菜品的详细信息

### 自主拼推荐接口
- 接口：/zizhupin_tuijian
- 参数：无
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的名字
- 查看接口数据（例）：https://zn1121.com/zizhupin_tuijian
- 说明：这个接口是随机返回9道菜的名字作为自主拼页面推荐

### 食物百科 为你推荐接口
- 接口：/wiki_name
- 参数：无
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的名字
- 查看接口数据（例）：https://zn1121.com/wiki_name
- 说明：说明：这个接口是随机返回5道菜的名字作为食物百科页面推荐

### 食物百科 小贴士接口
- 接口：/wiki_tieshi
- 参数：无
- 请求：get
- 成功返回值：array[]//一个数组，内容为食物小知识
- 查看接口数据（例）：https://zn1121.com/wiki_tieshi
- 说明：这个接口是随机返回5条小知识

### 食物百科 搜索页面
- 接口：/wiki_baike
- 参数：food_search
- 请求：get
- 成功返回值：array[]//一个数组，内容为一道菜的饮食文化等
- 查看接口数据（例）：https://zn1121.com/wiki_baike?food_search=麻婆豆腐
- 说明：这个接口是向服务器发送一条数据，然后进行匹配，返回这个数据的饮食文化



