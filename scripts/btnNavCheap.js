let btnNavCheap = document.querySelectorAll(".btn-nav-cheap button");
let masValueBtn=0;
btnNavCheap.forEach(function(btn){		
	btn.addEventListener("click",function(event) {
	let i = masValueBtn;	
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
			btnCtr(i);
				masValueDiv.forEach(function(div){
					div.style.display="flex"
					div.classList.add('options');
					optionsProducts.prepend(div);
					if(div !== masValueDiv[i]){
						div.style.display="none";
					}
				})
			}
		masValueBtn = i;
	})
})

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