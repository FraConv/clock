function updateClock() {
    
  const orologio = new Date();
    const ore = String(orologio.getHours()).padStart(2, '0');
    const minuti = String(orologio.getMinutes()).padStart(2, '0');
    const secondi = String(orologio.getSeconds()).padStart(2, '0');
    const timeString = `${ore}:${minuti}:${secondi}`;
    document.querySelector('h1').textContent = timeString;
  
  };

  setInterval(updateClock, 1000); 
  
  updateClock();

  
const bottone = document.querySelector('.bottone')

const bottoneclick = document.querySelector('.bottoneclick')

const riquadro = document.querySelector('.riquadroclick')

const bodyclick = document.querySelector('.bodyclick')

const contenitore = document.querySelector('.contenitoreclick')

const h1 = document.querySelector('.h1click')

const footer = document.querySelector('.footerclick')

bottone.addEventListener('click', () => {

bottoneclick.classList.toggle('bottoneclick')
riquadro.classList.toggle('riquadroclick')
bodyclick.classList.toggle('bodyclick')
contenitore.classList.toggle('contenitoreclick')
h1.classList.toggle('h1click')
footer.classList.toggle('footerclick')

})



