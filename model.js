let mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://127.0.0.1/201702crawl');
let MovieSchema = new mongoose.Schema({
    name:String,
    url:String
})
/*module.exports = mongoose.model('Movie',MovieSchema);*/
exports.Movie = mongoose.model('Movie',MovieSchema);
/*
module.exports.remove({},function(err){
    console.log(err);
});*/
