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
        console.log($(".clicked .left"))
        .$.ajax({
            url: '/family/:id/beers',
            type: 'GET',
            dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
            data: {param1: 'value1'},
        })
        .success(function() {
            console.log("success");
        })
        

        // $('#beerlist').text('replace old text')

        // console.log("in the click listener")  
    })
})
