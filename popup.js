document
  .getElementById("checkSustainability")
  .addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.scripting.executeScript(
      { target: { tabId: tab.id }, function: checkSustainability },
      (results) => {
        document.getElementById("result").textContent = results[0].result;
      }
    );
  });

function checkSustainability() {
  // logic to check product sustainability  
  return "This product is sustainable!";
}
