/* Recive el elemento boton y  selector(data atribute) que haga referencia al modo oscuro con el cual obtendemos una lista de todos los elementos que tienen la clase para aplicar el modo oscuro.
A cada elemento que se quiera aplicar el modo oscuro se debe poner el data atribute al HTML

Localstorage: necesito dos variables
  - obtener una variable de tipo localstorage
  - para actualizar o establecer un valor para localstorage*/

  const $d = document,
  ls = localStorage

export default function darkTheme(btn, classDark) {
  const $themeBtn = $d.querySelector(btn),
    // Aplicar estilos a todos los elementos que tengan la clase data-dark
    $selectors = $d.querySelectorAll('[data-dark]')

  // console.log($selectors )

  let moon = '🌙',
    sun = '🌞'

  const darkMode = () => {
    $selectors.forEach(el => el.classList.add(classDark))
    $themeBtn.textContent = sun
    ls.setItem('theme', 'dark')
  }

  const lightMode = () => {
    $selectors.forEach(el => el.classList.remove(classDark))
    $themeBtn.textContent = moon
    ls.setItem('theme', 'light')
  }

  $d.addEventListener('click', e => {
    if (e.target.matches(btn)) {
      // console.log($themeBtn.textContent)
      if (e.target.textContent === moon) {
        // agregar la clase dark a todos los elementos que tiene el data-atribute data-dark
        darkMode()
      } else {
        lightMode()
      }
    }
  })

  $d.addEventListener('DOMContentLoaded', e => {
    if (ls.getItem('theme') === null)
      ls.setItem('theme', 'light')
    if (ls.getItem('theme') === 'light')
      lightMode()
    if (ls.getItem('theme') === 'dark')
      darkMode()
  })
}