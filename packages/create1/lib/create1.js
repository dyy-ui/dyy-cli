

class CreateCommand {
    constructor(options){
        this.options = options
    }

    async execute() {
        console.log('创建成功')
    }

}


function create1(argv) {
    new CreateCommand(argv).execute();
}

module.exports = create1;
