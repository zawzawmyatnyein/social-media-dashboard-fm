const themeToggler = document.querySelector('#toggler');
const themeTogglerKnob = document.querySelector('#togglerKnob');

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.theme === 'light') {
    themeToggler.classList.remove('bg-gradient-to-t', 'from-toggle-l', 'to-toggle-r');
    themeTogglerKnob.classList.remove('translate-x-0');
    themeToggler.setAttribute('aria-checked', false);
  } else if (localStorage.theme === 'dark') {
    themeToggler.classList.add('bg-gradient-to-t', 'from-toggle-l', 'to-toggle-r');
    themeTogglerKnob.classList.add('translate-x-0');
    themeToggler.setAttribute('aria-checked', true);
  }
});

themeToggler.addEventListener('click', function () {
  if (localStorage.theme === 'light') {
    switchToDarkMode();
  } else if (localStorage.theme === 'dark') {
    switchToLightMode();
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    switchToDarkMode();
  } else {
    switchToLightMode();
  }
});

function switchToLightMode() {
  document.documentElement.classList.remove('dark');
  themeToggler.classList.remove('bg-gradient-to-t', 'from-toggle-l', 'to-toggle-r');
  themeTogglerKnob.classList.remove('translate-x-0');
  themeToggler.setAttribute('aria-checked', false);
  localStorage.theme = 'light';
}

function switchToDarkMode() {
  document.documentElement.classList.add('dark');
  themeToggler.classList.add('bg-gradient-to-t', 'from-toggle-l', 'to-toggle-r');
  themeTogglerKnob.classList.add('translate-x-0');
  themeToggler.setAttribute('aria-checked', true);
  localStorage.theme = 'dark';
}
