chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: sortTableRows
    });
  });
  
  function sortTableRows() {
    // Select the table body
    const tableBody = document.querySelector("table._table_ui0zx_1 tbody");
    if (!tableBody) return;
  
    // Get the rows as an array
    const rows = Array.from(tableBody.querySelectorAll("tr._row_ui0zx_1"));
  
    // Sort the rows alphabetically based on the button text
    rows.sort((a, b) => {
      const textA = a.querySelector("button").textContent.trim().toLowerCase();
      const textB = b.querySelector("button").textContent.trim().toLowerCase();
      return textA.localeCompare(textB);
    });
  
    // Remove all rows and append them in sorted order
    tableBody.innerHTML = "";
    rows.forEach(row => tableBody.appendChild(row));
  }
  