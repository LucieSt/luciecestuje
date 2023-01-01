import { Navigation } from '../Navigation/index.js';
import { HomePage } from '../HomePage/index.js';
import { Travels } from '../Travels/index.js';
import { AboutMe } from '../AboutMe/index.js';

export const App = () => {

    const element = document.createElement('div');
    element.classList.add('app');

    element.append(Navigation());

    const { pathname } = window.location;
    if (pathname === '/') {
        element.append(HomePage());
    } else if (pathname === '/cesty') {
        element.append(Travels());
    } else if (pathname === '/autor') {
        element.append(AboutMe());
    };

    return element;
};