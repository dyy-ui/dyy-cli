exports.command = "init";
exports.describe = "创建12313"
exports.builder = (yargs) => {
    console.log("init builder")
}

exports.handler = (argv) => {
   return require('.')(argv)
}