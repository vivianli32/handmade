$(document).ready(function(){
  $('.carousel').slick({
     speed: 300,
     arrows:true,
     prevArrow:"<img class='a-left control-c prev slick-prev' src='images/noun_16963_cc.svg'>",
     nextArrow:"<img class='a-right control-c next slick-next' src='images/noun_16975_cc.svg'>",
     dots: true,
   	 slidesToShow: 1,
     slidesToScroll: 1
  });
});
