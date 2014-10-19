$(document).ready(function() {
	$('.post-rating').submit(function(event){
		event.preventDefault()
		var type = window.location.pathname.split("/")[1]
		var type_id = window.location.pathname.split("/")[2]
		var url = '/' + type + '/' + type_id + '/rating'
		var form = $(this).serialize()
		$.ajax({
			url: url,
			type: 'POST',
			data: {
				type: type,
				type_id: type_id,
				form: form.slice(-1)
			},
		})
		.done(function() {
			console.log(form.slice(-1))
		})

	})
});