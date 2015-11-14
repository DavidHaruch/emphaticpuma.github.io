var footerElem = document.getElementById('footer');
var headerElem = document.getElementById('header');
var contentElem = document.getElementById('content');

var bodyHeight = Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);

// footerElem.style.marginTop = (bodyHeight) - footerElem.offsetHeight * 3 - (headerElem.offsetHeight + contentElem.offsetHeight) + "px";

// $(document).height() - ($('#header').height() + $('#content').height()  ) - $('#footer').height();