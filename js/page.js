function envia_respostas(){
	var json = new array();
	$.ajax({
		url: 'https://dev-api.oiwarren.com/',
		type: 'GET',
		dataType: 'JSON',
		data: {answers: },
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}
