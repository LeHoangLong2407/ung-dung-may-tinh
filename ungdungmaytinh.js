function cong(){
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var tong = parseInt(s1) + parseInt(s2);
	document.getElementById('ketqua').innerHTML = "Tổng là: "+tong;
}
function tru(){
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var hieu = parseInt(s1) - parseInt(s2);
	document.getElementById('ketqua').innerHTML = "Hiệu là: "+hieu;
}
function nhan(){
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var tich = parseInt(s1) * parseInt(s2);
	document.getElementById('ketqua').innerHTML = "Tích là: "+tich;
}
function chia(){
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var thuong = parseInt(s1) / parseInt(s2);
	document.getElementById('ketqua').innerHTML = "Thương là: "+thuong;
}