
// Custom development server starter
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('\n=== Modern Coast Properties Development Server ===');
console.log('Starting development server on port 8080...');

// Check if npm dependencies are installed
if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  console.error('\nError: Node modules not found. Please run "npm install" first.');
  process.exit(1);
}

// Check if vite is installed
const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');

if (!fs.existsSync(vitePath)) {
  console.error('\nError: Vite not found in node_modules. Make sure you have installed dependencies with npm install.');
  process.exit(1);
}

console.log('\n=== IMPORTANT NOTICE ===');
console.log('If you\'re experiencing "Missing script" errors when trying to publish or build:');
console.log('You must manually add the following scripts to your package.json file:');
console.log('  "dev": "vite",');
console.log('  "build": "vite build",');
console.log('  "build:dev": "vite build --mode development"');
console.log('The package.json file is read-only in the Lovable editor, so these changes must be made locally.');
console.log('======================\n');

console.log('Vite installation found. Starting development server...');

// Run Vite directly without using npm scripts
const vite = spawn(
  vitePath, 
  ['--port', '8080'],
  { 
    stdio: 'inherit',
    shell: true
  }
);

vite.on('error', (err) => {
  console.error('\nFailed to start development server:', err);
  process.exit(1);
});

vite.on('exit', (code) => {
  if (code !== 0) {
    console.error(`\nVite process exited with code ${code}`);
    process.exit(code);
  }
});

console.log('\n=== Development Server Information ===');
console.log('• Access your application at: http://localhost:8080/');
console.log('• Press Ctrl+C to stop the server');
console.log('=======================================\n');

process.on('SIGINT', () => {
  console.log('\nShutting down development server...');
  vite.kill('SIGINT');
  process.exit(0);
});
