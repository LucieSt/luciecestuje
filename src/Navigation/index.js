import './style.css';

export const Navigation = () => {
    const element = document.createElement('div');
    element.classList.add('nav');

    element.innerHTML = `
    <nav>
        <a href="/">luciecestuje</a>
        <a href="/cestovani">cestovani</a>
        <a href="/autor">o mne</a>
        <a href="/kontakt">kontakt</a>
    </nav>
    `

    return element;
};