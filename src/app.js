import { createHeader } from './components/Header.js';
import { createFooter } from './components/Footer.js';
import createMainComponent from './components/MainComponent.js';
import { createHomeView } from './views/Home.js';

const routes = {
    '/': createHomeView,
    '/home': createHomeView,
};

const navigateTo = (url) => {
    history.pushState(null, null, url);
    loadRoute();
};

const loadRoute = () => {
    const path = window.location.pathname;
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Clear current content

    const viewCreator = routes[path] || createHomeView;
    mainContent.appendChild(viewCreator());
};

export const initializeApp = () => {
    const app = document.getElementById('app');
    app.appendChild(createHeader());
    app.appendChild(createMainComponent());
    app.appendChild(createFooter());

    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    window.addEventListener('popstate', loadRoute);
    loadRoute(); // Load the initial route
};
