
#!/usr/bin/env node

// Simple script to run the development server directly using Vite
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('\n=== Modern Coast Properties ===');
console.log('Starting development server...\n');

// Determine the correct project directory
let projectDir = process.cwd();
if (fs.existsSync(path.join(projectDir, 'modern-coast-properties'))) {
  // If we're at the root and the project is in a subdirectory
  projectDir = path.join(projectDir, 'modern-coast-properties');
  console.log(`Detected project directory: ${projectDir}`);
}

// Path to local Vite installation
const vitePath = path.join(projectDir, 'node_modules', '.bin', 'vite');
const alternativeVitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');

// Check if Vite is installed
let viteExecutable = vitePath;
if (!fs.existsSync(vitePath)) {
  if (fs.existsSync(alternativeVitePath)) {
    viteExecutable = alternativeVitePath;
  } else {
    console.error('\nError: Vite not found. Please install dependencies with npm install first.');
    console.error('Then try running this script again.\n');
    process.exit(1);
  }
}

// Run Vite directly without using npm scripts
console.log(`Launching Vite from: ${viteExecutable}`);
const viteProcess = spawn(
  viteExecutable,
  ['--port', '8080'],
  { 
    stdio: 'inherit', 
    shell: true,
    cwd: projectDir 
  }
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
