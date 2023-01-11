### 创建包

```js
lerna create <包名> --registry http://47.102.217.78:4873/
```

### 安装依赖

```js
lerna add <name> packages/add
```

### 以 node 环境运行

```bash
#!/usr/bin/env node
```

### 已有命令

```js
lerna link // 例如：dyy文件夹中package.json 里面所依赖的其他模块可以用此命令关联

dyy create <name> // npm link 注册到全局后可以运行这个方法，创建一个空的项目
dyy init // 可以初始化一个项目配置文件
```

### 发布

```js
lerna publish --registry http://47.102.217.78:4873/
````