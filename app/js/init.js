// import { url } from "inspector";

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



// $('.preview-img').on('click', function(){
//   $('.preview-img').parent('.gallery-img').removeClass('active-img');
//   $(this).parent().addClass('active-img');
//   $('#main-img').attr('src', $(this).attr('src'));
// })


(() => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  const tabsWrap = document.querySelector(".tabs-titles-wrap");
  const activeClass = "active-tab";
//обрабатываем клик по родителю с табами
  tabsWrap.addEventListener("click", e => {
    //если произошел клик по элементу с классом tab
    if (e.target.classList.contains("tab")) {
      //идем циклом по всем tab
      [...tabs].forEach((tab, tabIndex, tabArray) => {
        //у всех tab и tab-content удаляем класс active
        tab.classList.remove(activeClass);
        contents[tabIndex].classList.remove(activeClass);
        //если кликнули по tab
        if (e.target === tab) {
          //добавляем этому элементу(tab) класс active
          tab.classList.add(activeClass);
          //добавляем соотв-щему tab-content класс active
          contents[tabIndex].classList.add(activeClass);
        }
      });
    }
  });
})();
