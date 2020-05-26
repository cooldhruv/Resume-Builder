var arr = JSON.parse(localStorage.getItem('session'));

document.getElementById('name2').innerHTML = arr[0];
document.getElementById('contact2').innerHTML = arr[1];
document.getElementById('email2').innerHTML = arr[2];
document.getElementById('address2').innerHTML = arr[3];
document.getElementById('op2').innerHTML = arr[4];