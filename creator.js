var a = document.getElementById('myF').addEventListener('click', addPersonal);

//var b = document.getElementById('bt2').addEventListener('click',display);

var b = document.getElementById('flskill').addEventListener('click',skillAdd);
var c = document.getElementById('myF2').addEventListener('click',clear);
var d = document.getElementById('flwork').addEventListener('click',workAdd);


function addPersonal(e){
	var ar = new Array();
	var name = document.getElementById('firstName').value;
	var contact = document.getElementById('c1').value;
	var email = document.getElementById('email1').value;
	var address = document.getElementById('address1').value;
	var other  = document.getElementById('op1').value;
	var qualification = document.getElementById('q1').value;
	var institute = document.getElementById('i1').value;
	var percentage = document.getElementById('perc1').value;
	var ro = document.getElementById('ro1').value;
	
	ar.push(name);
	ar.push(contact);
	ar.push(email);
	ar.push(address);
	ar.push(other);
	ar.push(ro);
	ar.push(qualification);
	ar.push(institute);
	ar.push(percentage);
	
	
	
	  localStorage.setItem('session',JSON.stringify(ar));

	
	// document.getElementById('name2').innerHTML = name;
	// document.getElementById('name2').innerHTML = contact;
	// document.getElementById('contact2').innerHTML = email;
	// document.getElementById('address2').innerHTML = address;
	// document.getElementById('op2').innerHTML = other;
	e.preventDefault();
 }

var skill = [[]];
 

 skill[0] = new Array();
skill[1] = new Array();

function skillAdd(){
	
	skill[0].push(document.getElementById('s1').value);
	skill[1].push(document.getElementById('sl1').value.toLowerCase());
	
	var confirmation = confirm('A new skill added to skill set,  do you want to add more skills to your resume ?');

	if(confirmation===false){
		localStorage.setItem('skillName',JSON.stringify(skill[0]));
		localStorage.setItem('skillLevel',JSON.stringify(skill[1]));
	}

	else{
	document.getElementById("skiform").reset();
	}



return skill;
}







var work = [[]];
 

work[0] = new Array();
work[1] = new Array();
work[2] = new Array();
work[3] = new Array();

function workAdd(){
	
	work[0].push(document.getElementById('com1').value);
	work[1].push(document.getElementById('role1').value.toUpperCase());
	work[2].push(document.getElementById('dur1').value);
	work[3].push(document.getElementById('wordes1').value);

	
	var confirmation = confirm('A new work experience added to skill set, do you want to add more work experience to your resume ?');

	if(confirmation===false){
		localStorage.setItem('companyName',JSON.stringify(work[0]));
		localStorage.setItem('role',JSON.stringify(work[1]));
		localStorage.setItem('duration',JSON.stringify(work[2]));
		localStorage.setItem('description',JSON.stringify(work[3]));
	}

	else{
	document.getElementById("wform").reset();
	}



return work;
}





function clear(){
	localStorage.clear();
}
