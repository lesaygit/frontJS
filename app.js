import home from './components/home.js';
import status from './components/status.js'
import login from './components/login.js'
import users from './components/users.js';
import handleLogin from './events/loginEvents.js';

document.addEventListener('DOMContentLoaded', () => {

  const links = document.querySelectorAll('.menu ul li a');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const link_text = event.target.textContent.toLowerCase();
      switch (link_text) {
        case 'home': { home(); window.history.pushState({}, 'Home', 'home'); }
          break;
        case 'users': { users(); window.history.pushState({}, 'Users', 'users'); }
          break;
        case 'login': { login(); window.history.pushState({}, 'Login', '/login'); };
          break;
        default:
          break;
      };
    })
  });

  home();
  status();

  //dirver events
  document.addEventListener('loginFormReady', () => {
    const btn = document.getElementById('btn');
    if (btn) {
      btn.addEventListener('click', handleLogin);
    }
  });

  document.getElementById('loginStatus').addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      sessionStorage.clear();
      home(); window.history.pushState({}, 'Home', 'home');
      status();
    }

  });
});