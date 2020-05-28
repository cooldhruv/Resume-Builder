var arr = JSON.parse(localStorage.getItem('session'));

document.getElementById('name2').innerHTML += arr[0];
document.getElementById('contact2').innerHTML = '<i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>'+arr[1];
document.getElementById('email2').innerHTML = '<i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>'+arr[2];
document.getElementById('address2').innerHTML = '<i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" ></i>'+arr[3];
document.getElementById('op2').innerHTML = '<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" ></i>'+arr[4];
document.getElementById('q2').innerHTML = '<b style = "margin-right: 10%;">'+'Qualification: '+'</b>'+arr[5];
document.getElementById('i2').innerHTML = '<b style = "margin-right: 17%;">'+'Institute: '+'</b>'+arr[6];

document.getElementById('p2').innerHTML = '<b style = "margin-right: 10%;">'+'Percentage: '+'</b>'+arr[7]+'%';
