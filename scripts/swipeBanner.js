let btnReturn = document.querySelector(".btn-return");
let btnNext = document.querySelector(".btn-next");
let bannerRadios = document.querySelectorAll(".positionProduct");
let bannerNew = document.createElement("div");
let bannerProduct = document.querySelector(".bannerProduct");
let banner = document.querySelector(".banner")

let i =0;
let masbanner = [
	{
		checked:true
	},
	{
		checked:false
	},
	{
		checked:false
	},
	0
]


btnNext.addEventListener("click",function(event){
	let x=masbanner[3];
	x++
	if(x===3){x=0;}
	masbanner[3]=x;
	if(masbanner[x].checked === false && x===0){
		masbanner[2].checked = false;
		masbanner[1].checked = false;
		masbanner[0].checked = true;
		bannerRadios[1].style.background="none";
		bannerRadios[0].style.background="#303030";
		bannerRadios[2].style.background="none";
		bannerNew.innerHTML=`
						<p>Суперскидка до 60%</p>
						<h1>НА БРИЛЛИАНТЫ</h1>
						<img src="img/banner/ringBan.png">
						<a href="#">
							<button>Подробнее</button>
						</a>
						`;
		bannerNew.classList.add('bannerProductNext');
		bannerNew.classList.remove('bannerProductReturn');
		bannerNew.classList.add('bannerProduct');
		bannerProduct.style.display="none"
		banner.prepend(bannerNew);	
	}
	if(masbanner[x].checked === false && x===1){
		masbanner[2].checked = false;
		masbanner[0].checked = false;
		masbanner[1].checked = true;
		bannerRadios[0].style.background="none";
		bannerRadios[1].style.background="#303030";
		bannerRadios[2].style.background="none";
		bannerNew.innerHTML=`
						<p>Суперскидка до 30%</p>
						<h1>НА СЕРЬГИ</h1>
						<img src="img/banner/earrings.png">
						<a href="#">
							<button>Подробнее</button>
						</a>
						`;
		bannerNew.classList.add('bannerProductNext');
		bannerNew.classList.remove('bannerProductReturn');
		bannerNew.classList.add('bannerProduct');
		bannerProduct.style.display="none"
		banner.prepend(bannerNew);	
	}
	if(masbanner[x].checked === false && x===2){
		masbanner[0].checked = false;
		masbanner[1].checked = false;
		masbanner[2].checked = true;
		bannerRadios[0].style.background="none";
		bannerRadios[2].style.background="#303030";
		bannerRadios[1].style.background="none";
		bannerNew.innerHTML=`
						<p>Суперскидка до 80%</p>
						<h1>НА ОЖЕРЕЛЬЕ</h1>
						<img style="margin-top:-321px;" src="img/banner/pendats.png">
						<a href="#">
							<button>Подробнее</button>
						</a>
						`;
		bannerNew.classList.remove('bannerProductReturn');
		bannerProduct.classList.add('bannerProductRetn');
		bannerNew.classList.add('bannerProductNext');
		bannerNew.classList.add('bannerProduct');
		//bannerProduct.style.display="none"
		banner.prepend(bannerNew);	
	}
})



btnReturn.addEventListener("click",function(event){
	let x = masbanner[3];
	x--;
	if(x===-1){x=2;};
	masbanner[3] = x;
	if(masbanner[x].checked === false && x===0){
		masbanner[2].checked = false;
		masbanner[1].checked = false;
		masbanner[0].checked = true;
		bannerRadios[1].style.background="none";
		bannerRadios[0].style.background="#303030";
		bannerRadios[2].style.background="none";
		bannerNew.innerHTML=`
						<p>Суперскидка до 60%</p>
						<h1>НА БРИЛЛИАНТЫ</h1>
						<img src="img/banner/ringBan.png">
						<a href="#">
							<button>Подробнее</button>
						</a>
						`;
		bannerNew.classList.add('bannerProductReturn');
		bannerNew.classList.remove('bannerProductNext');
		bannerNew.classList.add('bannerProduct');
		bannerProduct.style.display="none"
		banner.prepend(bannerNew);	
	}
	if(masbanner[x].checked === false && x===1){
		masbanner[2].checked = false;
		masbanner[0].checked = false;
		masbanner[1].checked = true;
		bannerRadios[0].style.background="none";
		bannerRadios[1].style.background="#303030";
		bannerRadios[2].style.background="none";
		bannerNew.innerHTML=`
						<p>Суперскидка до 30%</p>
						<h1>НА СЕРЬГИ</h1>
						<img src="img/banner/earrings.png">
						<a href="#">
							<button>Подробнее</button>
						</a>
						`;
		bannerNew.classList.add('bannerProductReturn');
		bannerNew.classList.remove('bannerProductNext');
		bannerNew.classList.add('bannerProduct');
		bannerProduct.style.display="none"
		banner.prepend(bannerNew);	
	}
	if(masbanner[x].checked === false && x===2){
		masbanner[0].checked = false;
		masbanner[1].checked = false;
		masbanner[2].checked = true;
		bannerRadios[0].style.background="none";
		bannerRadios[2].style.background="#303030";
		bannerRadios[1].style.background="none";
		bannerNew.innerHTML=`
						<p>Суперскидка до 80%</p>
						<h1>НА ОЖЕРЕЛЬЕ</h1>
						<img style="margin-top:-321px;" src="img/banner/pendats.png">
						<a href="#">
							<button>Подробнее</button>
						</a>
						`;
		bannerNew.classList.add('bannerProductReturn');
		bannerNew.classList.remove('bannerProductNext');
		bannerNew.classList.add('bannerProduct');
		bannerProduct.style.display="none"
		banner.prepend(bannerNew);	
	}
})
