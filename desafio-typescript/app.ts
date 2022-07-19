let button = document.getElementById('button')
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

let devePrintar = true

function somarNumeros(numero1: number, numero2: number, devePrintar: boolean) {
    let resultado = numero1 + numero2
    let frase = `O valor é: ${resultado}`

    if (devePrintar) {
        console.log(frase)
    }

    return numero1 + numero2
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devePrintar))
        }
    } )
}
