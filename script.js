// On page load, check the URL for the language query parameter
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') || 'en'; // Default to English if no parameter is found
  setupLanguageButton(lang); // Set up the language toggle button
};

function setupLanguageButton(currentLang) {
  const button = document.getElementById('lang-toggle'); // Get the toggle button

  if (currentLang === 'ja') {
    // If the current language is Japanese, show "English" button
    button.textContent = 'English';
    button.onclick = () => switchLanguage('en'); // Set click behavior to switch to English
  } else {
    // If the current language is English, show "日本語" button
    button.textContent = '日本語';
    button.onclick = () => switchLanguage('ja'); // Set click behavior to switch to Japanese
  }
}

function switchLanguage(lang) {
  const url = new URL(window.location.href); // Get the current URL
  url.searchParams.set('lang', lang); // Set the 'lang' query parameter
  window.location.href = url.toString(); // Reload the page with the new parameter
}
