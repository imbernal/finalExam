$('#finalexam').click(function(event) {
	$(this).fadeToggle(1000);

	$('#contactform2').fadeToggle(3000);
	
});

$(document).ready(function(){	

	

	$('#btnSubmit2').click(function(e){
		e.preventDefault();
		var $form =  $('#contactform2');
	
		$(this).html("Sending....");
		$.ajax({
			method: "POST",
			url: $form.attr("action"),
			data:  $form.serialize()
		}).done(function(){
			$form[0].reset();
			$('#btnSubmit2').html("Message Sent!");
			$('.modal').modal("show");
			setTimeout(function() {$('.modal').modal('hide');}, 1000);
		}).fail(function(){
			$form[0].reset();
			$('.modal').modal("show");
			$('.modal-content').html("Sorry, Something it is wrong!!!!");
			setTimeout(function() {$('.modal').modal('hide');}, 1000);;
		});	
	})
	
});