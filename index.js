var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.get('/style.css', function(req, res){
  res.sendfile('style.css');
});
app.get('/scriptin.js', function(req, res){
  res.sendfile('scriptin.js');
});
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});