function _l2b(event){
	var el = event.srcElement || event.target;
	if(el.tagName.toLowerCase() == 'a' && el.href
		&& (el.href.indexOf(location.host) == -1 && el.href.match(/^https?\:\/\//i)
		|| el.href.match(/\.(pdf|docx?|pp(s|tx?)|xlsx?|zip|gz|bz2|(r|t)ar|7z)$/i))
	)
		el.target = "_blank";
}
var d=document;
if(d.addEventListener)d.addEventListener("click",_l2b);
else if(d.attachEvent)d.attachEvent("onclick",_l2b);
