#!/usr/bin/env node

var Liftoff = require('liftoff');

var argv = require('minimist')(
    process.argv.slice(2)
);

var Play = new Liftoff({
    name: 'play'
});

Play.launch({

}, function (env) {
    //加载配置文件
    if (env.configPath) {
        require(env.configPath);
    }
});