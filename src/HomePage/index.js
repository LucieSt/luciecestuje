export const HomePage = () => {
    const element = document.createElement('div');
    element.classList.add('home','page');

    element.innerHTML = `
        <p>Tohle je home page</p>
    `

    return element;
};