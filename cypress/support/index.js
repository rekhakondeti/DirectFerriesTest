// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  
  // code snippet to ignore displaying the xhr logs in the command log
  // Add "hideHR": true in cypress.json
  
  if (Cypress.config('hideXHR')) {
    const app = window.top;
    if (
      app &&
      !app.document.head.querySelector('[data-hide-command-log-request]')
    ) {
      const style = app.document.createElement('style');
      style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
      style.setAttribute('data-hide-command-log-request', '');
  
      app.document.head.appendChild(style);
    }
  }
// Alternatively you can use CommonJS syntax:
// require('./commands')
