$(document).ready(function() {
$(".logo").mouseenter(function(){

$(".leftbottomice").animate({opacity: "1", left: "-60px", top: "110px"}, 1500);
$(".lefttopice").animate({opacity: "1", left: "-110px", top: "70px"}, 1500);
$(".rightbottomice").animate({opacity: "1", left: "60px", top: "110px"}, 1500);
$(".righttopice").animate({opacity: "1", left: "100px", top: "80px"}, 1500);


});


$(".logo").mouseleave(function(){

$(".leftbottomice").animate({opacity: "0", left: "-90px", top: "90px"}, 1000);
$(".lefttopice").animate({opacity: "0", left: "-90px", top: "70px"}, 1000);
$(".rightbottomice").animate({opacity: "0", left: "60px", top: "100px"}, 1000);
$(".righttopice").animate({opacity: "0", left: "80px", top: "70px"}, 1000);
});

});
