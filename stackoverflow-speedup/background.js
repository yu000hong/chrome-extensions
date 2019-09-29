var sourceUrl = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
var targetUrl = 'https://code.jquery.com/jquery-3.2.1.min.js';
// console.log("hello ...");
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    	if(details.url.endsWith('jquery.min.js') && details.url.includes('google')){
    		return {redirectUrl:targetUrl};
    	}else{
    		return {cancel:false};
    	}
    	// console.log(details.url);
    },
    {urls: ["<all_urls>"]},
    ["blocking"]);
