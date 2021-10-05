const $d = document,
  $w = window

export default function scrollTopButton(btn) {
  const $scrollBtn = $d.querySelector(btn)

  // Agregar evento al windows
  $w.addEventListener('scroll', e => {
    // window.pageYOffset y document.documentElement.scrollTop me dan el mismo valor la distancia que ha recorrido la barra de desplazamiento desde el top 0
    console.log($w.pageYOffset, $d.documentElement.scrollTop)
    let scrollTop = $d.documentElement.scrollTop

    if (scrollTop > 700) {
      $scrollBtn.classList.remove('hidden')
    } else {
      $scrollBtn.classList.add('hidden')
    }
  })

  $d.addEventListener('click', e => {
    if (e.target.matches(btn)) {
      // scrollTo es un objeto que recibe varias propiedades
      $w.scrollTo({
        // Comportamiento
        behavior: 'smooth',
        // hacia que posicion quiero ir
        top: 0
      })
    }
  })
}