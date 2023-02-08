const eyes = document.querySelectorAll("#eye");
const optionDivs = document.querySelectorAll(".optionDiv");
let divfirst = document.createElement("div");

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
let infoProduct = document.querySelector("#onfoProduct")
let check=0;
optionDivs.forEach(function(option) {
	eyes.forEach(function(eye) {
		eye.addEventListener('click', function (event) {
			if(option.classList.value === eye.parentElement.classList.value){
				if(divfirst.style.display==="block"){
					createBlock(option);
					divfirst.style.display="none";	
				}else{
					if(divfirst.style.background === "" || divfirst.style.display==="none"){
						createBlock(option);
						divfirst.style.display="block";	
					}
				}
			} 
			
		})
	})
})