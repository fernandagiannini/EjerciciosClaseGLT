import fs from 'node:fs'

const numbersOfDatos = fs.readFileSync ('datos.txt', 'utf-8')

const numbersArray = numbersOfDatos.split(' ')

const numbersFilteredArray = numbersArray.filter (numbersInString => Number (numbersInString) %2 ===0) 

fs.writeFileSync('numeros-pares-txt', `La cantidad de números pares es ${numbersFilteredArray.length}`)
