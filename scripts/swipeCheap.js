let masCategorys = document.querySelectorAll(".btn-category-cheap button");
let optionsProducts = document.querySelector(".optionsProducts");
let firstCategory = document.createElement("div");
let secondCategory = document.createElement("div");
let thridCategory = document.createElement("div");
let fourCategory = document.createElement("div");
let value =0;
firstCategory.innerHTML=divRings;
secondCategory.innerHTML=divEarrings;
thridCategory.innerHTML=divPendants;
fourCategory.innerHTML=divClock;
let masValueDiv=[firstCategory,secondCategory,thridCategory,fourCategory]
masValueDiv.forEach(function(div){
	div.style.display="flex"
	div.classList.add('options');
	optionsProducts.prepend(div);
	if(div !== masValueDiv[0]){
		div.style.display="none";
	}
})

masCategorys.forEach(function(Ctr){
	let i = value;
	/*Ctr.onmouseover = function(event) {
				Ctr.style.background ="#f0f0f0";
				Ctr.style.color="#303030";
				if(event.fromElement.localName === 'button'){
					Ctr.style.background ="#dddddd";
				}
			}*/
	Ctr.addEventListener("click", function(){
		if(i===1){
			masValueDiv[1].style.display="none";
			masValueDiv[2].style.display="none";
			masValueDiv[3].style.display="none";
			masValueDiv[0].style.display="flex"
		
			masCategorys[1].style.background="#f0f0f0";
			masCategorys[1].style.color="#303030";
			masCategorys[2].style.background="#f0f0f0";
			masCategorys[2].style.color="#303030";
			masCategorys[3].style.background="#f0f0f0";
			masCategorys[3].style.color="#303030";

			Ctr.style.background="#303030";
			Ctr.style.color="white";
			
		}
		if(i===2){
			masValueDiv[0].style.display="none";
			masValueDiv[2].style.display="none";
			masValueDiv[3].style.display="none";
			masValueDiv[1].style.display="flex"
			
			masCategorys[3].style.background="#f0f0f0";
			masCategorys[3].style.color="#303030";
			masCategorys[2].style.background="#f0f0f0";
			masCategorys[2].style.color="#303030";
			masCategorys[0].style.background="#f0f0f0";
			masCategorys[0].style.color="#303030";

			Ctr.style.background="#303030";
			Ctr.style.color="white";
		}
		if(i===3){
			masValueDiv[1].style.display="none";
			masValueDiv[0].style.display="none";
			masValueDiv[3].style.display="none";
			masValueDiv[2].style.display="flex"
			
			masCategorys[3].style.background="#f0f0f0";
			masCategorys[3].style.color="#303030";
			masCategorys[1].style.background="#f0f0f0";
			masCategorys[1].style.color="#303030";
			masCategorys[0].style.background="#f0f0f0";
			masCategorys[0].style.color="#303030";

			Ctr.style.background="#303030";
			Ctr.style.color="white";
		}
		if(i===0){
			masValueDiv[1].style.display="none";
			masValueDiv[2].style.display="none";
			masValueDiv[0].style.display="none";
			masValueDiv[3].style.display="flex"
			
			masCategorys[1].style.background="#f0f0f0";
			masCategorys[1].style.color="#303030";
			masCategorys[2].style.background="#f0f0f0";
			masCategorys[2].style.color="#303030";
			masCategorys[0].style.background="#f0f0f0";
			masCategorys[0].style.color="#303030";

			Ctr.style.background="#303030";
			Ctr.style.color="white";
		}
	})
	i++;
	value = i;
	if(i===4){
		i=0;
	
	}

	
})

let steckLikes = document.querySelector("#steckLike");
steckLikes.style.background="none";
let p = 0;
likesCheap = document.querySelectorAll("#like");
likesCheap.forEach(function(like) {
	like.addEventListener('click', function (event) {
	  	if(like === likesCheap[16]){
	  		like.classList.toggle('btn-save-product');
	  		like.classList.toggle('btn-save-product-click');
	  		if(like.classList.value === 'btn-save-product'){
	  			p=p-1;
	  		}
	  		if(like.classList.value === 'btn-save-product-click') {
	  			p++;
	  		}
	  	}
	  	if(like !== likesCheap[16]){
		  	if(like.attributes[1].value === "img/likes.png"){
		  		like.attributes[1].value="img/cheap/likeProduct.png";
		  		p=p-1;
		  	}else{
				like.attributes[1].value="img/likes.png";
				p++;
			}
		}
		if(p === 0){
			steckLikes.style.background="none"
		}else{
			steckLikes.style.background = "#E46942"
			steckLikes.textContent = p;
		}
	})
});

let eyes = document.querySelectorAll("#eye");
let optionDivs = document.querySelectorAll(".optionDiv");
let divfirst = document.createElement("div");
let infoProduct = document.querySelector("#infoProduct")
function createBlock(option){
	divfirst.innerHTML=`
							<select>
								<option>Белое золото</option>
								<option>Желтое золото</option>
								<option>Серебро</option>
							</select>
							<select>
								<option> Размер:16 </option>
								<option> Размер:16.5 </option>
								<option> Размер:17 </option>
								<option> Размер:17.5 </option>
								<option> Размер:18 </option>
								<option> Размер:18.5 </option>
								<option> Размер:19 </option>
								<option> Размер:19.5 </option>
							</select>
						
							`;
	divfirst.classList.add('blockInfoProduct');
	
	option.append(divfirst);
}
divfirst.id="infoProduct";

let check=0;
eyes.forEach(function(eye){
	if(eye === eyes[check]){
			eye.addEventListener("click", function(event){
				optionDivs.forEach(function(option){
					if(option.classList.value === eye.parentElement.classList.value){
						if(option.parentElement.style.display === "flex"){
							if(divfirst.style.display==="block"){
								divfirst.style.display="none";	
							}else{
								if(divfirst.style.background === "" || divfirst.style.display==="none"){
									createBlock(option);
									divfirst.style.display="block";	
								}
							}
						}
					}
				
				})
			});
		}
	check++;
	if(check===16){
		check=0;
	}
})


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
	if(radio === radios[l] && l<24){
		masRadioSecond.push(radio,);
		l=l+1;
	};
	if(radio === radios[y] && y<48){
		y=y+1;
		masRadioThrid.push(radio)
	};
	if(radio === radios[c] && c<12){
		c=c+1;
		masRadioFirst.push(radio)
	};	
	if(radio === radios[u] && u<36){
		u=u+1;
		masRadioFour.push(radio)
	};
})



let a=0;

masRadioFirst.forEach(function(radio){
	    if(a===2 || a=== 5 || a===8 || a===11){
	    	if(a==2){
	    		radio.addEventListener("click", function(){
	    			masRadioFirst[0].style.background="none";
					masRadioFirst[1].style.background="none";
					masRadioFirst[2].style.background="#303030";
					optionDivs[0].childNodes[11].attributes.src.value="img/cheap/ring-2.png"
	    	
	    	
	    	})}
	    }
		a++;
		if(a===12){a=0}	
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

