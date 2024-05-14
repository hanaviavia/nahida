---
layout: doc
editLink: true
---

# Monorepo



## 基于pnpm实现monorepo

### 快速开始

1. 全局安装`pnpm`

   ```bash
   npm install pnpm -g
   ```

2. 新建文件夹，进入文件夹，在终端中执行

   ````bash
   pnpm init
   ````

   将根项目命名为cecilia

3. 配置工作区

   ```yaml
   # pnpm-workspace.yaml
   packages:
     - 'packages/**'
   ```

   上面这段配置的意思就是通过[ glob 语法](https://github.com/begin/globbing)将`packages`下的所有文件夹都当做一个package，添加到 monorepo 中进行管理。

### 依赖

1. 全局依赖

   ```bash
   pnpm add typescript -D -w
   ```

   `-D`: 作为devDependencies安装

   `-w`: 安装到项目根目录的`node_modules`当中

   虽然packages下的项目都没有安装 ts，但是倘若在项目中使用到，就会通过依赖递归查找的原则逐级往上寻找，自然会找到 monorepo 中根目录的依赖。

2. 局部依赖

   1. 新建用于书写文档的子项目

      ```bash
      mkdir docs
      cd docs
      pnpm init
      ```

      将文档子项目命名为@cecilia/docs

   2. 修改pnpm-workspace.yaml配置

      ```yaml
      packages:
        - 'packages/**'
        - 'docs'
      ```

   3. 只为docs安装`vitepress`用于写文档

      ```bash
      pnpm add vitepress -r --filter @cecilia/docs -D
      ```

   4. 使用`vitepress`初始化

      ```bash
      cd docs
      npx vitepress init
      # 后面的按需设置
      ```

      docs的package.json文件添加vitepress相关脚本

      ```json
      {
        "scripts": {
          "docs:dev": "vitepress dev",
          "docs:build": "vitepress build",
          "docs:preview": "vitepress preview"
        }
      }
      ```

   5. 根项目的package.json文件添加以下脚本

      ```json
      
      {
        "scripts": {
          "docs:dev": "pnpm run -C docs docs:dev"
        }
      }
      ```

      含义：运行docs子项目的`docs:dev`命令

   

## 相关链接

[monorepo tools]( https://monorepo.tools/) : 关于monorepo工具链的详细介绍
