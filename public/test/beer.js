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
        $('#family').empty()
        $(this).addClass('clicked')
        myVar = $(".element.clicked .content .top .left").text()
        fam_name = $(".element.clicked .content .middle").text()
        
        formData = {fam_id: myVar}

              $.get('/landing',formData,function(res){
            }).success(function(response){
              var res = $.parseJSON(response)

            $('#beerlist').append("<a href=beers/"+res[2].id+">"+res[2].name+"</a>")
            $('#beerlist').append(",")
            $('#beerlist').append("<a href=beers/"+res[3].id+">"+res[3].name+"</a>")
            $('#beerlist').append(",")
            $('#beerlist').append("<a href=beers/"+res[4].id+">"+res[4].name+"</a>")
            })
            $('#family').append("<a href=families/"+myVar+">"+fam_name+"</a>")
        $(this).removeClass('clicked')
    })
})

// var myVar = $("#start").find('.myClass').val();