var a = document.getElementById('myF').addEventListener('click', addPersonal);

//var b = document.getElementById('bt2').addEventListener('click',display);




function addPersonal(e){
	var ar = new Array();
	var name = document.getElementById('firstName').value;
	var contact = document.getElementById('c1').value;
	var email = document.getElementById('email1').value;
	var address = document.getElementById('address1').value;
	var other  = document.getElementById('op1').value;

	ar.push(name);
	ar.push(contact);
	ar.push(email);
	ar.push(address);
	ar.push(other);
	
	 localStorage.setItem('session',JSON.stringify(ar));

	
	// document.getElementById('name2').innerHTML = name;
	// document.getElementById('name2').innerHTML = contact;
	// document.getElementById('contact2').innerHTML = email;
	// document.getElementById('address2').innerHTML = address;
	// document.getElementById('op2').innerHTML = other;
	e.preventDefault();
 }

 var b = document.getElementById('myF2').addEventListener('click', delPersonal);

 function delPersonal(){
 	localStorage.clear();
 	document.getElementById('frm1').reset();
 }

