

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    constructor(...args) {
        super(...args)
        this.props = {
          projectName: this.args[0]
        }
      }
      initializing() {
        this.log('> 正在创建项目...')
        
        this.destinationRoot(process.cwd())
      }
    
      prompting() {
        if(!this.props.projectName) {
          return this.prompt([
            {
              type: 'input',
              name: 'projectName',
              message: '请输入项目名称'
            },
        ]).then(props => {
            this.props = {
              ...props,
              projectName: props?.projectName || 'web-project'
            }
          })
        }
        return null
      }
      
      writing() {
        const { projectName, unitTesting } = this.props
        // 拉取模板
        this.spawnCommandSync('git', [
          'clone',
          "https://gitee.com/dingyongya/ant-design-admin.git",
          this.templatePath()
        ])
        
        // 拷贝模板到创建的项目目录
        this.fs.copyTpl(
          this.templatePath('**'), 
          this.destinationPath(projectName), 
          { 
            BASE_URL: '<%= BASE_URL %>',
            NODE_ENV: '<%= NODE_ENV %>',
            VUE_APP_NAME: '<%= VUE_APP_NAME %>',
            VUE_APP_WEB_MONITOR_HOSTNAME: '<%= VUE_APP_WEB_UPLOG_HOSTNAME %>',
            VUE_APP_WEB_MONITOR_ID: '<%= VUE_APP_WEB_MONITOR_ID %>',
            VUE_APP_WEB_UPLOG_HOSTNAME: '<%= VUE_APP_WEB_UPLOG_HOSTNAME %>',
            projectName
          }, 
          { 
            escape: markup => markup 
          }, 
          {
            globOptions: {
              cwd: __dirname,
              gitignore: true,
              ignore: [
                '**/yarn.lock',
                '**/README.md',
                // '**/test/**',
                '**/.git'
              ],
              dot: true
            }
          }
        )
        this.spawnCommandSync('rm', ['-rf', this.templatePath()])
    }  
    end() {
        const { projectName } = this.props
        this.log('> 项目创建成功，祝您生活愉快！')
        this.log('')
        this.log('> 安装依赖:')
        this.log('> cd %projectName', {projectName})
        this.log('> yarn install || npm install')
        this.log('> yarn serve || npm run serve')
      }
      
}


