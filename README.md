# Sort Table Rows Extension

This Chrome extension sorts rows in a table alphabetically on the `integration.app` page or similar web pages. It uses JavaScript to dynamically reorder rows based on the text content of the buttons in each row.

## Features
- Sorts table rows alphabetically when the extension is triggered.
- Designed to work on tables using the specified class names from the `integration.app` page.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files (including `manifest.json`).

## Usage

1. Open a page with a table that has the structure like the one from `integration.app`.
2. Click the extension icon in the Chrome toolbar.
3. The table rows will be sorted alphabetically based on the button text in each row.

## File Structure

```
.
├── manifest.json         # Extension configuration file
├── background.js         # Script to reorder table rows alphabetically
├── README.md             # Documentation file
```

## How It Works

- The extension listens for a click event on its toolbar icon.
- When clicked, it injects the `sortTableRows` function into the current tab.
- The `sortTableRows` function:
  1. Selects the table body using the class `_table_ui0zx_1`.
  2. Extracts all rows (`tr` elements) into an array.
  3. Sorts the rows alphabetically based on the button text content.
  4. Replaces the table content with the sorted rows.

## Customization

If the table structure or class names differ, you can modify the selector in `background.js`:

```javascript
const tableBody = document.querySelector("table.YOUR_TABLE_CLASS tbody");
```

Replace `YOUR_TABLE_CLASS` with the appropriate class for the table on your target page.

## Known Issues
- The extension currently assumes the table rows contain buttons with text. If the table structure changes, the extension may need updates.
- Works only on web pages where the table conforms to the specified structure.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

If you encounter any issues or have suggestions for improvement, feel free to open an issue or contribute to the repository.

