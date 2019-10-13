const path = require('path');

const pj = require('./../index.node.js');

async function init() {
    console.log(await pj.parseFile(path.join(__dirname, './test')));
}

init();
