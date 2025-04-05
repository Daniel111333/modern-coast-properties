
# Modern Coast Properties

A coastal real estate website showcasing premium waterfront properties.

## Development

Since the package.json is read-only and cannot be directly modified, use one of the following methods to start the development server:

### Method 1: Using the custom start script (Recommended)
```
node start-dev.js
```

### Method 2: Running Vite directly
```
npx vite --port 8080
```

## IMPORTANT: Required for Building and Publishing

To successfully build and publish your project with Lovable, you must **manually add** the following scripts to your local package.json file:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development"
}
```

### Why this is necessary:
- The `build` script is required for production builds
- The `build:dev` script is required for Lovable development builds
- These scripts cannot be added automatically as package.json is read-only in the editor

## Building for Production
```
npx vite build
```

## Preview Production Build
```
npx vite preview
```
