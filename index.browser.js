/**
 * Power JSON
 * @version 1.0.0-alpha
 *
 * @browserSupport
 * Browsers:
 * IE >= 11
 * Edge All
 * Firefox >= 6
 * Chrome >= 21
 * Safari >= 7.1
 * Opera >= 15
 *
 * Nodejs:
 * Nodejs >= 6
 *
 * @feature
 * 1. comment support
 * 2. {id: 1} instead of {"id": 1} (No quotes)
 * 3. single quote support (support both '' and "")
 * 4. multi-line string support
 * 5. operator support, e.g. {id: 2 * (1 + 1)}
 * 6. file support e.g. {file: new File('./myfile.txt')}
 * 7. GET support e.g. {file: new GET('http://www.xxx.com')}
 * 8. import support e.g. {anotherPJFile: new PJSON('./file2.pjson')}
 */

'use strict';

const parser = require('./parser/pjson.browser.js');

function parse(pjson) {
    return parser.parse(pjson)
}

function stringify(pjson) {
    return JSON.stringify(pjson);
}

window.PJSON = {
    parse,
    stringify
}
