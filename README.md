# chrome-extensions

### stackoverflow-speedup

因为Stackoverflow网页上使用了[https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js)这个文件，而google的网站基本都被墙完了，所以打开Stackoverflow的时候会由于请求这个文件导致整个页面被挂起，几秒钟过去了页面还是白茫茫的一片。

这个插件解决了这个问题，当请求这个文件的时候会被重定向到: [https://code.jquery.com/jquery-3.2.1.min.js](https://code.jquery.com/jquery-3.2.1.min.js)
