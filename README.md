# CSES Problem Tracker Chrome Extension

A Chrome extension that tracks and displays the number of solved problems on the CSES (Code Submission Evaluation System) website.

## Features

- **Real-time Problem Counter**: Automatically counts and displays solved problems on CSES problemset pages
- **Beautiful UI**: Modern, responsive design that integrates seamlessly with the CSES website
- **Progress Tracking**: Visual progress bar and statistics in the popup
- **Auto-refresh**: Automatically updates the count when you solve new problems
- **Dark Mode Support**: Compatible with CSES dark mode

## Installation

### Method 1: Load as Unpacked Extension (Development)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" button
4. Select the `CSES_track` folder containing the extension files
5. The extension should now appear in your extensions list

### Method 2: Create Icons (Optional)

Since Chrome extensions need PNG icons, you can convert the provided SVG to PNG format:

1. Open the `icons/icon.svg` file in any graphics editor (like GIMP, Photoshop, or online converters)
2. Export/save as PNG in three sizes:
   - `icon16.png` (16x16 pixels)
   - `icon48.png` (48x48 pixels) 
   - `icon128.png` (128x128 pixels)
3. Save these files in the `icons/` folder

Or use online converters:
- Upload `icon.svg` to https://convertio.co/svg-png/
- Generate the three required sizes

## Usage

1. **Install the extension** following the steps above
2. **Navigate to CSES**: Go to https://cses.fi/problemset/list/
3. **See your progress**: The extension will automatically display your solved problem count in the problem set page
4. **Use the popup**: Click the extension icon in the toolbar to see detailed statistics

## Installation

### Method 1: Load as Unpacked Extension (Development)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" button
4. Select the `CSES_track` folder containing the extension files
5. The extension should now appear in your extensions list



## Features in Detail

### On-Page Display
- Shows a green counter box displaying "Problems Solved: X" 
- Automatically updates when you solve new problems
- Responsive design that works on mobile and desktop
- Hover effects and smooth animations

### Popup Interface
- Current solved problems count
- Total problems available (estimated 1700+)
- Progress percentage and visual progress bar
- Last updated timestamp
- Quick refresh button
- Direct link to visit CSES

### Automatic Detection
The extension intelligently detects solved problems by looking for:
- Checkmark icons (✓)
- Green colored elements
- "AC" (Accepted) or "100" text indicators
- Elements with "solved" class names

## Files Structure

```
CSES_track/
├── manifest.json          # Extension configuration
├── content.js             # Main logic for detecting solved problems
├── styles.css             # Styling for the on-page counter
├── popup.html             # Extension popup interface
├── popup.css              # Popup styling
├── popup.js               # Popup functionality
├── icons/
│   ├── icon.svg           # Source SVG icon
│   ├── icon16.png         # 16x16 icon (to be created)
│   ├── icon48.png         # 48x48 icon (to be created)
│   └── icon128.png        # 128x128 icon (to be created)
└── README.md              # This file
```

## Troubleshooting

### Extension not working?
1. Make sure you're on a CSES problemset page (https://cses.fi/problemset/*)
2. Try refreshing the page
3. Click the extension icon and use the "Refresh" button

### Counter showing 0?
- The extension detects solved problems based on visual indicators
- Make sure you're logged into CSES and can see your solved problems
- Try clicking the counter to refresh it

### Can't see the counter?
- Make sure the extension is enabled in `chrome://extensions/`
- Check that you're on the correct CSES page
- Try disabling and re-enabling the extension

## Development

To modify or enhance the extension:

1. Edit the relevant files (`content.js` for main logic, `popup.js` for popup functionality)
2. Save your changes
3. Go to `chrome://extensions/`
4. Click the refresh icon on the CSES Tracker extension
5. Refresh any open CSES tabs to see changes

## Privacy

This extension:
- Only works on CSES website (cses.fi)
- Does not collect or transmit any personal data
- Stores solved problem count locally in your browser
- Does not require any special permissions beyond accessing CSES pages

## Support

If you encounter any issues or have suggestions for improvements, please check the troubleshooting section above or modify the code as needed.

## Version History

- **v1.0**: Initial release with problem counting and popup interface
