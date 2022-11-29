export const AboutMe = () => {
    const element = document.createElement('div');
    element.classList.add('about', 'page');

    element.innerHTML = `
        <p>O mne</p>
    `
    
    return element
};