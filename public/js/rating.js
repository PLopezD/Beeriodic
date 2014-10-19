$(document).ready(function() {
	// $('.post-rating').submit(function(event){
	// 	event.preventDefault()
	// 	var type = window.location.pathname.split("/")[1]
	// 	var type_id = window.location.pathname.split("/")[2]
	// 	var url = '/' + type + '/' + type_id + '/rating'
	// 	var form = $(this).serialize()
	// 	console.log(form)
	// 	console.log(url)
	// 	$.ajax({
	// 		url: url,
	// 		type: 'POST',
	// 		data: {
	// 			type: type,
	// 			type_id: type_id,
	// 			form: form.slice(-1)
	// 		},
	// 	})
	// 	.done(function() {
	// 		console.log(form.slice(-1))
	// 	})





	$('.post-rating').submit(function(event){
		event.preventDefault()
		var type = window.location.pathname.split('/')[1]
		var type_id = window.location.pathname.split('/')[2]
		var url = '/' + type + '/' + type_id + '/rating'
		var data = $(this).serialize()

		console.log(url)
		console.log(data)

		$.post(
			url,
			{ type: type, 
				type_id: type_id, 
				form: data.slice(-1) 
			}, 
			function(serverResponse, status, jqXHR){
			$('table').append(serverResponse)
		})
	})



})


