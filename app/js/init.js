
$(document).ready(function(){
    $('.main-slider').slick({
      autoplay: true,
      aytoplaySpeed: 2000,
      dots: true
    });
  });
      
//   var mainImg = document.getElementById("main-img");
//   var previewImgs = document.getElementsByClassName("preview-img");
  
//   var switchImage = function() {
//     mainImg.src = this.src;           
// };

// for (var i = 0; i < previewImgs.length; i++) {
//     previewImgs[i].addEventListener('click', switchImage, false);
// }



$('.preview-img').on('click', function(){
  $('.preview-img').parent('.gallery-img').removeClass('active-img');
  $(this).parent().addClass('active-img');
  $('#main-img').attr('src', $(this).attr('src'));
})
