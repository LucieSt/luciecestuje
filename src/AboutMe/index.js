export const AboutMe = () => {
    const element = document.createElement('div');
    element.classList.add('about', 'page');

    element.innerHTML = `
        <p>O mne
        <br/>taky muze byt par fotek Zdeny a nas jak s ni cestujeme a fakt kratky popis</p>
    `
    
    return element
};