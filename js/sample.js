$(function() {
  function slideMenu() {
    var activeState = $("#menu-container .menu-list").hasClass("active");
    $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
  $("#menu-wrapper").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function() {
    $(this).next().toggleClass("open").slideToggle("fast");
    $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

    $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
    $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });

  $("#news-slider").slick({
    autoplay: true,
    arrows: false,
    vertical :true,
    speed: 1500,
    autoplaySpeed:2000,
    infinite: true //これはつけましょう。
  });
  
  var slider = "#slider"; // スライダー
  var thumbnailItem = "#thumbnail-list .thumbnail-item"; // サムネイル画像アイテム
  
  // サムネイル画像アイテムに data-index でindex番号を付与
  $(thumbnailItem).each(function(){
   var index = $(thumbnailItem).index(this);
   $(this).attr("data-index",index);
  });
  
  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(slider).on('init',function(slick){
   var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
   $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });

  //slickスライダー初期化  
  $(slider).slick({
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 1500,
    autoplaySpeed:2000,
    infinite: true //これはつけましょう。
  });
  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });
  
  //サムネイル画像のカレントを切り替え
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
      $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
  });

}); // jQuery load


$(function(){


  //（１）ページの概念・初期ページを設定
  var page=0;
  
  //（２）イメージの数を最後のページ数として変数化
  var lastPage =parseInt($("#slide img").length-1);
  
  //（３）最初に全部のイメージを一旦非表示にします
       $("#slide img").css("display","none");
  
  //（４）初期ページを表示
            $("#slide img").eq(page).css("display","block");
  
  //（５）ページ切換用、自作関数作成
  function changePage(){
                           $("#slide img").fadeOut(1000);
                           $("#slide img").eq(page).fadeIn(1000);
  };
  
  //（６）～秒間隔でイメージ切換の発火設定
  var Timer;
  function startTimer(){
  Timer =setInterval(function(){
            if(page === lastPage){
                           page = 0;
                           changePage();
                 }else{
                           page ++;
                           changePage();
            };
       },5000);
  }
  //（７）～秒間隔でイメージ切換の停止設定
  function stopTimer(){
  clearInterval(Timer);
  }
  
  //（８）タイマースタート
  startTimer();
  
  /*オプションを足す場合はここへ記載*/
  
  });

  $(function(){


    //（１）ページの概念・初期ページを設定
    var page=0;
    
    //（２）イメージの数を最後のページ数として変数化
    var lastPage =parseInt($("#slide2 img").length-1);
    
    //（３）最初に全部のイメージを一旦非表示にします
         $("#slide2 img").css("display","none");
    
    //（４）初期ページを表示
              $("#slide2 img").eq(page).css("display","block");
    
    //（５）ページ切換用、自作関数作成
    function changePage(){
                             $("#slide2 img").fadeOut(1000);
                             $("#slide2 img").eq(page).fadeIn(1000);
    };
    
    //（６）～秒間隔でイメージ切換の発火設定
    var Timer;
    function startTimer(){
    Timer =setInterval(function(){
              if(page === lastPage){
                             page = 0;
                             changePage();
                   }else{
                             page ++;
                             changePage();
              };
         },2500);
    }
    
    //（７）～秒間隔でイメージ切換の停止設定
    function stopTimer(){
    clearInterval(Timer);
    }
    
    //（８）タイマースタート
    startTimer();
    
    var sliderThumbnail = new Swiper('.slider-thumbnail', {
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

    var slider = new Swiper('.slider', {
      followFinger: false,
      thumbs: {
        swiper: sliderThumbnail
      }
    });

    $("#click1").click(function(){
      $("#click2,#click3,#click4,#click5").css('color','black')
      $("#click1").css('color','#9B7F2B')
      $("#text1").fadeIn();
      $("#text2,#text3,#text4,#text5").css("display","none");
    });

    $("#click2").click(function(){
      $("#click1,#click3,#click4,#click5").css('color','black')
      $("#click2").css('color','#9B7F2B')
      $("#text2").fadeIn();
      $("#text1,#text3,#text4,#text5").css("display","none");
    });

    $("#click3").click(function(){
      $("#click2,#click1,#click4,#click5").css('color','black')
      $("#click3").css('color','#9B7F2B')
      $("#text3").fadeIn();
      $("#text1,#text2,#text4,#text5").css("display","none");
    });

    $("#click4").click(function(){
      $("#click2,#click3,#click1,#click5").css('color','black')
      $("#click4").css('color','#9B7F2B')
      $("#text4").fadeIn();
      $("#text1,#text3,#text2,#text5").css("display","none");
    });

    $("#click5").click(function(){
      $("#click2,#click3,#click4,#click1").css('color','black')
      $("#click5").css('color','#9B7F2B')
      $("#text5").fadeIn();
      $("#text1,#text3,#text4,#text2").css("display","none");
    });

    $('.top-slider').slick({
      arrows:false,
      asNavFor:'.thumb',
  });
  $('.thumb').slick({
      asNavFor:'.slider',
      focusOnSelect: true,
      slidesToShow:4,
      slidesToScroll:1
  });    

});


