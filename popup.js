'use strict';
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.storage.sync.get(function (data) {
        chrome.browserAction.setIcon({ path: "icon1.png" });
    });
});
chrome.browserAction.onClicked.addListener(function (tab) {
    function kill() {
        var targets = document.querySelectorAll("jdiv");
        for (var i = 0; i < targets.length; i++) {
            targets[i].style.display = "none"; // "тест", "пройден"
        }

        return true
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + kill + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
    });
    chrome.storage.sync.get(function (data) {
        chrome.browserAction.setIcon({ path: "icon2.png" });
    });
});

