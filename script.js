function updateTime() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = Date.now();
}

// Set time on load
updateTime();

// Optional: auto-update every second
setInterval(updateTime, 1000);
