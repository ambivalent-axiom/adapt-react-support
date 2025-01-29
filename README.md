# Adapt React Support Extension

This extension adds React support to your Adapt course. It's designed to work with React-based components and will automatically load React when the course starts.

## Installation

With the Adapt CLI:
```bash
adapt install adapt-react-support
```

Or, download the ZIP and upload it via the Adapt Authoring Tool.

## Usage

Once installed, the extension will automatically load React into your course. No additional configuration is required.

Components that depend on React should list this extension as a dependency in their bower.json:

```json
{
  "dependencies": {
    "adapt-react-support": "*"
  }
}
```

## Technical Details

This extension bundles:
- React 18.2.0
- ReactDOM 18.2.0

These are loaded when the course starts and made available globally.