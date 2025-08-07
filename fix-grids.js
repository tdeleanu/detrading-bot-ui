const fs = require('fs');
const path = require('path');

const files = [
  'src/components/MarketOpportunity.tsx',
  'src/components/TechnologySection.tsx',
  'src/components/InvestorCTA.tsx',
  'src/components/TeamSection.tsx',
  'src/components/PerformanceChart.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace Grid item with size prop
  content = content.replace(/Grid item xs={(\d+)}/g, 'Grid size={$1}');
  content = content.replace(/Grid item xs={(\d+)} md={(\d+)}/g, 'Grid size={{ xs: $1, md: $2 }}');
  content = content.replace(/Grid item xs={(\d+)} sm={(\d+)} md={(\d+)}/g, 'Grid size={{ xs: $1, sm: $2, md: $3 }}');
  content = content.replace(/Grid item xs={(\d+)} md={(\d+)} lg={(\d+)}/g, 'Grid size={{ xs: $1, md: $2, lg: $3 }}');
  
  fs.writeFileSync(file, content);
  console.log(`Fixed ${file}`);
});
