const $d = document,
  $w = window

  /* uno - el id del elemento
    dos - media quuery
    tres - contenido html a nivel movil
    cuatro - contenido html a nivel de escritorio
     */
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = $w.matchMedia(mq)
  const $element = $d.getElementById(id)

  const responsive = (e) => {
    if (e.matches) {
      $element.innerHTML = desktopContent
    } else {
      $element.innerHTML = mobileContent
    }
    // console.log(e.matches);
  }
  // agregarle listener que evalua si media query se cumple
  breakpoint.addEventListener('change', responsive)
  responsive(breakpoint)
}