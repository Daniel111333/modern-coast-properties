
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

### Method 3: Add scripts to package.json manually
You need to manually add the following scripts to your local copy of package.json file:
```json
"scripts": {
  "dev": "vite",
  "build:dev": "vite build --mode development"
}
```

## IMPORTANT: Required for Lovable Build
The `build:dev` script is required for Lovable to build your project. Since you cannot modify package.json directly through the editor, you must add this script manually to your local copy of package.json.

## Building for Production
```
npx vite build
```

## Preview Production Build
```
npx vite preview
```
