let radios = document.querySelectorAll('.positionImgOption');
let c=0;
let l =3;
let y=6;
let u=9;
let masRadioFirst = [];
let masRadioSecond = [];
let masRadioThrid = [];
let masRadioFour=[]
radios.forEach(function(radio){
	if(radio === radios[l] && l<6){
		masRadioSecond.push(radio,);
		l=l+1;
	};
	if(radio === radios[y] && y<9){
		y=y+1;
		masRadioThrid.push(radio)
	};
	if(radio === radios[c] && c<3){
		c=c+1;
		masRadioFirst.push(radio)
	};	
	if(radio === radios[u] && u<12){
		u=u+1;
		masRadioFour.push(radio)
	};
})




masRadioFirst.forEach(function(radio){
	let i=0;
	radio.addEventListener("click",function(event){
		if(radio === masRadioFirst[i]){
			console.log(i)
			if(i === 1){
				masRadioFirst[0].style.background="none";
				masRadioFirst[2].style.background="none";
				masRadioFirst[1].style.background="#303030";
				optionDivs[0].childNodes[11].attributes[0].value= (i===1) ? "img/cheap/ring-2.png" : "img/cheap/ring-1.png";
			}
			if(i === 2){
				masRadioFirst[0].style.background="none";
				masRadioFirst[1].style.background="none";
				masRadioFirst[2].style.background="#303030";
				optionDivs[0].childNodes[11].attributes[0].value= (i===2) ? "img/cheap/ring-4.png" : "img/cheap/ring-1.png";
			
			}
			if(i === 0){
				masRadioFirst[1].style.background="none";
				masRadioFirst[2].style.background="none";
				masRadioFirst[0].style.background="#303030";
				optionDivs[0].childNodes[11].attributes[0].value= (i===0) ? "img/cheap/ring-1.png" : "img/cheap/ring-1.png";
			}
			
		}
		i++;
		if(i===3){
			i=0;
		}
	})
	
})


masRadioSecond.forEach(function(radio){
	let i=0;
	radio.addEventListener("click",function(event){
		if(radio === masRadioSecond[i]){
			console.log(i)
			if(i === 1){
				masRadioSecond[0].style.background="none";
				masRadioSecond[2].style.background="none";
				masRadioSecond[1].style.background="#303030";
				optionDivs[1].childNodes[11].attributes[0].value= (i===1) ? "img/cheap/ring-3.png" : "img/cheap/ring-1.png";
			}
			if(i === 2){
				masRadioSecond[0].style.background="none";
				masRadioSecond[1].style.background="none";
				masRadioSecond[2].style.background="#303030";
				optionDivs[1].childNodes[11].attributes[0].value= (i===2) ? "img/cheap/ring-4.png" : "img/cheap/ring-1.png";
			
			}
			if(i === 0){
				masRadioSecond[1].style.background="none";
				masRadioSecond[2].style.background="none";
				masRadioSecond[0].style.background="#303030";
				optionDivs[1].childNodes[11].attributes[0].value= (i===0) ? "img/cheap/ring-2.png" : "img/cheap/ring-1.png";
			}
			
		}
		i++;
		if(i===3){
			i=0;
		}
	})
	
})


masRadioThrid.forEach(function(radio){
	let i=0;
	radio.addEventListener("click",function(event){
		if(radio === masRadioThrid[i]){
			console.log(i)
			if(i === 1){
				masRadioThrid[0].style.background="none";
				masRadioThrid[2].style.background="none";
				masRadioThrid[1].style.background="#303030";
				optionDivs[2].childNodes[11].attributes[0].value= (i===1) ? "img/cheap/ring-1.png" : "img/cheap/ring-1.png";
			}
			if(i === 2){
				masRadioThrid[0].style.background="none";
				masRadioThrid[1].style.background="none";
				masRadioThrid[2].style.background="#303030";
				optionDivs[2].childNodes[11].attributes[0].value= (i===2) ? "img/cheap/ring-4.png" : "img/cheap/ring-1.png";
			
			}
			if(i === 0){
				masRadioThrid[1].style.background="none";
				masRadioThrid[2].style.background="none";
				masRadioThrid[0].style.background="#303030";
				optionDivs[2].childNodes[11].attributes[0].value= (i===0) ? "img/cheap/ring-3.png" : "img/cheap/ring-1.png";
			}
			
		}
		i++;
		if(i===3){
			i=0;
		}
	})
	
})


masRadioFour.forEach(function(radio){
	let i=0;
	radio.addEventListener("click",function(event){
		if(radio === masRadioFour[i]){
			console.log(i)
			if(i === 1){
				masRadioFour[0].style.background="none";
				masRadioFour[2].style.background="none";
				masRadioFour[1].style.background="#303030";
				optionDivs[3].childNodes[11].attributes[0].value= (i===1) ? "img/cheap/ring-2.png" : "img/cheap/ring-1.png";
			}
			if(i === 2){
				masRadioFour[0].style.background="none";
				masRadioFour[1].style.background="none";
				masRadioFour[2].style.background="#303030";
				optionDivs[3].childNodes[11].attributes[0].value= (i===2) ? "img/cheap/ring-1.png" : "img/cheap/ring-1.png";
			
			}
			if(i === 0){
				masRadioFour[1].style.background="none";
				masRadioFour[2].style.background="none";
				masRadioFour[0].style.background="#303030";
				optionDivs[3].childNodes[11].attributes[0].value= (i===0) ? "img/cheap/ring-4.png" : "img/cheap/ring-1.png";
			}
			
		}
		i++;
		if(i===3){
			i=0;
		}
	})
	
})
