(function () {
  const html = document.documentElement;

  // Function to apply dark or light mode based on system preference
  function applySystemPreference() {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

      if (prefersDark) {
          html.classList.add("dark");
          console.log("Dark mode enabled based on system preference");
      } else if (prefersLight) {
          html.classList.remove("dark");
          console.log("Light mode enabled based on system preference");
      } else {
          applyLocationBasedPreference();
      }
  }

  // Function to apply dark mode based on user's location (night time detection)
  function applyLocationBasedPreference() {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
              function (position) {
                  const { latitude, longitude } = position.coords;
                  const now = new Date();
                  const hours = now.getUTCHours() + longitude / 15; // Approximate timezone by longitude

                  const isNight = hours >= 18 || hours < 6; // Night time between 6 PM and 6 AM
                  if (isNight) {
                      html.classList.add("dark");
                      console.log("Dark mode enabled based on location (night)");
                  } else {
                      html.classList.remove("dark");
                      console.log("Light mode enabled based on location (day)");
                  }
              },
              function (error) {
                  console.warn("Geolocation error, falling back to system preference:", error);
                  applySystemPreference();
              }
          );
      } else {
          console.warn("Geolocation not supported, using system preference");
          applySystemPreference();
      }
  }

  // Apply system preference on page load
  applySystemPreference();

  // Listen for system preference changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemPreference);
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", applySystemPreference);
})();