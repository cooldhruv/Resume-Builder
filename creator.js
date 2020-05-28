var a = document.getElementById('myF').addEventListener('click', addPersonal);

//var b = document.getElementById('bt2').addEventListener('click',display);

var b = document.getElementById('flskill').addEventListener('click',skillFlag);
var c = document.getElementById('myF2').addEventListener('click',clear);
var skill_flag = 0;

function skillFlag(y){
	skill_flag++;
	skillEnter();
	return skill_flag;



y.preventDefault();
}


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
	var skilla = [];
	var skillb = [];

	for(var i=1;i<=skill_flag;i++){
		skilla[i] = document.getElementById("skillera\''+i+'\'").value;
		skillb[i] = document.getElementById("skillerb\''+i+'\'").value;
	}

	ar.push(name);
	ar.push(contact);
	ar.push(email);
	ar.push(address);
	ar.push(other);
	ar.push(qualification);
	ar.push(institute);
	ar.push(percentage);
	
	for(var i=1;i<=skill_flag;i++){
		ar.push(skilla[i]); 
		ar.push(skillb[i]); 
	}
	
	  localStorage.setItem('session',JSON.stringify(ar));

	
	// document.getElementById('name2').innerHTML = name;
	// document.getElementById('name2').innerHTML = contact;
	// document.getElementById('contact2').innerHTML = email;
	// document.getElementById('address2').innerHTML = address;
	// document.getElementById('op2').innerHTML = other;
	e.preventDefault();
 }

 // var b = document.getElementById('myF2').addEventListener('click', delPersonal);

 // function delPersonal(){
 // 	localStorage.clear();
 // 	document.getElementById('frm1').reset();
 // }


function skillEnter(){
	
	var skiller = document.getElementById('ski');

 skiller.innerHTML = '';


	for(var i=1;i<=skill_flag;i++){
	skiller.innerHTML += '<label>'+'Skill \''+i+'\': '+'</label>'+' '+
          '<input type="text"  id="skillera\''+i+'\'" placeholder="" class="form-control">'+'</input>'+
          '<label >'+'Proficiency in Skill \''+i+'\': '+'</label>'+' '+
          '<input type="text"  id="skillerb\''+i+'\'" placeholder="(in range 0-100)" class="form-control">'+'</input>'+'<br>'
		}

	skiller.innerHTML+='<br>'	
 
     }     


function clear(){
	localStorage.clear();
}

