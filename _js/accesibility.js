var skip = document.querySelector(".skip");

skip.addEventListener("click", function(){

	var href = this.href.split('#')[1];
	console.log(href);
	var content_container = document.getElementById(href);

	console.log(content_container);
	
	content_container.setAttribute("tabindex", -1);
	content_container.addEventListener("blur", function(){
		content_container.removeAttribute("tabindex");
	});
});