// On page load, check the URL for the language query
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') || 'en'; // Default to English
  loadLanguage(lang);
};

function loadLanguage(lang) {
  if (lang === 'ja') {
    document.querySelector('h1').textContent = 'Ko/abo - コラボレーション、構築、ローンチ 🚀';
    document.querySelector('p').textContent = 'ウェブアプリケーションの開発を効率化';
    // Add translations for all relevant content
  } else {
    document.querySelector('h1').textContent = 'Ko/abo - Collaborate, Build, Launch 🚀';
    document.querySelector('p').textContent = 'Streamline your web application development';
    // Add English content
  }
}

// Attach event listeners to language buttons
document.getElementById('lang-en').addEventListener('click', () => {
  window.location.search = '?lang=en';
});

document.getElementById('lang-ja').addEventListener('click', () => {
  window.location.search = '?lang=ja';
});
