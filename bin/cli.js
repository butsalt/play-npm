#!/usr/bin/env node

var Liftoff = require('liftoff');

var argv = require('minimist')(
    process.argv.slice(2)
);

var Play = new Liftoff({
    name: 'play-npm'
    // processTitle: 'play-npm',
    // moduleName: 'play-npm',
    configName: 'playfile'
});

Play.launch({

}, function (env) {
    //加载配置文件
    if (env.configPath) {
        require(env.configPath);
    }
    // 优先查找cwd下node_modules
    // 再查找cwd上一级目录下的node_modules
    // 直至root
    console.log(env.modulePath);
});