$(document).ready(function(){
// 	$(".element .mask").hover(
//     function() {
//         var movingDiv = $(this).next();
//         movingDiv.addClass("moving");
//         movingDiv.addClass("hover").stop()
//         .animate({
//             width: '105px',
//             height: '105px',
//             marginLeft: '-30px',
//             fontSize: "110px"
//         }, 100);

//     } , function() {
//         var movingDiv = $(this).next();
//         movingDiv.removeClass("hover").stop().animate({
//             width: '51',
//             height: '51px',
//             marginLeft: '0',
//             fontSize: "50px"
//         }, 200, function(){movingDiv.removeClass("moving");});
//     }
// );
    $("div.element div.mask").on('click', function(){
        $(this).addClass('clicked')
        // test = $('.clicked .top .left').innerHTML;
         // test = document.getElementById("left").innerHTML;
        myVar = $(".clicked").find('.top .left').val();
        console.log(myVar);
        // console.log("in the click listener")  
        $('#beerlist').text('replace old text')

        // $(this).removeClass('clicked')
    })
})

// var myVar = $("#start").find('.myClass').val();