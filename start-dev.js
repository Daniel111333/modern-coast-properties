
// Custom development server starter
const { spawn } = require('child_process');
const path = require('path');

console.log('Starting development server on port 8080...');

// Run Vite directly without using npm scripts
const vite = spawn(
  path.join(process.cwd(), 'node_modules', '.bin', 'vite'), 
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

process.on('SIGINT', () => {
  vite.kill('SIGINT');
  process.exit(0);
});
