/* header 햄버거 메뉴 */
var burger = $('.menu_wrap');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
    $('.menu_cont').fadeToggle('on')
  })
});


/* main_slide */
$(function() {
    var swiper01 = new Swiper(".main_slide", {
      slidesPerView: 1.3,
      spaceBetween: 80,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".main_pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".main_btnNext",
        prevEl: ".main_btnPrev",
      },
      });
})

$(function() {
  var swiper02 = new Swiper(".pick_tab", {
    slidesPerView: 6,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".pickTab_btnNext",
      prevEl: ".pickTab_btnPrev",
    },
    });
})

$(function() {
  var swiper03 = new Swiper(".pick_item", {
    slidesPerView: 4.2,
    slidesPerGroup: 4,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".item_btnPrev",
      prevEl: ".item_btnPrev",
    },
  });
})

//메가pick 문제집 항목 슬라이드
$(function() {
  $('.pick_tab > .swiper-wrapper > div').on('click', function(e) {
      e.preventDefault()
      /* 
          - index() : 순서를 알려주는 메소드 (단순히 "순서"만 알려주는 역할)
          - eq() : 몇 번째에 해당하는 요소가 동작까지 가능한 메소드 
      */
     // 방금 클릭한 li에 순서를 변수에 저장
     let i = $(this).index()
     //console.log(i)

     //실행 전에 li에 on클래스가 있는지 확인하고 제거
     $('.pick_tab > .swiper-wrapper > div').removeClass('on')
     $('.pick_tab > .swiper-wrapper > div').eq(i).addClass('on')
     

     //실행 전에 div에 on클래스가 있는지 확인하고 제거
     $('.pick_list > li').removeClass('on')
     $('.pick_list > li').eq(i).addClass('on')
  })
})

$(function() {
  $('.bs_tab > li').on('click', function(e) {
      e.preventDefault()
      /* 
          - index() : 순서를 알려주는 메소드 (단순히 "순서"만 알려주는 역할)
          - eq() : 몇 번째에 해당하는 요소가 동작까지 가능한 메소드 
      */
     // 방금 클릭한 li에 순서를 변수에 저장
     let bs = $(this).index()
     //console.log(i)

     //실행 전에 li에 on클래스가 있는지 확인하고 제거
     $('.bs_tab > li').removeClass('on')
     $('.bs_tab > li').eq(bs).addClass('on')
     

     //실행 전에 div에 on클래스가 있는지 확인하고 제거
     $('.bs_slide').removeClass('on')
     $('.bs_slide').eq(bs).addClass('on')
  })
})



//베스트 셀러
$(function() {
  var swiper04 = new Swiper(".bs_slide", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 100,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})


//유튜브
$(function() {
  var swiper05 = new Swiper(".media_slide", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})