const { birthProbabilityTable } = require('./birth-probability-table.js');

// Calculate remaining days weight
function calculateRemainingDaysWeight(currentDay) {
  let sumFromTodayToEnd = 0;
  for (let day = currentDay; day < birthProbabilityTable.length; day++) {
    sumFromTodayToEnd += birthProbabilityTable[day] || 0;
  }
  return 1 / sumFromTodayToEnd;
}

// Calculate probability of birth in next N days
function probabilityInNextNDays(currentDay, n) {
  const remainingDaysWeight = calculateRemainingDaysWeight(currentDay);
  let sum = 0;
  
  for (let i = 0; i < n && (currentDay + i) < birthProbabilityTable.length; i++) {
    sum += (birthProbabilityTable[currentDay + i] || 0);
  }
  
  return sum * remainingDaysWeight;
}

// Verification tests
console.log("=== Birth Probability Calculator Verification ===\n");

// Test 1: Sum of all probabilities should be close to 1
let totalSum = 0;
for (let day = 0; day < birthProbabilityTable.length; day++) {
  totalSum += birthProbabilityTable[day] || 0;
}
console.log(`1. Sum of all probabilities (days 0-294): ${(totalSum * 100).toFixed(2)}%`);
console.log(`   (Should be close to 100%)\n`);

// Test 2: Probability on the last day before end of week 42
const lastDayProb = probabilityInNextNDays(294, 1);
console.log(`2. Probability on day 294 (last day): ${(lastDayProb * 100).toFixed(2)}%`);
console.log(`   (Should be 100%)\n`);

// Test 3: Probability during week 20 (days 134-140)
const week20Prob = birthProbabilityTable[140] || 0;
console.log(`3. Probability during week 20 (day 140): ${(week20Prob * 100).toFixed(4)}%`);
console.log(`   (Should be close to 0%)\n`);

// Test 4: Probability on due date
const dueDateProb = birthProbabilityTable[280] || 0;
console.log(`4. Probability on due date (day 280): ${(dueDateProb * 100).toFixed(2)}%`);
console.log(`   (Should be around 3.0%)\n`);

// Test 5: Peak probability day
let maxProb = 0;
let maxDay = 0;
for (let day = 0; day <= 294; day++) {
  if (birthProbabilityTable[day] > maxProb) {
    maxProb = birthProbabilityTable[day];
    maxDay = day;
  }
}
console.log(`5. Peak probability: ${(maxProb * 100).toFixed(2)}% on day ${maxDay}`);
console.log(`   (Should be 4.5% on day 273)\n`);

// Test 6: Probability of birth in next 7 days from day 270
const prob7Days = probabilityInNextNDays(270, 7);
console.log(`6. Probability of birth in next 7 days from day 270: ${(prob7Days * 100).toFixed(2)}%\n`);

// Test 7: Remaining days weight calculation
console.log("7. Remaining days weight examples:");
console.log(`   - From day 200: ${calculateRemainingDaysWeight(200).toFixed(4)}`);
console.log(`   - From day 250: ${calculateRemainingDaysWeight(250).toFixed(4)}`);
console.log(`   - From day 280 (due date): ${calculateRemainingDaysWeight(280).toFixed(4)}`);
console.log(`   - From day 290: ${calculateRemainingDaysWeight(290).toFixed(4)}\n`);

// Test 8: Cumulative probability from conception to end
console.log("8. Cumulative probabilities at key milestones:");
let cumulative = 0;
const milestones = [154, 168, 200, 240, 260, 273, 280, 290, 294];
for (const day of milestones) {
  for (let d = 0; d <= day; d++) {
    cumulative += birthProbabilityTable[d] || 0;
  }
  const weeks = Math.floor(day / 7);
  const days = day % 7;
  console.log(`   - By day ${day} (${weeks}w${days}d): ${(cumulative * 100).toFixed(2)}%`);
  cumulative = 0;
}
