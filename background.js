chrome.runtime.onInstalled.addListener(() => {
  console.log("Fashion Sustainability Checker Extension Installed.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkSustainability") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "checkSustainability" },
        sendResponse
      );
    });
    return true; 
  }
});
