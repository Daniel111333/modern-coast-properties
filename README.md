
# Modern Coast Properties

A coastal real estate website showcasing premium waterfront properties.

## Development

Since the package.json is read-only and cannot be directly modified, use one of the following methods to start the development server:

### Method 1: Using the custom start script
```
node start-dev.js
```

### Method 2: Running Vite directly
```
npx vite --port 8080
```

### Method 3: Add scripts to package.json manually
You need to manually add the following scripts to your package.json file:
```json
"scripts": {
  "dev": "vite",
  "build:dev": "vite build --mode development"
}
```

## Building for Production
```
npx vite build
```

## Preview Production Build
```
npx vite preview
```
