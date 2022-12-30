

let yargs = require("yargs/yargs")

function cli() {
    const cli = yargs();
    const globalOptions = {
        logLevel: {
            type: "string",
            describe: "日志级别",
            defaultDescription: "info",
            alias: "L"
        }
    }
    const globalKeys = Object.keys(globalOptions).concat(["help", "version"]);
    return cli.options(globalOptions)
    .group(globalKeys, "Global Options")
    .usage(`Usage: $0 <command> [options]`)
    .demandCommand(1, '至少一个命令')
    .strict()
    .recommendCommands()
    .fail((msg, error)=> {
        console.log(msg)
    })
    .alias("h", "help")
    .alias("v", "version")
    .epilogue(`创建结束，欢迎使用脚手架创建工具！`);
}

module.exports = cli;
