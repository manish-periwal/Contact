$("document").ready(function()
{
	
	$("#username_err").hide();
	$("#email_err").hide();
	$("#number_err").hide();
	$("#message_err").hide();
			
	var username_error=false;
	var email_error=false;
	var number_error=false;
	var message_error=false;


	$("#name").focusout(function(){
		check_name();
	});

	$("#email").focusout(function(){
		check_mail();
	});

	$("#number").focusout(function(){
		check_number();
	});

	$("#message").focusout(function(){
		check_message();
	});


	function check_name(){
		var name_length=$("#name").val().length;

		if(name_length<3 || name_length>20)
		{
			$("#username_err").html("Should be between 3-20 characters");
			$("#username_err").css("color","#ff3333");
			$("#username_err").show();
			username_error=true;
		}
		else
		{
			$("#username_err").hide();
			username_error=false;
		}
	}

	function check_mail(){
		var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/);
		if(!pattern.test($("#email").val())) {
			
			$("#email_err").html("Invalid Email-Id");
				$("#email_err").css("color","#ff3333");
			$("#email_err").show();
			 email_error=true;
		}
		else
		{
			$("#email_err").hide();
			email_error=false;
		}
	}


	function check_number(){
		var num=$("#number").val();
			var pattern = new RegExp(/^[0-9]{10}$/);
		if(!pattern.test(num))
		{
			$("#number_err").html("Should be 10 digits");
				$("#number_err").css("color","#ff3333");
			$("#number_err").show();
		number_error=true;
		}
		else
		{
			$("#number_err").hide();
			number_error=false;
		}
	}



	function check_message(){
		var msg_length=$("#message").val().length;

		if(msg_length<10)
		{
			$("#message_err").html("Should be atleast 10 characters");
				$("#message_err").css("color","#ff3333");
			$("#message_err").show();
			message_error=true;
		}
		else
		{
			$("#message_err").hide();
			message_error=false;
		}
	}


	$("#submit").on("click", function(){
	
		
		check_name();
		check_mail();
		check_number();
		check_message();

		if(username_error==false && email_error==false && number_error==false && message_error==false){
			return true;
	}
		else {
			return false;
		}

	});



});