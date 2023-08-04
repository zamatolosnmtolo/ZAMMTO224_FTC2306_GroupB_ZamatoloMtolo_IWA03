import { company } from './configuration.js';
import { year } from './configuration.js';

function updateFooter() {
  const message = `© ${company} (${year})`;
  document.querySelector('footer').innerText = message;
}

document.addEventListener('DOMContentLoaded', updateFooter); // Call updateFooter after the HTML has loaded