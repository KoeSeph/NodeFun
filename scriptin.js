  var username = 'test';
  // hopefully this scrolls the page the way I want it to. 
  function pageScroll() {
      window.scrollBy(0,5000); // horizontal and vertical scroll increments
      scrolldelay = setTimeout('pageScroll()',10); // scrolls every 100 milliseconds
    }
  //Automatic Populating function;

  // function automaniac() {
  //   var text = "";
  //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   for (var i = 0; i < 5; i++)
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   $("#messages").append($('<li>').text(text));
  //   $('button').trigger('click');
  // }
  // $('button').on('click', function(){
  //   automaniac();
  // });
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(username + ': '+ msg));
  });
  