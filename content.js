function extractProductInfo() {
  const productName =
    document.querySelector(".product-name")?.innerText || "Unknown Product";
  const productBrand =
    document.querySelector(".brand-name")?.innerText || "Unknown Brand";
  const productDescription =
    document.querySelector(".description")?.innerText || "";

  return { productName, productBrand, productDescription };
}

function analyzeSustainability(productInfo) {
  const sustainableKeywords = [
    "organic",
    "recycled",
    "sustainable",
    "eco-friendly",
  ];
  let score = 0;

  sustainableKeywords.forEach((keyword) => {
    if (productInfo.productDescription.toLowerCase().includes(keyword)) {
      score += 25;
    }
  });

  if (productInfo.productBrand.toLowerCase() === "known sustainable brand") {
    score += 25;
  }

  return score >= 50 ? "Sustainable" : "Not Sustainable";
}

// sends sustainability data back to popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkSustainability") {
    const productInfo = extractProductInfo();
    const sustainabilityStatus = analyzeSustainability(productInfo);
    sendResponse(sustainabilityStatus);
  }
});
