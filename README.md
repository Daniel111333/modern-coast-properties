
# Modern Coast Properties

A coastal real estate website showcasing premium waterfront properties.

## IMPORTANT: Package.json Scripts Required

Since the package.json is read-only in the Lovable editor, you must **manually add** the following scripts to your local package.json file:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

### Why this is necessary:
- The `dev` script is required for running the development server
- The `build` script is required for production builds
- The `build:dev` script is **essential** for Lovable development builds
- These scripts cannot be added automatically as package.json is read-only in the editor

## Running the Development Server

You have three options to start the development server:

### Option 1: Using the custom start script
```
node start-dev.js
```

### Option 2: Using the simplified run script (recommended)
```
node run-dev.js
```

### Option 3: Running Vite directly
```
npx vite --port 8080
```

## Building for Production
```
npx vite build
```

## Preview Production Build
```
npx vite preview
```
