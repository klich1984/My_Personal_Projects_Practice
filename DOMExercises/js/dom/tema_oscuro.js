/* Recive el elemento boton y  selector(data atribute) que haga referencia al modo oscuro con el cual obtendemos una lista de todos los elementos que tienen la clase para aplicar el modo oscuro.
A cada elemento que se quiera aplicar el modo oscuro se debe poner el data atribute al HTML*/

const $d = document

export default function darkTheme(btn, classDark) {
  const $themeBtn = $d.querySelector(btn),
  // Aplicar estilos a todos los elementos que tengan la clase data-dark
    $selectors = $d.querySelectorAll('[data-dark]')

  // console.log($selectors )

  let moon = '🌙',
    sun = '🌞'

  $d.addEventListener('click', e => {
    if(e.target.matches(btn)) {
      // console.log($themeBtn.textContent)
      if (e.target.textContent === moon) {
        // agregar la clase dark a todos los elementos que tiene el data-atribute data-dark
        $selectors.forEach(el => el.classList.add(classDark))
        $themeBtn.textContent = sun
      } else {
        $selectors.forEach(el => el.classList.remove(classDark))
        $themeBtn.textContent = moon
      }
    }
  })
}