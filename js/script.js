const contador = document.getElementById('contadorVisitas')
const restarButton = document.getElementById('btnReestablecer')

const countVisit = () => {
    localStorage.setItem('contador',(parseFloat(localStorage.getItem('contador')) || 0)+ 1)

    contador.innerHTML = localStorage.getItem('contador')
}

const resetCounter = () =>{
    localStorage.setItem('contador',0)
    contador.innerHTML = localStorage.getItem('contador')
}
restarButton.addEventListener('click',resetCounter)
window.addEventListener('load', countVisit)