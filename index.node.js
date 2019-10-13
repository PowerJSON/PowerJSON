'use strict';

const path = require('path'),
    fs = require('fs');

const parser = require('./parser/pjson.node.js');

function parse(pjson) {
    return parser.parse(pjson, {
        filepath: ''
    })
}

function parseFile(filepath) {
    if (path.extname(filepath) === '') {
        filepath = filepath + '.pjson';
    }

    return new Promise(function(res, rej) {
        const pjsonFile = fs.readFile(filepath, function(err, pjsonFile) {
            if (err) {
                rej();
                return;
            }
            res(parser.parse(pjsonFile.toString(), {
                filepath
            }))
        })
    })
}

function parseFileSync(filepath) {
    if (path.extname(filepath) === '') {
        filepath = filepath + '.pjson';
    }

    const pjsonFile = fs.readFileSync(filepath).toString();
    return parser.parse(pjsonFile, {
        filepath
    })
}

function stringify(pjson) {
    return JSON.stringify(pjson);
}

function stringifyFile(filepath, pjson) {
    if (path.extname(filepath) === '') {
        filepath = filepath + '.pjson';
    }

    return new Promise(function(res, rej) {
        fs.writeFile(filepath, JSON.stringify(pjson), function(err) {
            if (err) {
                rej();
                return;
            }
            res();
        })
    })
}

function stringifyFileSync(filepath, pjson) {
    if (path.extname(filepath) === '') {
        filepath = filepath + '.pjson';
    }

    fs.writeFileSync(filepath, JSON.stringify(pjson));
}

module.exports = {
    parse,
    parseFile,
    parseFileSync,
    stringify,
    stringifyFile,
    stringifyFileSync
}
