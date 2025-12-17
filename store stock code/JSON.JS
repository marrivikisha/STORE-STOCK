// Save data
localStorage.setItem('storeData', JSON.stringify(allRecords));

// Load data on page load
const saved = localStorage.getItem('storeData');
if (saved) {
  allRecords = JSON.parse(saved);
  // re-render your tables here
}