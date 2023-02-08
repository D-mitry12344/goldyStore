let radios = document.querySelectorAll('.positionImgOption');
let l =2;
radios.forEach(function(radio){
	if(radio === radios[p]){
		console.log(radio.classList)
	}
	p=p+3
})