let selectCity = document.querySelector(".selectOptions");
let listCity = document.querySelectorAll("#option");
let city = document.querySelector(".selectCity");
let labelCity = document.querySelector("#labelCity");


city.addEventListener("click", function(){
	if(selectCity.style.display===""){
		selectCity.style.display="block"
	}else{
		selectCity.style.display=""
	}
	listCity.forEach(function(lis){
			lis.addEventListener("click",function(){
			labelCity.textContent = lis.textContent;
		})
	})
})
