var a = document.getElementsByTagName("a");
for(i = 0; i < a.length; i++){
	if(
		( a[i].href.indexOf(location.host) == -1 && a[i].href.match(/^https?\:\/\//i) )
		|| a[i].href.match(/\.(pdf|docx?|xlsx?)$/i)
	)
		a[i].target = "_blank";
}