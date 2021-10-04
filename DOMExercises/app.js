const $d = document,
  $btnBurger = $d.querySelector('.hamburger'),
  $navModal = $d.querySelector('.nav')

console.log($btnBurger)
console.log($navModal)

function btnBurger(e) {
  console.log('Hola desde funcion')
  $navModal.style.display = 'block'
}

$btnBurger.addEventListener('click', btnBurger)

