var anchors = function (parent,elems) {
	if (!elems)
		elems = "h1,h2,h3,h4,h5,h6";
	if (!document.querySelector(parent)) {
		console.log("parent elem doesn't work");
		return false;
	}

	var pe = document.querySelectorAll(parent + ">" + elems);
	var iconsvgstr = "<i class='material-icons'>link</i>";

	for (i=0;i<pe.length;i++) {
		pe[i].id = pe[i].textContent.replace(/ /g,"_");

		var newelem = document.createElement("a");

		newelem.innerHTML = iconsvgstr;
		newelem.href = "#"+pe[i].textContent.replace(/ /g,"_");
		newelem.style.height = "1em";
		newelem.style.width = "1em";
		newelem.title = "Link to this header in the page";
		newelem.className = "anchor-container";

		pe[i].appendChild(newelem);
	}
};

setTimeout(function(){
	anchors(".post");
}, 0);