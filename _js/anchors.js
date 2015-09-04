var anchors = function (parent,elems) {
	if (!elems)
		elems = "h1,h2,h3,h4,h5,h6";
	if (!document.querySelector(parent)) {
		console.log("parent elem doesn't work");
		return false;
	}

	var pe = document.querySelectorAll(parent + ">" + elems);
	var iconsvgstr = '<svg class="anchoricon" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>';

	var AEL = function (elem,child) {
		elem.addEventListener("mouseenter",function(){
			child.style.opacity = "1";
		});
	};
	var REL = function (elem,child) {
		elem.addEventListener("mouseleave",function(){
			child.style.opacity = "0";
		});
	};

	for (i=0;i<pe.length;i++) {
		pe[i].id = pe[i].textContent.replace(/ /g,"_");

		var newelem = document.createElement("a");

		newelem.innerHTML = iconsvgstr;
		newelem.href = "#"+pe[i].textContent.replace(/ /g,"_");
		newelem.style.height = pe[i].scrollHeight + "px";
		newelem.style.width = pe[i].scrollHeight + "px";
		newelem.title = "Link to this header in the page";
		newelem.className = "anchor-icon-container";

		pe[i].appendChild(newelem);

		var parentelem = pe[i];

		AEL(parentelem,newelem);
		REL(parentelem,newelem);
	}
};

setTimeout(function(){
	anchors(".post-content");
}, 1000);