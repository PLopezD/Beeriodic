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
    $("div.element").on('click', function(){
        $(this).addClass('clicked')
        myVar = $(".element.clicked .content .top .left").text()
        console.log(myVar);
        
        $('#beerlist').text('replace old text')
        formData = {fam_id: myVar}

              $.get('/landing',formData,function(res){
            }).success(function(response){
              // console.log(response)
              var res = $.parseJSON(response)
              console.log(response)
              // console.log(typeof res)
              console.log("successful ajax call")  
            })

        $(this).removeClass('clicked')
    })
})

// var myVar = $("#start").find('.myClass').val();