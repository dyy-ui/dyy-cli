exports.command = "create <name>";
exports.describe = "创建12313"
exports.builder = (yargs) => {
    yargs.positional("name", {
        // dyy create XXX
        type: 'string',
        describe: "包名"
    }).options({
        // dyy create xxx --registry=http://github.com/dyy.git
        registry: {
            group: "Command Groups",
            describe: "配置仓库地址",
            type: 'string'
        }
    })
}

exports.handler = (argv) => {
   return require('.')(argv)
}