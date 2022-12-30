'use strict';
const cli = require('@dyy/cli')
const initCmd = require('@dyy/init/command')
const createCmd = require('@dyy/create/command')
const addCmd = require('@dyy/add')

function dyy(argv) {
    return cli().command(initCmd).command(createCmd).command(addCmd).parse(argv);
}

module.exports = dyy;
