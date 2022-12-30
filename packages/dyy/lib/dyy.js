const cli = require('@dyy/cli')
let create1Cmd = require('@dyy/create1/command')
const initCmd = require('@dyy/init/command')
const createCmd = require('@dyy/create/command')

function dyy(argv) {
    return cli().command(initCmd).command(createCmd).command(create1Cmd).parse(argv);
}

module.exports = dyy;
