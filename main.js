(function (){
  
var para = $('.meow');
para.on('click', function(){
  // var btn= $(event.target);
   $('.para').toggleClass('big');
});

var para2 = $('.meow2');
para2.on('click', function(){
  $('.para2').toggleClass('big');
});

var para3 = $('.meow3');
para3.on('click', function(){
  $('.para3').toggleClass('big');
});

})();