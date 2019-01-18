/*
Xcore 是一个支持多线程的 Node.js 发行版本，基本不需要对你现有的代码做任何改动就可以直接线程安全地以多线程运行。
1、下载 JXcore 安装包 https://github.com/jxcore/jxcore-release
2、解压到某个目录，并配置系统环境变量：jx --version ，查看是否成功
3、进入项目目录（必要），使用 jx 命令打包项目，并指定项目的主文件，比如，index.js
   jx package index.js index   （最后一个是打包生成文件的命名，自定义）
4、运行：jx index.jx
5、第三方依赖打包有问题
*/