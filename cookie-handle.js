/**
* Get the value of a cookie
* Source: https://stackoverflow.com/a/15724300/30529
* @param  {String} name  The name of the cookie
* @return {String}       The cookie value
*/
function getCookie (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}


// ==============
// Cookie: Handle
// ==============
function setCookie(cname, cvalue, exdays) {
	
	var date = new Date();
	
	date.setTime(date.getTime() + (exdays*24*60*60*1000));
	
	var expires = "expires="+ date.toUTCString();
	
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	
	var name = cname + "=";
	var ca = document.cookie.split(';');
	
	for(var i = 0; i < ca.length; i++) {
		
		var c = ca[i];
		
		while (c.charAt(0) == ' ') {
			
			c = c.substring(1);
		}
		
		if (c.indexOf(name) == 0) {
			
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
