chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTab = tabs[0];
  var currentTabUrl = currentTab.url;
  console.log("The URL of the current tab is: " + currentTabUrl);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url) {
chrome.tabs.sendMessage(tabId, changeInfo.url, function (res) {
      console.log(changeInfo.url);
    });
  }
});
