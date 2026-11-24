(() => {
  const button = document.querySelector('.lang-switch');
  const nodes = document.querySelectorAll('[data-en][data-es]');
  let language = localStorage.getItem('zuky-language') || (navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en');
  function render() {
    document.documentElement.lang = language;
    nodes.forEach(node => { node.innerHTML = node.dataset[language]; });
    if (button) button.textContent = language === 'en' ? 'ES' : 'EN';
    localStorage.setItem('zuky-language', language);
  }
  if (button) button.addEventListener('click', () => { language = language === 'en' ? 'es' : 'en'; render(); });
  render();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();