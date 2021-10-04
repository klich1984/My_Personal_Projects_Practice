function sumar(){
  //Declaracion de variables, varias formas de capturar los elementos
  const $d = document,
    $form = $d.getElementById('forma'),
    $form1 = $d.querySelector('#forma'),
    $operandoA = $d.getElementById('operando-a'),
    $operandoA1 = $d.querySelector('#operando-a'),
    $operandoA2 = $form['operando-a'],
    $operandoB = $d.getElementById('operando-b'),
    $operandoB1 = $d.querySelector('#operando-b'),
    $operandoB2 = $form['operando-b'],
    $result = $d.getElementById('resultado')

  let resultA = parseInt($operandoA.value),
    resultB = parseInt($operandoB.value),
    result = resultA + resultB
    if (isNaN(resultA)) {
      $result.innerHTML = `No ingresaste el operando A`
    } else if (isNaN(resultB)) {
      $result.innerHTML = 'No ingresaste el operando B'
      console.log(resultB)
    } else {
      $result.innerHTML = `Resultado de la suma es: ${result}`
    }
}
