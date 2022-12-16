const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')


class InitCommand {
    constructor(options){
        this.options = options
        this.rootPath = path.resolve()
    }

    async execute() {
        console.log('init git')
        await execa('git', ['init'], {stdio: 'pipe'});
        await this.ensurePackageJSON();
        await this.ensureLernaConfig();
        await this.ensurePackagesDir();
    }
    async ensurePackageJSON () {
        console.info('package.json')
        await fs.writeJSON(path.join(this.rootPath, "package.json"), {
            name: 'root',
            private: true,
            "devDependencies": {
                "lerna": "^6.1.0"
              }
        })
    }
    async ensureLernaConfig() {
        console.info('lerna.json')
        await fs.writeJSON(path.join(this.rootPath, "lerna.json"), {
            "$schema": "node_modules/lerna/schemas/lerna-schema.json",
            "useWorkspaces": true,
            "version": "0.0.0"
            }, {spaces: 2})
    }
    async ensurePackagesDir() {
        console.info('packages')
        await fs.mkdirp(path.join(this.rootPath, "packages"))
    }
}

function init(argv) {
    new InitCommand(argv).execute();
}

module.exports = init;
