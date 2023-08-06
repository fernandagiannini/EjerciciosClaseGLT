document.addEventListener('DOMContentLoaded', () => {
    
    const confirmButton = document.querySelector('#confirm')
    const cancelButton = document.querySelector('#cancel')
    const closeButton = document.querySelector('#close')
    const personNameInput = document.querySelector('input')
    const finalMessageBox = document.querySelector('#finalMessageBox')

    let h2 = document.querySelector('h2')
    let personName


    personNameInput.addEventListener('input', (event) => {    /*escucho el nombre tipeado en input*/
        personName = personNameInput.value
    })

    confirmButton.addEventListener('click', () => {    /*pongo un mensaje personalizado al presionarse el boton*/
        document.getElementById('finalMessageBox').style.display = 'block';
        h2.textContent = personName + " se ha efectuado su registro"
        finalMessageBox.appendChild(h2)
    })


    cancelButton.addEventListener('click', () => {    /*pongo un mensaje al presionarse el boton*/
        document.getElementById('finalMessageBox').style.display = 'block';
        h2.textContent = "Registro cancelado"
        finalMessageBox.appendChild(h2)
    })

    closeButton.addEventListener('click', () => {    /*escondo el cuadro de mensaje final */
        document.getElementById('finalMessageBox').style.display = 'none';
    })
})