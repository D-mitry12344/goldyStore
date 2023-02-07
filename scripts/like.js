let likes = document.querySelectorAll("#like")
let steckLikes = document.querySelector("#steckLike")
let p =0;
likes.forEach(function(like) {
  like.addEventListener('click', function (event) {
  	if(like === likes[4]){
  		like.classList.toggle('btn-save-product');
  		like.classList.toggle('btn-save-product-click');
  		if(like.classList.value === 'btn-save-product'){
  			p=p-1;
  		}
  		if(like.classList.value === 'btn-save-product-click') {
  			p++;
  		}
  	}
  	if(like !== likes[4]){
	  	if(like.attributes[1].value === "img/likes.png"){
	  		like.attributes[1].value="img/cheap/likeProduct.png";
	  		p=p-1;
	  	}else{
			like.attributes[1].value="img/likes.png";
			p++;
		}
	}
	steckLikes.textContent = p;
  	})

});