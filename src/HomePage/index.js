export const HomePage = () => {
    const element = document.createElement('div');
    element.classList.add('home','page');

    element.innerHTML = `
        <p>Tohle je home page
        <br/>tady udelat slider s nahodnym vyberem jednotlivych fotek z cest a vzdy u toho maly popis kde to je a jaky rok: Barcelona 2019
        <br/>podobne jak to ma na strankach Jan, zadny scroll, jen jedna strana uvitaci, zadne info, jen menici se fotky
        <br/>po kliku na fotku by se mohla otevrit cela ta konkretni cesta ze ktere to je, ale to asi az pozdeji
        
        <br/><br/>TODO
        <br/><br/>vytvorit komponentu ListOfTravels, tu importovat do komponenty Travels. Potom vytvorit detail cesty - komponentu Travel, kterou zavolame kliknutim 
        na cestu ze seznamu.
        <br/><br/>nejdriv si zalozit novy projekt v supabase, dat tam nejake fotky a texty a zkusit je zobrazit pomoci volani komponenty Travel
        <br/>potom zkusit pracovat s databazi - davat texty a fotky pomoci inputu ale zaroven je i pak zobrazit
        <br/>supabase - zkusit pracovat s fotkami tam, i kdyz mam jen 1GB k dispozici. Tak na zkousku. Udelat kod na kompresi fotek, aby byly mensi a nahraly se tak 
        do databaze</p><br/><br/>

    `

    return element;
};