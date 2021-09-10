/* Imaginemos que tu jefe te ha dado el siguiente resumen para crear este juego:

Quiero que crees un sencillo juego del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100,
luego desafiar al jugador a adivinar el número en 10 intentos. Después de cada intento,
debería decirle al jugador si ha acertado o no — y si está equivocado,
debería decirle si se ha quedado corto o se ha pasado. También debería decir los números que ya se probaron anteriormente.
El juego terminará una vez que el jugador acierte o cuando se acaben los intentos.
Cuando el juego termina, se le debe dar al jugador la opción de volver a jugar.

1. Generar un número aleatorio entre 1 y 100.
2. Registrar el número del intento en el que el jugador se encuentre. Empezando en 1.
3. Darle al jugador una forma de adivinar cuál es el número.
4. Una vez que se ha introducido en número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
5. A continuación, strar el número del intento en el que el jugador se encuentre. Empezando en 1.aje de felicitaciones.
  - Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
  - Mostrar un control que permita al jugador volver a empezar el juego.
7. Si es incorrecto y al jugador todavía le quedan intentos:
  - Decirle al jugador que ha fallado.
  - Dejar que el jugador lo intente de nuevo.
  - Incrementa el número de intentos en 1.
8. Si el jugador falla y no le quedan turnos:
  - Decirle al jugador que el juego se ha terminado.
  - Hacer que el jugador no pueda introducir más intentos (esto arruinaría el juego).
  - Mostrar un control que permita al jugador volver a empezar el juego.
9. Una vez que el juego se reinicia, asegúrate de que la lógica del juego y la IU (interfaz de usuario) se restablezcan por completo, luego vuelve al paso 1.

*/

// variables declarations
let $d = document,
  attempts = 1,
  numberRandom = Math.round(Math.random() * 100) + 1,
  resetButton
const btn = $d.querySelector('.submit-btn'),
  elementNumber = $d.getElementById('capturedNumber'),
  listAttempts = [],
  labelAttempts = $d.querySelector('.attem-pts'),
  labelInfo = $d.querySelector('.msj-inform'),
  labelLowHi = $d.querySelector('.msj-low-hi'),
  labelParam = $d.querySelector('.resultParas')


// console.log(numberRandom)

// event onclick label input submit
const getNumberInput = () => {
  elementNumber.focus()
  let inputValue = $d.getElementById('capturedNumber').value

  if (attempts < 10) {
    if (parseInt(inputValue) < 1 || parseInt(inputValue) > 100) {
      alert('El numero ingresado debe estar entre 1 y 100')
      elementNumber.value = ''
      return
    }

    if (inputValue === '') {
      alert('¡Ingresa un número!')
    } else if (parseInt(inputValue) < numberRandom) {
      getLabelInfo(' bajo ', attempts, listAttempts)
      attempts++
    } else if (parseInt(inputValue) > numberRandom) {
      getLabelInfo('alto', attempts, listAttempts)
      attempts++
    } else {
      labelInfo.innerHTML = `¡Felicidades! ¡Lo lograste! <br> el numero era <b>${inputValue}</b>`
      getColor('green', 'white')
      addBtn()
    }
  } else {
    if (inputValue === '') {
      alert('¡Ingresa un número!')
      return
    }
    listAttempts.push(inputValue)
    labelAttempts.innerHTML = `Agotastes los <b>${attempts}</b> intentos : ${listAttempts.join('-')}`
    labelInfo.innerHTML = 'No lo lograste<br> <b>!!! Vuelve a intentarlo ¡¡¡</b>'
    getColor('red', 'white')
    addBtn()
  }

  // Add button for reset game
  function addBtn() {
    labelLowHi.innerHTML = ''
    resetButton = $d.createElement('button')
    resetButton.textContent = 'Iniciar nuevo juego'
    labelParam.append(resetButton)
    resetButton.addEventListener('click', resetGame);
    disabledBtn()
  }

  // Function that disabled label type inupt
  function disabledBtn() {
    elementNumber.value = ''
    elementNumber.disabled = true
    btn.disabled = true
  }

  // Function that configure style of the label
  function getColor(bgColor, color) {
    labelInfo.style.backgroundColor = `${bgColor}`
    labelInfo.style.color = `${color}`
  }

  // Function that configure messaje higher or lower
  function getLabelInfo(val, att, listAttempts) {
    listAttempts.push(inputValue)
    labelAttempts.innerHTML = `llevas ${att} intentos => ${listAttempts.join(' ')}`
    labelInfo.innerHTML = '¡Incorrecto!'
    getColor('red', 'white')
    labelLowHi.style.backgroundColor = 'transparent'
    labelLowHi.innerHTML = `¡El número ingresado es muy <b>${val}</b>`
    elementNumber.value = ''
  }
}

// Function that resest Game
function resetGame() {
  attempts = 1
  listAttempts.length = 0
  // elementNumber.value = ''
  elementNumber.disabled = false
  btn.disabled = false
  //labelParam.innerHTML = ''
  labelAttempts.innerHTML = ''
  labelInfo.innerHTML = ''
  labelLowHi.innerHTML = ''
  labelParam.removeChild(resetButton)
  numberRandom = Math.round(Math.random() * 100) + 1
  elementNumber.focus()
}

