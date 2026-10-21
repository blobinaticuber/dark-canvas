# dark-canvas

A chrome/firefox extension that adds options for dark mode for Canvas LMS.

## Basic extension setup

This repository now includes a minimal WebExtension scaffold based on the MDN "Your first WebExtension" guide.

- `manifest.json`: extension metadata and content script registration
- `content-script.js`: a basic script injected into Canvas LMS pages

## Load temporarily for testing

### Firefox

1. Open `about:debugging`.
2. Select **This Firefox**.
3. Click **Load Temporary Add-on...**.
4. Choose `/home/runner/work/dark-canvas/dark-canvas/manifest.json`.

### Chrome

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select `/home/runner/work/dark-canvas/dark-canvas`.
