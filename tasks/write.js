let Movie = require('../model').Movie;
let async = require('async');
let debug = require('debug')('crawl:write');
//把电影数组保存到mongodb数据库中
module.exports = function(movies,callback){
  async.forEach(movies,function(movie,cb){
    Movie.create(movie,cb);
    debug(`写入电影:${movie.name}`);
  },callback);
  //Movie.create(movies,callback);
}

/*
module.exports([
    { name: '嫌疑人x的献身',
        url: 'http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%CF%D3%D2%C9%C8%CBx%B5%C4%CF%D7%C9%ED' }
],function(){});*/
