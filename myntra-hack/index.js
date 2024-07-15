// Function to maintain streak
function maintainStreak() {
  let currentDate = new Date();
  let lastStreakDate = localStorage.getItem("lastStreakDate");

  // Check if last streak date is stored and within 30 days
  if (
    lastStreakDate &&
    currentDate - new Date(lastStreakDate) < 30 * 24 * 60 * 60 * 1000
  ) {
    // Increment streak
    let currentStreak = parseInt(localStorage.getItem("currentStreak")) || 0;
    currentStreak++;
    localStorage.setItem("currentStreak", currentStreak);
  } else {
    // Reset streak if no streak or streak expired
    localStorage.setItem("currentStreak", 0);
  }

  // Update last streak date
  localStorage.setItem("lastStreakDate", currentDate.toISOString());
}
