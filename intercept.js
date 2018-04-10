chrome.webRequest.onBeforeRequest.addListener(
    function() {
		alert('Trying to load the player without paying');
        return {cancel: true};
    },
    {
        urls: ["http://pdk.theplatform.com/*"],
		types: ['script'],
    },
    ["blocking"]
);
