function UnCryptMailto(s, shift) {
	var n=0;
	var r="";
	for(var i=0;i<s.length;i++) {
		n=s.charCodeAt(i);
		if (n>=8364) {n = 128;}
		r += String.fromCharCode(n-(shift));
	}
	return r;
}
function linkTo_UnCryptMailto(s, shift)	{
	location.href=UnCryptMailto(s, shift);
}
function CryptMailto() {
	shift = 2;
	var n=0;
	var r="";
	var s="mailto:"+document.forms[0].emailField.value;
	for(var i=0;i<s.length;i++) { 
		n=s.charCodeAt(i); 
		if (n>=8364) {n = 128;}
		r += String.fromCharCode(n+shift); 
	}
	document.forms[0].cyptedEmailField.value = r;
	document.forms[0].HTMLCyptedEmailField.value = "<a href=\"javascript:linkTo_UnCryptMailto('"+r+"', "+shift+");\">eMail-Link</a>";
}
