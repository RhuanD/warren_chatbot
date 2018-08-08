$('#envia').click(function(){
	envia_respostas();
});


function envia_respostas(){
	var question_name       = $('#question_name').val();
	var question_age        = $('#question_age').val();
	var question_preference = $('#question_preference').val();
	var question_interest   = $('#question_interest').val();
	var question_income     = $('#question_income').val();
	var question_read       = $('#question_read').val();
	var question_advice     = $('#question_advice').val();
	var question_lottery    = $('#question_lottery').val();
	var question_email      = $('#question_email').val();
	$.ajax({
		url: 'https://dev-api.oiwarren.com/',
		type: 'GET',
		data: JSON.stringfy({
			question_name : question_name, 
			question_age : question_age, 
			question_preference : question_preference, 
			question_interest : question_interest, 
			question_income : question_income,
			question_read : question_read,
			question_advice : question_advice,
			question_lottery : question_lottery,
			question_email : question_email
		}),
		dataType: 'JSON',
	})
	.success(function() {

	});
	.error(function() {

	});
}
