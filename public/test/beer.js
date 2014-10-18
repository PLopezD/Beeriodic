$(document).ready(function(){
				$("div.element div.mask").hover(
                function() {

                    var movingDiv = $(this).next();

                    movingDiv.addClass("moving");
                    movingDiv.addClass("hover").stop()
                    .animate({
                        width: '105px',
                        height: '105px',
                        marginLeft: '-30px',
                        fontSize: "110px"
                    }, 100);
        
                } , function() {
                    var movingDiv = $(this).next();
                    movingDiv.removeClass("hover").stop().animate({
                        width: '51',
                        height: '51px',
                        marginLeft: '0',
                        fontSize: "50px"
                    }, 200, function(){movingDiv.removeClass("moving");});
                }
            );
            })
            // Eventos de click
            $(document).ready(function(){
			
				$("div.element div.mask").click(
					function() {
						$(".selected").removeClass("selected")
						var content = $(this).next();
						content.addClass("selected");
					
						var infoText = $.trim(content.find('.beerInfo').text());
						$('#infoText').html('<a rel="nofollow" target="_blank" class="infoLink" href="'+infoText+'">'+infoText+"</a>")
						
						var exampleText = $.trim(content.find('.beerExample').text());
						$('#infoExample').text("e.g.: " + exampleText);

						var nameText = $.trim(content.find('.beerName').text());
						$('#infoName').text(nameText);

						$('#infoPanel').show();
					}
				);
				
                // Painel
                $(".leftAds .ad").click(function(event){
                    event.stopPropagation();

                    var top = $(this).offset().top - 120; // popup de ads um pouco mais pra cima
                    var title = $.trim($(this).children("h3").text());
                    var desc = $.trim($(this).children("p").text());
                    var site = $.trim($(this).children(".adSite").text());
                    var address = $.trim($(this).children(".adAddress").text());

                    var leftAdPanel = $(".leftAdPanel")
                    leftAdPanel.css({top: top})
                    leftAdPanel.children(".adTitle").text(title)
                    leftAdPanel.children(".adDesc").text(desc)
                    leftAdPanel.children(".adSite").children("a").text(site).attr("href", site)
                    leftAdPanel.children(".adAddress").text(address)
                    leftAdPanel.show("fast");
					
                    $(".rightAdPanel").hide("fast");
                    return false;
                });
                // Right panel
                $(".rightAds .ad").click(function(event){
                    event.stopPropagation();

                    var top = $(this).offset().top - 120; // popup de ads um pouco mais pra cima
                    var title = $.trim($(this).children("h3").text());
                    var desc = $.trim($(this).children("p").text());
                    var site = $.trim($(this).children(".adSite").text());
                    var address = $.trim($(this).children(".adAddress").text());

                    var rightAdPanel = $(".rightAdPanel")
                    rightAdPanel.css({top: top})
                    rightAdPanel.children(".adTitle").text(title)
                    rightAdPanel.children(".adDesc").text(desc)
                    rightAdPanel.children(".adSite").children("a").text(site).attr("href", site)
                    rightAdPanel.children(".adAddress").text(address)
                    rightAdPanel.show("fast");

                    $(".leftAdPanel").hide("fast");
                    return false;
                });

                // Fecha paineis abertos
                $('body').click(function() {
                    $(".leftAdPanel").hide("fast")
                    $(".rightAdPanel").hide("fast")
                });

            });
