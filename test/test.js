const path = require('path');

const pjson = require('./../index.node');

async function init() {
    console.log(pjson.parse(`
        {
            text: 'hello'
        }
    `));

    console.log(await pjson.parseFile(path.join(__dirname, './test.pjson')));

    console.log(pjson.stringify(pjson.parse(`
        {
            text: 'hello'
        }
    `)))
}

init();
