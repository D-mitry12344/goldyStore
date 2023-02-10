let blockHit = document.querySelector(".blockProduct")
let firstProduct=document.createElement("div");
let secondProduct=document.createElement("div");
let thridProduct=document.createElement("div");
firstProduct.innerHTML=divProductRing
secondProduct.innerHTML=divProductRingTwo;
thridProduct.innerHTML=divProductRingThree;
let masProducts = [firstProduct, secondProduct, thridProduct];

masProducts.forEach(function(div){
	blockHit.append(div)
	div.style.display="block"
	if(div !== masProducts[0]){
		div.style.display="none"
	}
})

let btnHitNav = document.querySelectorAll(".btn-nav-products button");

let btnHitImg = document.querySelectorAll(".itself-product button");
let productImg = document.querySelectorAll(".itself-product img")

let stars = document.querySelectorAll(".star");
let numberRating = document.querySelector(".rating p");

let timerDivs =document.querySelectorAll('.timer div');

let btnColors = document.querySelectorAll('.color-btn button');
let btnSize = document.querySelectorAll('.btn-size-product button');
let btnActions = document.querySelectorAll('.productAction button');
let basketP = document.querySelector('.basket p')

// navigation Hit
let numberHit =0 ;
btnHitNav.forEach(function(btn){
	btn.addEventListener("click",function(event) {
			if(btn === btnHitNav[0]){
				let k = numberHit;
				k--
				if(k===-1){k=2;}
				masProducts.forEach(function(div){
						div.style.display="none"
						if(div === masProducts[k]){
							div.style.display="block"
					}
				})
				numberHit = k
			}
			if(btn === btnHitNav[1]){
				let k = numberHit;
				k++
				if(k===3){k=0;}
				masProducts.forEach(function(div){
						div.style.display="none"
						if(div === masProducts[k]){
							div.style.display="block"
					}
				})
				numberHit = k
			}

		})

		
})

let divAnswer = document.createElement("div");
function sayAnswer(){
	divAnswer.innerHTML=`
									<p class="questionP">
											Также 
											как существующая 
											теория напрямую зависит от
											экономической целесообразности принимаемых решений.
									</p>
								`
	divAnswer.classList.add('divQuestion')
	question.prepend(divAnswer)
}
let question = document.querySelector(".nameSize p:nth-child(2)")
question.addEventListener("mouseover",function(){
	setTimeout(sayAnswer, 1000)
})
question.addEventListener("mouseout",function(){
	let answer = document.querySelector('.divQuestion')
	question.removeChild(answer)
})



btnSize[0].style.background="#303030";
btnSize[0].style.color="white";
btnSize[10].style.background="#303030";
btnSize[10].style.color="white";
btnSize[20].style.background="#303030";
btnSize[20].style.color="white";
btnSize.forEach(function(btn){
	btn.addEventListener("click",function(event){
		btnSize.forEach(function(size){
			size.style.background="white"
			size.style.color="#303030";
			if(size === btnSize[9] || size === btnSize[8] || size === btnSize[18] || size === btnSize[19] || size === btnSize[29]|| size === btnSize[28]){
				size.style.background="#f4f4f4"
				size.style.color="#303030";
			}
		})
		btn.style.background="#303030"
		btn.style.color="white"
	})
})

let numberImg = 0;
let masBtnColorOne = [];
let masBtnColorTwo = [];
let masBtnColorThree = [];
btnColors.forEach(function(btn){
	h = numberImg;
	if( h==0 || h==1 || h===2 ){
		masBtnColorOne.push(btnColors[h])
	}
	if( h==4 || h===5 || h===6){
		masBtnColorTwo.push(btnColors[h])
	}
	if(h===8|| h==9 || h==10){
		masBtnColorThree.push(btnColors[h])
	}
	h++;
	if(h===12){h=0}
	numberImg = h
})

masBtnColorOne[1].style.transform="scale(1.2)"
masBtnColorOne.forEach(function(btn){
	btn.addEventListener("click", function(event){
		if(btn===masBtnColorOne[0]){
			productImg[0].attributes.src.value = "img/product/ringGrey.png";
			masBtnColorOne.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
		if(btn===masBtnColorOne[1]){
			productImg[0].attributes.src.value = "img/product/ring.png";
			masBtnColorOne.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
		if(btn===masBtnColorOne[2]){
			productImg[0].attributes.src.value = "img/product/ringGrey.png";
			masBtnColorOne.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
	})
})

masBtnColorTwo[1].style.transform="scale(1.2)"
masBtnColorTwo.forEach(function(btn){
	btn.addEventListener("click", function(event){
		if(btn===masBtnColorTwo[0]){
			productImg[1].attributes.src.value = "img/product/ringGrey.png";
			masBtnColorTwo.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
		if(btn===masBtnColorTwo[1]){
			productImg[1].attributes.src.value = "img/product/ring.png";
			masBtnColorTwo.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
		if(btn===masBtnColorTwo[2]){
			productImg[1].attributes.src.value = "img/product/ringGrey.png";
			masBtnColorTwo.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
	})
})

masBtnColorThree[1].style.transform="scale(1.2)"
masBtnColorThree.forEach(function(btn){
	btn.addEventListener("click", function(event){
		if(btn===masBtnColorThree[0]){
			productImg[2].attributes.src.value = "img/product/ringGrey.png";
			masBtnColorThree.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
		if(btn===masBtnColorThree[1]){
			productImg[2].attributes.src.value = "img/product/ring.png";
			masBtnColorThree.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
		if(btn===masBtnColorThree[2]){
			productImg[2].attributes.src.value = "img/product/ringGrey.png";
			masBtnColorThree.forEach(function(bt){
				bt.style.transform="";
			})
			btn.style.transform="scale(1.2)";
		}
	})
})

//btn basket

let actionP = 0;
btnActions.forEach(function(btn){
	btn.addEventListener("click", function(){
		if(btn === btnActions[0] || btn === btnActions[2] || btn === btnActions[4]){
			if(btn.style.background === "black"){
				actionP--;
				btn.style.background = "#303030"
			}else{
				actionP++;
				btn.style.background = "black"
			}
			if(actionP !== 0){
				basketP.textContent = actionP;
				basketP.style.display="block"
			}else{
				basketP.style.display="none"
			}
		}
	})
})

stars[4].classList.add('starColorNone');
stars.forEach(function(star){
	star.addEventListener("click",function(){
		star.classList.toggle('starColor');
		star.classList.toggle('starColorNone');
	})
})

function timerOne(){
  timerDivs.forEach(function(team){
  	if(team === timerDivs[2] || team === timerDivs[5] || team === timerDivs[8]) {
  		team.childNodes[1].textContent = +team.childNodes[1].textContent - 1
  		if(team.childNodes[1].textContent === '0'){
  			team.childNodes[1].textContent=59;
  		}
  	}
  })
}
function timerTwo(){
  timerDivs.forEach(function(team){
  	if(team === timerDivs[1] || team === timerDivs[4] || team === timerDivs[7]) {
  		team.childNodes[1].textContent = +team.childNodes[1].textContent - 1
  	}
  })
}
function timerThrid(){
  timerDivs.forEach(function(team){
  	if(team === timerDivs[0] || team === timerDivs[3] || team === timerDivs[6]) {
  		team.childNodes[1].textContent = +team.childNodes[1].textContent - 1
  	}
  })
}

setInterval(timerOne, 1000);
setInterval(timerTwo, 60000);
setInterval(timerThrid, 36000000);

//like Hit function()
likesHit = document.querySelectorAll("#likeHit");
likesHit.forEach(function(like) {
	like.addEventListener('click', function (event) {
	  	like.classList.toggle('btn-save-product');
	  	like.classList.toggle('btn-save-product-click');
	  	if(like.classList.value === 'btn-save-product'){
	  		p=p-1;
	  	}
	  	if(like.classList.value === 'btn-save-product-click') {
	  		p++;
	  	}
		if(p === 0){
			steckLikes.style.background="none"
		}else{
			steckLikes.style.background = "#E46942"
			steckLikes.textContent = p;
		}
	})
});

btnHitImg.forEach(function(btn){
	btn.addEventListener("click",function(){
		if(btn === btnHitImg[0]){
			productImg[0].style.transform="rotate(90deg)";
		}
		if(btn === btnHitImg[2]){
			productImg[1].style.transform="rotate(90deg)";
		}
		if(btn === btnHitImg[4]){
			productImg[2].style.transform="rotate(90deg)";
		}
		if(btn === btnHitImg[1]){
			productImg[0].style.transform="";
		}
		if(btn === btnHitImg[3]){
			productImg[1].style.transform="";
		}
		if(btn === btnHitImg[5]){
			productImg[2].style.transform="";
		}
	}) 
})