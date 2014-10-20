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
        $('#beerlist').empty()
        $(this).addClass('clicked')
        myVar = $(".element.clicked .content .top .left").text()
        fam_name = $(".element.clicked .content .middle").text()
        
        formData = {fam_id: myVar}

              $.get('/landing',formData,function(res){
            }).success(function(response){
              var res = $.parseJSON(response)
              // console.log(res[1].name)
              // console.log(res[2].name)
              console.log(res[4].name)
              console.log(res[3].name)
              // console.log("successful ajax call")
            })
        // console.log(myVar);
        // console.log(fam_name);
            $('#beerlist').append("<a href=families/"+myVar+">"+fam_name+"</a>")
        $(this).removeClass('clicked')
    })
})

// var myVar = $("#start").find('.myClass').val();