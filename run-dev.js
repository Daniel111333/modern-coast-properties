
#!/usr/bin/env node

// Simple script to run the development server directly using Vite
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('\n=== Modern Coast Properties ===');
console.log('Starting development server directly...\n');

// Path to local Vite installation
const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');

// Check if Vite is installed
if (!fs.existsSync(vitePath)) {
  console.error('\nError: Vite not found. Please install dependencies with npm install first.');
  console.error('Then try running this script again.\n');
  process.exit(1);
}

// Run Vite directly without using npm scripts
const viteProcess = spawn(
  vitePath,
  ['--port', '8080'],
  { stdio: 'inherit', shell: true }
);

viteProcess.on('error', (error) => {
  console.error('\nFailed to start Vite:', error.message);
  process.exit(1);
});

console.log('\n=== Development Server Information ===');
console.log('• Access your application at: http://localhost:8080/');
console.log('• Press Ctrl+C to stop the server');
console.log('=======================================\n');

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down development server...');
  viteProcess.kill('SIGINT');
  process.exit(0);
});
