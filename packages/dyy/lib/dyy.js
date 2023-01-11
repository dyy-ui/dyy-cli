const cli = require('@dyy/cli')
const addCmd = require('@dyy/add/command')
const createGenerator = require.resolve('@dyy/create')
const initCmd = require('@dyy/init/command')
const createCmd = require('@dyy/create/command')
const env = require('yeoman-environment').createEnv()
function dyy(argv) {
    if(argv[0] === 'create') {
        env.register(createGenerator, argv[0])
        env.run(argv, {})
      }
    return cli().command(initCmd).command(createCmd).command(addCmd).parse(argv);
}

module.exports = dyy;
