var arr = JSON.parse(localStorage.getItem('session'));

document.getElementById('name2').innerHTML = arr[0];
document.getElementById('contact2').innerHTML = '<i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+arr[1];
document.getElementById('email2').innerHTML = '<i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+arr[2];
document.getElementById('address2').innerHTML = '<i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" ></i>'+arr[3];
document.getElementById('op2').innerHTML = '<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" ></i>'+arr[4];
document.getElementById('q2').innerHTML = '<b style = "margin-right: 10%;">'+'Qualification: '+'</b>'+arr[6];
document.getElementById('i2').innerHTML = '<b style = "margin-right: 17%;">'+'Institute: '+'</b>'+arr[7];

document.getElementById('p2').innerHTML = '<b style = "margin-right: 12%;">'+'Percentage: '+'</b>'+arr[8]+'%';


var skillName = JSON.parse(localStorage.getItem('skillName'));
var skillLevel = JSON.parse(localStorage.getItem('skillLevel'));
var addingSkill = document.getElementById('boc');

addingSkill.innerHTML = '';

for(var i =0;i<skillName.length;i++){
	var skillN = skillName[i];
	var skillL = skillLevel[i];
	if(skillL==='pro'){
	addingSkill.innerHTML += '<p>'+skillN+'</p>'+'<div class="w3-light-grey w3-round-xlarge">'+'<div class="w3-round-xlarge w3-teal" style="height:24px;width:100%">'+'</div>'+'</div>';
	}
	else if(skillL==='expert'){
	addingSkill.innerHTML += '<p>'+skillN+'</p>'+'<div class="w3-light-grey w3-round-xlarge">'+'<div class="w3-round-xlarge w3-teal" style="height:24px;width:75%">'+'</div>'+'</div>';
	}

	else if(skillL==='intermediate'){
	addingSkill.innerHTML += '<p>'+skillN+'</p>'+'<div class="w3-light-grey w3-round-xlarge">'+'<div class="w3-round-xlarge w3-teal" style="height:24px;width:50%">'+'</div>'+'</div>';
	}

	else{
	addingSkill.innerHTML += '<p>'+skillN+'</p>'+'<div class="w3-light-grey w3-round-xlarge">'+'<div class="w3-round-xlarge w3-teal" style="height:24px;width:25%">'+'</div>'+'</div>';
	}



}

document.getElementById('roller').innerHTML = '<h6 style = "color: gray;">'+'('+arr[5]+')'+'</h6>';

var comName = JSON.parse(localStorage.getItem('companyName'));
var wRole = JSON.parse(localStorage.getItem('role'));
var wDuration = JSON.parse(localStorage.getItem('duration'));
var wDescription = JSON.parse(localStorage.getItem('description'));


   
  var addingWork = document.getElementById('workoholic2');

  var addingwork2 = document.getElementById('workoholic1');
console.log(comName);

 		if(comName=== null){

 			addingwork2.innerHTML = '';
 		}	
 				

 			else
 			{
 				addingwork2.innerHTML = '<div class="w3-container w3-card w3-white">'+ '<h2 class="w3-text-grey w3-padding-16">'+ '<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal">' + '</i>'+'Work Experience'+'</h2>'+'</div>';
 			}
 			
 			
 	

 addingWork.innerHTML = '';

 if (wRole!=null) {

 	for(var i =0;i<comName.length;i++){
				var WorkN = comName[i];
				var WorkR = wRole[i];
				var WorkD = wDuration[i];
				var workDe = wDescription[i];

				addingWork.innerHTML += '<BR>'+'<div class="w3-container w3-card w3-white">'+'<h5 class="w3-opacity">'+'<b>'+wRole[i]+' at: '+'</b>'+'</h5>'+'<h5 class="w3-opacity">'+'<b>'+comName[i]+'</b>'+'</h5>'+'<h6 class="w3-text-teal">'+'<i class="fa fa-calendar fa-fw w3-margin-right">'+'</i>'+wDuration[i]+'</h6>'+'<p>'+wDescription[i]+'</p>'+'<hr>'+'</div>';
	}
 }
 			
 		var prName = JSON.parse(localStorage.getItem('projecttitle'));

var prDescription = JSON.parse(localStorage.getItem('projectDescription'));


    var addingproject = document.getElementById('hoja');

 addingproject.innerHTML = '';
 


 		if(prName!= null){
 			addingproject.innerHTML += '<div class="w3-container w3-card w3-white">'+ '<h2 class="w3-text-grey w3-padding-16">'+ '<i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal">' + '</i>'+'Projects'+'</h2>'+'</div>';
 			for(var i =0;i<prName.length;i++){
				

				addingproject.innerHTML += '<BR>'+'<div class="w3-container w3-card w3-white">'+'<h5 class="w3-opacity">'+'<b>'+prName[i]+'</b>'+'</h5>'+'<p>'+prDescription[i]+'</p>'+'<hr>'+'</div>';
	}

 		}
