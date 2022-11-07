$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });
  
  function getValue() {
    var nama = document.getElementById("nama").value;
    var telp = document.getElementById("telp").value;
    var alamat = document.getElementById("alamat").value;

    document.write("Nama              : " + nama + "<br>");
    document.write("No. Telepon       : " + telp + "<br>");
    document.write("Alamat               : " + alamat + "<br>");
  }  