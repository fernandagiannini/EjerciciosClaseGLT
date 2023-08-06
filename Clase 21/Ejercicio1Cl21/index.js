document.addEventListener('DOMContentLoaded', () => {

    /*escucho el nombre tipeado en input*/
    const fNameInput = document.querySelector('#fName')
    let fName = ''

    fNameInput.addEventListener('input', (event) => {
        fName = fNameInput.value
        console.log(fName)
    })


    /*escucho el apellido tipeado en input*/
    const lNameInput = document.querySelector('#lName')
    let lName = ''

    lNameInput.addEventListener('input', (event) => {
        lName = lNameInput.value
        console.log(lName)
    })


    /*escucho el username tipeado en input*/
    const userNameInput = document.querySelector('#username')
    let userName = ''

    userNameInput.addEventListener('input', (event) => {
        userName = userNameInput.value
        console.log(userName)
    })


    /*escucho la contraseña tipeada en input*/
    const passwordInput = document.querySelector('#password')
    let password = ''

    passwordInput.addEventListener('input', (event) => {
        password = passwordInput.value
        console.log(password)
    })

    /*escucho la confirmacion de la contraseña tipeada en input*/
    const cPasswordInput = document.querySelector('#cpassword')
    let cPassword = ''

    cPasswordInput.addEventListener('input', (event) => {
        cPassword = cPasswordInput.value
        console.log(cPassword)
    })


    /*escucho la fecha de nacimiento tipeada en input*/
    const bDateInput = document.querySelector('#bDate')
    let bDate

    bDateInput.addEventListener('input', (event) => {
        bDate = bDateInput.value
        console.log(bDate)
    })


    /*escucho el boton newslatter*/
    const nLetterCheckBox = document.querySelector('#nLetter')
    let nLetter

    nLetterCheckBox.addEventListener('input', (event) => {
        nLetter = nLetterCheckBox.value
        console.log(nLetter)
    })




    /*validaciones cuando presionan el boton Submit del formulario*/

    const form = document.querySelector('form')
    const div = document.querySelector('#principal')
    let h4 = document.querySelector('h4')


    form.addEventListener('submit', (event) => {       
        event.preventDefault()
        if (password != cPassword) {             /* password debe ser igual a cpassword */
            h4.textContent = " * Las passwords no coinciden *"
            div.appendChild(h4)
        } else {
            h4.textContent = " Registro realizado con éxito"
            div.appendChild(h4)
        }
    })

})

