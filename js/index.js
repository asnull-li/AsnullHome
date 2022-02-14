var nowTimeEle = document.querySelector('.footer').querySelector('span');
var today = new Date();
var year = today.getFullYear();
nowTimeEle.innerHTML = year;