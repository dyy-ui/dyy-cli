const fs = require('fs-extra')
const path = require('path')

const initPackageJson = require('pify')(require('init-package-json'))

class CreateCommand {
    constructor(options){
        this.options = options
        this.rootPath = path.resolve()
    }

    async execute() {
        const {name} = this.options;
        const targetDir= path.join(this.rootPath, `${name}`);
        this.libDir = path.join(targetDir, `lib`)
        this.testDir = path.join(targetDir, '__test__')
        await fs.mkdirp(this.libDir)
        await fs.mkdirp(this.testDir)

        await initPackageJson(targetDir, "")
        console.log('创建成功')
    }
   
}


function add(argv) {
    new CreateCommand(argv).execute();
}

module.exports = add;
