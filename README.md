<div align='center'>
<img src='https://powerjson.github.io/PowerJSON-Website/logo-noopa.jpeg' height='200px'>

<h1>PowerJSON</h1>

:clap: Powerjson is json's improved data format that takes advantage of JSON and JavaScript syntax and adds many new features to solve some of JSON's long-standing problems.

It supports **single quoted strings**, **multi-line strings**, **comments**, **operators**, **import files**, **import PJSON files**, and more.
</div>

### Simple Demo
```javascript
{
    // strings
    helloText: 'hello world',
    MultiLineText: `
        Welcome
        to
        PowerJSON!
    `,

    // file and import
    myFile: new File('./file.txt'),
    importPJSONFile: new PJSON('./index2.pjson'),
    getFile: new GET('http://www.powerjson.org'),

    // operator
    tenDaySeconds: 60 * 60 * 24 * 10

    // here is the comment!
    /* comment2 */
}
```

### Compatibility
PowerJSON supports all **browsers / js runtime** that support [ES6](https://caniuse.com/#feat=es6).

**Browser:**
- IE >= 11
- Edge All
- Firefox >= 6
- Chrome >= 21
- Safari >= 7.1
- Opera >= 15

**Node.js:**
- Nodejs >= 6

### Documentation
To check out live examples and [docs](http://www.powerjson.org/), visit [powerjson.org](http://www.powerjson.org).

### Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/PowerJSON/PowerJSON/releases).

### License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Yingxuan (Bill) Dong
