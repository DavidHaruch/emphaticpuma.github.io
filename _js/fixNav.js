var headerElem = document.getElementById('header');
var navElem = document.getElementById('nav');
var headerHeight = headerElem.clientHeight;
var navHeight = navElem.clientHeight;

var mq = window.matchMedia("(max-width: 800px)");

if (mq.matches) {

	console.log("using mobile javascript");

} else {

console.log("using desktop/tablet javascript");

window.addEventListener("scroll", function(){
	if (document.body.scrollTop >= headerHeight) {
		nav.style.position = "fixed";
		nav.style.top = "5vh";
	} else {
		nav.style.position = "absolute";
		nav.style.top = "25vh";
	}
});


}
