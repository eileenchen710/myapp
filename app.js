var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');


//var revroute s= require('./app/routes/revisions.erver.routes')
var rootroutes = require('./app/routes/routes')

var app = express()



app.use(express.static('public'));
app.use(express.static('src'));

//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('ejs').__express);
//设置视图模板的默后认缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/ico.ico'));


app.get('/', function getState(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('public/list.html')
})

app.get('/add', function getState(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('public/add.html')
})
app.get('/view', function getState(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('public/view.html')
})

app.get('/modify', function getState(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.sendfile('public/modify.html')
})


app.listen(2333, function () {
  console.log('Example app listening on port 2333!');
});
