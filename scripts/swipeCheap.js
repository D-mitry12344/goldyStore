let masCategorys = document.querySelectorAll(".btn-category-cheap button");
let optionsProducts = document.querySelector(".optionsProducts");
let btnNavCheap = document.querySelectorAll(".btn-nav-cheap button");

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
masCategorys[0].style.background="#303030";
masCategorys[0].style.color="white";
masCategorys.forEach(function(Ctr){
	let i = value;
	btnNavCheap.forEach(function(btn){		
		btn.addEventListener("click",function(event) {
			if(btn == btnNavCheap[0]){
				i--
				if(i===-1){i=3;}
				btnCtr(i)
				masValueDiv.forEach(function(div){
						div.style.display="flex"
						div.classList.add('options');
						optionsProducts.prepend(div);
						if(div !== masValueDiv[i]){
							div.style.display="none";
					}
				})
			}
			if(btn == btnNavCheap[1]){
				i++
				if(i === 4){i=0;}
				btnCtr(i)
				masValueDiv.forEach(function(div){
					div.style.display="flex"
					div.classList.add('options');
					optionsProducts.prepend(div);
					if(div !== masValueDiv[i]){
						div.style.display="none";
					}
				})
			}
		})
	})

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

//like function

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

//function eyes

let eyes = document.querySelectorAll("#eye");
let optionDivs = document.querySelectorAll(".optionDiv");
let divfirst = document.createElement("div");
let infoProduct = document.querySelector("#infoProduct")
function createBlock(option){
	divfirst.innerHTML=`	<div id="selectCheapOne">
								<label id="selectCheap">????????????</label>
								<ul class="selectMat">
									<li>?????????? ????????????</li>
									<li>????????????</li>
									<li>??????????????</li>
								</ul>
							</div>
							<div id="selectCheapTwo">
								<label id="selectCheapSize"> ????????????:19.5 </label>
								<ul class="selectSize">
									<li> 16 </li>
									<li> 17 </li>
									<li> 19 </li>
									<li> 19.5 </li>					
								</ul>
							</div>
						
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
				let selectCheap = document.querySelector("#selectCheap");
				let selectLabelSize = document.querySelector("#selectCheapSize");

				let selectOne = document.querySelector('#selectCheapOne');
				let selectTwo = document.querySelector('#selectCheapTwo');

				let listMat = document.querySelectorAll(".selectMat li");
				let selectMat = document.querySelector(".selectMat");

				let listSize = document.querySelectorAll(".selectSize li");
				let selectSize = document.querySelector(".selectSize");
				selectOne.addEventListener("click", function(){
					if(selectMat.style.display===''){
						selectMat.style.display='block'
					}else{
						selectMat.style.display=''
					}
					listMat.forEach(function(lis){
						lis.addEventListener("click",function(){
						selectCheap.textContent = lis.textContent;
						})
					})
				})

				selectTwo.addEventListener("click", function(){
					if(selectSize.style.display===''){
						selectSize.style.display='block'
					}else{
						selectSize.style.display=''
					}
					listSize.forEach(function(lis){
						lis.addEventListener("click",function(){
						selectCheapSize.textContent = lis.textContent;
						})
					})
				})
			});
		}
	check++;
	if(check===16){
		check=0;
	}
})


//check radio products

let radios = document.querySelectorAll('.positionImgOption');
let masRadioFirst = [];
let masRadioSecond = [];
let masRadioThrid = [];
let masRadioFour=[];

let masDivFirst = [];
let masDivSecond = [];
let masDivThrid = [];
let masDivFour=[];
let m=0;
optionDivs.forEach(function(div){
	if(m>=0 && m<=3){
		masDivFirst.push(div)
	};
	if(m>=4 && m<=7){
		masDivSecond.push(div)
	};
	if(m>=8 && m<=11){
		masDivThrid.push(div)
	};	
	if(m>=12 && m<=15){
		masDivFour.push(div)
	};
	m++;
	if(m===16){m=0}
})

let l =0;
radios.forEach(function(radio){
	if(l>=12 && l<24){
		masRadioSecond.push(radio);
	};
	if(l>=36 && l<48){
		masRadioFour.push(radio)
	};
	if(l>=0 && l<12){
		masRadioFirst.push(radio)
	};	
	if(l>=24 && l<36){
		masRadioThrid.push(radio)
	};
	l++;
	if(l===48){
		l=0;
	}
})

//radio click

let a=0;
let masimgProd = ['img/popular/clock.png','img/popular/pendants.png','img/popular/earrings.png','img/cheap/ring-1.png']
function forRadio(mas,radio,imgProd,option){
	    if(a===2 || a=== 5 || a===8 || a===11){
	    	if(a==2){
	    		radio.addEventListener("click", function(){
	    			mas[0].style.background="none";
					mas[1].style.background="none";
					mas[2].style.background="#303030";
					option[0].childNodes[11].attributes.src.value="img/cheap/ring-3.png";
					option[0].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    	if(a==5){
	    		radio.addEventListener("click", function(){
	    			mas[3].style.background="none";
					mas[4].style.background="none";
					mas[5].style.background="#303030";
					option[1].childNodes[11].attributes.src.value="img/cheap/ring-3.png";
					option[1].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    	if(a==8){
	    		radio.addEventListener("click", function(){
	    			mas[6].style.background="none";
					mas[7].style.background="none";
					mas[8].style.background="#303030";
					option[2].childNodes[11].attributes.src.value="img/cheap/ring-3.png";
					option[2].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    	if(a==11){
	    		radio.addEventListener("click", function(){
	    			mas[9].style.background="none";
					mas[10].style.background="none";
					mas[11].style.background="#303030";
					option[3].childNodes[11].attributes.src.value="img/cheap/ring-3.png";
					option[3].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    }
	    if(a===0 || a=== 3 || a===6 || a===9){
	    	if(a==0){
	    		radio.addEventListener("click", function(){
	    			mas[2].style.background="none";
					mas[1].style.background="none";
					mas[0].style.background="#303030";
					option[0].childNodes[11].attributes.src.value=imgProd;
					option[0].childNodes[11].attributes.style.value="margin-left:100px;"
	    	
	    	})}
	    	if(a==3){
	    		radio.addEventListener("click", function(){
	    			mas[5].style.background="none";
					mas[4].style.background="none";
					mas[3].style.background="#303030";
					option[1].childNodes[11].attributes.src.value=imgProd;
					option[1].childNodes[11].attributes.style.value="margin-left:100px;"
	    	
	    	})}
	    	if(a==6){
	    		radio.addEventListener("click", function(){
	    			mas[8].style.background="none";
					mas[7].style.background="none";
					mas[6].style.background="#303030";
					option[2].childNodes[11].attributes.src.value=imgProd;
					option[2].childNodes[11].attributes.style.value="margin-left:100px;"
	    	
	    	})}
	    	if(a==9){
	    		radio.addEventListener("click", function(){
	    			mas[11].style.background="none";
					mas[10].style.background="none";
					mas[9].style.background="#303030";
					option[3].childNodes[11].attributes.src.value=imgProd;
					option[3].childNodes[11].attributes.style.value="margin-left:100px;"
	    	
	    	})}
	    }
	    if(a===1 || a=== 4 || a===7 || a===10){
	    	if(a==1){
	    		radio.addEventListener("click", function(){
	    			mas[0].style.background="none";
					mas[2].style.background="none";
					mas[1].style.background="#303030";
					option[0].childNodes[11].attributes.src.value="img/cheap/ring-2.png";
					option[0].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    	if(a==4){
	    		radio.addEventListener("click", function(){
	    			mas[3].style.background="none";
					mas[5].style.background="none";
					mas[4].style.background="#303030";
					option[1].childNodes[11].attributes.src.value="img/cheap/ring-2.png";
					option[1].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    	if(a==7){
	    		radio.addEventListener("click", function(){
	    			mas[6].style.background="none";
					mas[8].style.background="none";
					mas[7].style.background="#303030";
					option[2].childNodes[11].attributes.src.value="img/cheap/ring-2.png";
					option[2].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    	if(a==10){
	    		radio.addEventListener("click", function(){
	    			mas[9].style.background="none";
					mas[11].style.background="none";
					mas[10].style.background="#303030";
					option[3].childNodes[11].attributes.src.value="img/cheap/ring-2.png";
					option[3].childNodes[11].attributes.style.value=""
	    	
	    	})}
	    }
		a++;
		if(a===12){a=0}	
}

masRadioFirst.forEach(function(radio){
	forRadio(masRadioFirst, radio,masimgProd[0],masDivFirst)
});

masRadioSecond.forEach(function(radio){
	forRadio(masRadioSecond, radio,masimgProd[1],masDivSecond)
});

masRadioThrid.forEach(function(radio){
	forRadio(masRadioThrid, radio,masimgProd[2],masDivThrid)
});

masRadioFour.forEach(function(radio){
	forRadio(masRadioFour, radio,masimgProd[3],masDivFour)
});

//function BtnNav

function btnCtr(i){
	if(i===0){
		masCategorys[1].style.background="#f0f0f0";
		masCategorys[1].style.color="#303030";
		masCategorys[2].style.background="#f0f0f0";
		masCategorys[2].style.color="#303030";
		masCategorys[3].style.background="#f0f0f0";
		masCategorys[3].style.color="#303030";

		masCategorys[0].style.background="#303030";
		masCategorys[0].style.color="white";
			
	}
	if(i===1){
		masCategorys[3].style.background="#f0f0f0";
		masCategorys[3].style.color="#303030";
		masCategorys[2].style.background="#f0f0f0";
		masCategorys[2].style.color="#303030";
		masCategorys[0].style.background="#f0f0f0";
		masCategorys[0].style.color="#303030";

		masCategorys[1].style.background="#303030";
		masCategorys[1].style.color="white";
	}
	if(i===2){
		masCategorys[3].style.background="#f0f0f0";
		masCategorys[3].style.color="#303030";
		masCategorys[1].style.background="#f0f0f0";
		masCategorys[1].style.color="#303030";
		masCategorys[0].style.background="#f0f0f0";
		masCategorys[0].style.color="#303030";

		masCategorys[2].style.background="#303030";
		masCategorys[2].style.color="white";
	}
	if(i===3){
		masCategorys[1].style.background="#f0f0f0";
		masCategorys[1].style.color="#303030";
		masCategorys[2].style.background="#f0f0f0";
		masCategorys[2].style.color="#303030";
		masCategorys[0].style.background="#f0f0f0";
		masCategorys[0].style.color="#303030";

		masCategorys[3].style.background="#303030";
		masCategorys[3].style.color="white";
	}
}