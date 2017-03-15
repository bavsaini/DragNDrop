	
$(document).ready(function() {
	
$('input[id=pass]').keyup(function() {
    // set password variable
var pswd = $(this).val();

//validate the length
if ( pswd.length < 8 ) {
    $('#length').removeClass('valid').addClass('invalid');
} else {
    $('#length').removeClass('invalid').addClass('valid');
}
//validate letter
if ( pswd.match(/[a-z]/) ) {
    $('#lower').removeClass('invalid').addClass('valid');
} else {
    $('#lower').removeClass('valid').addClass('invalid');
}

//validate capital letter
if ( pswd.match(/[A-Z]/) ) {
    $('#capital').removeClass('invalid').addClass('valid');
} else {
    $('#capital').removeClass('valid').addClass('invalid');
}

//validate number
if ( pswd.match(/\d/) ) {
    $('#number').removeClass('invalid').addClass('valid');
} else {
    $('#number').removeClass('valid').addClass('invalid');
}
//validate userid
if ( pswd.match(/#userid.value/) ) {
    $('#sameuser').removeClass('Valid').addClass('invalid');
} else {
    $('#sameuser').removeClass('invalid').addClass('valid');
}
//validate english characters
if ( pswd.match(/\w/) ) {
    $('#chars').removeClass('invalid').addClass('valid');
} else {
    $('#chars').removeClass('valid').addClass('invalid');
}



}).focus(function() {
    $('#pswd_info').show();
}).blur(function() {
    $('#pswd_info').hide();
});
});

function checkPasswordStrength(){
			var strengthBar = document.getElementById("passStrength");
			var passInput = document.getElementById("pass").value;

			var enough = /(?=(.*[a-z]){5,})(?=(.*[0-9]){1,})(?=(.*[_]){1,})/;
			var medium = /(?=(.*[A-Z]){1,})(?=(.*[0-9]){2,})(?=(.*[a-z]){4,})(?=(.*[_]){2,})/;
			var strong = /(?=(.*[A-Z]){3,})(?=(.*[0-9]){3,})(?=(.*[a-z]){2,})(?=(.*[_]){3,})/;

			if(strong.test(passInput)) {
				console.log("100");
				strengthBar.value = 100;
			} else if (medium.test(passInput)) {
				console.log("90");
				strengthObject.value = 90;
			} else if (enough.test(passInput)) {
				console.log("80");
				strengthBar.value = 80;
			} else {
				strengthBar.value = 50;
			}

		}
		
		function validatePassword(){
			var pass = document.getElementById("pass").value;
			var vpass = document.getElementById("vpass").value;

			if(pass == vpass){
				var msg = document.getElementById("passVerificationMsg");
				msg.innerHTML = "Password Matches!";
				msg.style.color = "Green";
			}else{
				var msg = document.getElementById("passVerificationMsg");
				msg.innerHTML = "Password doesn't Match!";	
				msg.style.color = "Red";
				
			}
		}
	
		function validateEmail(){
			var email = document.getElementById("email").value;
			var vemail = document.getElementById("vemail").value;
			if(email == vemail){
				var msg = document.getElementById("verificationMsg");
				msg.innerHTML = "Email Address Matches!";
				msg.style.color = "Green";
			}else{
				var msg = document.getElementById("verificationMsg");
				msg.innerHTML = "Email Address doesn't Match!";
				msg.style.color = "Red";
			}
		}

function myFunction() {
	var userid = document.getElementById("userid").value;
	var password = document.getElementById("pass").value;
	var vpassword = document.getElementById("vpass").value;
	var email = document.getElementById("email").value;
	var vemail = document.getElementById("vemail").value;
	var securityques = document.getElementById("securityques").value;
	var security2 = document.getElementById("security2").value;
	var mob = document.getElementById("mob").value;
	var address = document.getElementById("address").value;
	var interests = document.getElementById("interests").value;
	// Returns successful data submission message when the entered information is stored in database.
	
	var dataString = 'userid=' + userid + '&password=' + password + '&vpassword=' + vpassword + '&email_add=' + email + '&vemail_add=' + vemail + '&securityques=' + securutyques + '&security2=' + security2 + '&mob=' + mob + '&address=' + address + '&interests=' + interests ;
	
	if (userid == '' || password == '' || vpassword == '' || email == '' || vemail == '' || securityques == '' || security2 == '' ||  mob == '' || address == '' || interests == '' ) {
		alert("Please fill all the fields");
	} else {
	// AJAX code to submit form.
		$.ajax({
		type: "POST",
		url: "ajaxjs.php",
		data: dataString,
		cache: false,
		success: function(html) {
		alert(html);
		}
	});
	}
	return false;
	}