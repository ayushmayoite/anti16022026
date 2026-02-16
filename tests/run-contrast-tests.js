/**
 * Run this script to test color contrast ratios
 * Usage: node tests/run-contrast-tests.js
 */

import { testAllColorPairs, meetsWCAG_AA } from './color-contrast.test.js';

// Run all tests
console.log('\n🚀 Starting Color Contrast Tests...\n');
testAllColorPairs();

// Additional specific tests
console.log('\n\n📋 Additional Test Details:\n');
console.log('='.repeat(80));

// Test hero specifically
console.log('\n🎯 HERO SECTION TESTS:');
const heroTests = [
  { fg: '#ffffff', bg: '#000000', label: 'Hero heading (white on black)' },
  { fg: '#e5e5e5', bg: '#000000', label: 'Hero subtext (light gray on black)' },
  { fg: 'rgba(255,255,255,0.8)', bg: '#000000', label: 'Hero stats labels (80% white on black)' },
];

heroTests.forEach(test => {
  // For rgba, we'll test with the opaque equivalent for contrast
  const fg = test.fg.includes('rgba') ? '#cccccc' : test.fg;
  const result = meetsWCAG_AA(fg, test.bg);
  console.log(`  ${result.passes ? '✅' : '❌'} ${test.label}: ${result.ratio}:1`);
});

// Test navbar
console.log('\n🧭 NAVBAR TESTS:');
const navbarTests = [
  { fg: '#ffffff', bg: '#000000', label: 'Nav links on dark hero' },
  { fg: '#1a1a1a', bg: '#ffffff', label: 'Nav links on white' },
  { fg: '#666666', bg: '#ffffff', label: 'Nav links hover' },
];

navbarTests.forEach(test => {
  const result = meetsWCAG_AA(test.fg, test.bg);
  console.log(`  ${result.passes ? '✅' : '❌'} ${test.label}: ${result.ratio}:1`);
});

// Test light sections
console.log('\n📄 LIGHT SECTIONS TESTS:');
const lightTests = [
  { fg: '#1a1a1a', bg: '#ffffff', label: 'Headings on white' },
  { fg: '#333333', bg: '#ffffff', label: 'Body text on white' },
  { fg: '#666666', bg: '#ffffff', label: 'Secondary on white' },
  { fg: '#999999', bg: '#ffffff', label: 'Muted on white' },
  { fg: '#1a1a1a', bg: '#f5f5f3', label: 'Headings on light gray' },
  { fg: '#333333', bg: '#f5f5f3', label: 'Body text on light gray' },
];

lightTests.forEach(test => {
  const result = meetsWCAG_AA(test.fg, test.bg);
  console.log(`  ${result.passes ? '✅' : '❌'} ${test.label}: ${result.ratio}:1`);
});

console.log('\n' + '='.repeat(80));
console.log('\n✨ Testing complete! Review results above.\n');
