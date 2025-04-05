
// Custom development server starter
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting development server on port 8080...');

// Check if vite is installed
const vitePath = path.join(process.cwd(), 'node_modules', '.bin', 'vite');

if (!fs.existsSync(vitePath)) {
  console.error('Vite not found in node_modules. Make sure you have installed dependencies with npm install.');
  process.exit(1);
}

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
  console.error('Failed to start development server:', err);
  process.exit(1);
});

vite.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Vite process exited with code ${code}`);
    process.exit(code);
  }
});

console.log('\nDevelopment server starting...');
console.log('You can view your application at: http://localhost:8080/');

process.on('SIGINT', () => {
  console.log('\nShutting down development server...');
  vite.kill('SIGINT');
  process.exit(0);
});
