<div align='center'>
<img src='https://powerjson.github.io/PowerJSON-Website-CN/logo-noopa.jpeg' height='200px'>

<h1>PowerJSON</h1>

:clap: Powerjson 是由 JSON 改进而成的数据交换格式，它将 JSON 支持了部分 JavaScript 语法，使其更加高效可用，并且解决了许多 JSON 历史遗留下来的问题。

它支持 **单引号字符串**, **多行字符串**, **注释**, **运算符**, **导入文件**, **导入其它 PJSON 文件** 等。
</div>

### Simple Demo
```javascript
{
    // 字符串
    helloText: 'hello world',
    MultiLineText: `
        Welcome
        to
        PowerJSON!
    `,

    // 文件和导入
    myFile: new File('./file.txt'),
    importPJSONFile: new PJSON('./index2.pjson'),
    getFile: new GET('http://www.powerjson.org'),

    // 运算符
    tenDaySeconds: 60 * 60 * 24 * 10

    // 这里是注释！
    /* 注释2 */
}
```

### 兼容性
PowerJSON 支持所有兼容 [ES6](https://caniuse.com/#feat=es6) 的 **浏览器 / js 运行时**。

**浏览器:**
- IE >= 11
- Edge All
- Firefox >= 6
- Chrome >= 21
- Safari >= 7.1
- Opera >= 15

**Node.js:**
- Nodejs >= 6

### 文档
访问 [powerjson.org](http://www.powerjson.org) 查看我们的在线实例和 [教程](http://www.powerjson.org/)！

### 变更日志
每次发行版的细节和变更记录请访问 Github 上的 [发行日志](https://github.com/PowerJSON/PowerJSON/releases)。

### 协议
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Yingxuan (Bill) Dong
