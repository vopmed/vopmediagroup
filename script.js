document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function updateDateTime() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const dayName = days[now.getDay()];
  const dateTimeString = `${dayName}, ${now.toLocaleString()}`;
  document.getElementById('datetime').textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
