// console.log('Ciao');


/* 

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e 
accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare
l’immagine della lampadina accesa, sempre in allegato)

*/


const img = document.querySelector('img');
const button = document.querySelector('button');


button.addEventListener('click', function(){

    // console.log('bottone cliccato');
    
    if (button.innerHTML == 'Accendi') {
        img.src = "./assets/img/yellow_lamp.png";
        button.innerHTML = 'Spegni';
        
    } else if (button.innerHTML == 'Spegni') {
        img.src = "./assets/img/white_lamp.png";
        button.innerHTML = 'Accendi';
    }
    // document.querySelector('img').src = "./assets/img/yellow_lamp.png"
    

})
