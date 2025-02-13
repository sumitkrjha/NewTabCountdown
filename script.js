function updateTimer() {
  const targetDate = new Date("December 31, 2025 23:59:59").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "Happy New Year!";
    clearInterval(timerInterval); // Stop the timer when the target date is reached
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = distance % 1000;

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("milliseconds").innerText = milliseconds;
}

const timerInterval = setInterval(updateTimer, 10); // Update every 10 milliseconds
