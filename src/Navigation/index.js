import './style.css';

export const Navigation = () => {
    const element = document.createElement('div');
    element.classList.add('nav');

    element.innerHTML = `
    <nav>
        <a href="/">luciecestuje</a>
        <a href="/cesty">cesty</a>
        <a href="/autor">o mne</a>
    </nav>
    `

    return element;
};