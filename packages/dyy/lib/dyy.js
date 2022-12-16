'use strict';
console.log(123);
const cli = require('@dyy/cli')
const initCmd = require('@dyy/init/command')
const createCmd = require('@dyy/create/command')

function dyy(argv) {
    return cli().command(initCmd).command(createCmd).parse(argv);
}

module.exports = dyy;
