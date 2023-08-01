# @jstb/package-json-reader

Utility to read packageJSON in project root level.

---

## Installation

```bash
npm install --save-dev @jstb/package-json-reader
```

## Usage

In your code

```javascript
import packageJSONConfig from "@jstb/package-json-reader";

const scripts = packageJSONConfig("scripts");

console.log(scripts);
// prints
// {
//   "dev": "next dev",
//   "build": "next build",
//   "start": "next start",
//   "lint": "next lint",
//   "generate":"catalyst"
// }
```
