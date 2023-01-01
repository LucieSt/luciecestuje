export const HomePage = () => {
    const element = document.createElement('div');
    element.classList.add('home','page');

    element.innerHTML = `
        <p>Tohle je home page
        <br/>tady udelat slider s nahodnym vyberem jednotlivych fotek z cest a vzdy u toho maly popis kde to je a jaky rok: Barcelona 2019
        <br/>podobne jak to ma na strankach Jan, zadny scroll, jen jedna strana uvitaci, zadne info, jen menici se fotky
        <br/>po kliku na fotku by se mohla otevrit cela ta konkretni cesta ze ktere to je, ale to asi az pozdeji</p>
    `

    return element;
};