var a = document.getElementById('myF').addEventListener('click', addPersonal());

var b = document.getElementById('bt2').value = 1;

function addPersonal(){
	var name = document.getElementById('firstName').value;
	var contact = document.getElementById('c1').value;
	var email = document.getElementById('email1').value;
	var address = document.getElementById('address1').value;
	var other  = document.getElementById('op1').value;

	var obj = {
		name: name,
		contact: contact,
		email: email,
		address: address,
		other: other
	}

	localStorage.setItem('obj',JSON.stringify(obj));


}


