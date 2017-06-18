let read = require('./read');
let write = require('./write');
let async = require('async');
let Movie = require('../model');
let debug = require('debug')('crawl:main');
let url = 'http://top.baidu.com/buzz?b=26&c=1';
let start = function(){
  async.waterfall([
    //清空数据库
    function(cb){
      Movie.remove({},cb);
    },
    function(data,cb){
      read(url,cb);
    },
    function(movies,cb){//data=movies
      write(movies,cb)
    }
  ],function(err,result){
     debug('全部任务执行完毕!');
  });
}