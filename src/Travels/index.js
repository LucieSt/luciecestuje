export const Travels = () => {
    const element = document.createElement('div');
    element.classList.add('travels','page');

    element.innerHTML = `
        <p>Tohle je stranka s cestami
        <br/>bude tu vycet cest podle let (ctverce) nebo proste siroke pasy jako minule a nejaky filtracni system - roky, zeme
        <br/>asi bude nejlepsi nechat to jak bylo - radit od nejaktualnejsich cest a nahoru dat filtrovat podle ...
        <br/>tady bude appendovana komponenta ListOfTravels a bude mozne se prokliknout do konkretni cesty (komponenta Travel)
        <br/><br/>databaze - bude obsahovat ListOfTravels, ale zaroven i obrazky a texty jednotlivych cest ktere se z ni budou nacitat?</p>
    `

    return element;
};