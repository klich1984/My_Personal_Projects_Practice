const $d = document

export default function scrollSpy() {
	const $sections = $d.querySelectorAll('section[data-scroll-spy]'),
  options = {
    // root: $d.querySelector('#scrollArea'), // Por defecto
    // rootMargin: '-250px', // se debe dar en pixeles y se debe colocar la medida px y negativo para que observe al interiro
    // threshold: 0.6, // limite
    threshold: [0.5, 0.75], // limite
  }

  const cb = (entries) => {
    // console.log("entries=>", entries)

    entries.forEach(entry => {
      const id = entry.target.id
      // console.log(id);
      if (entry.isIntersecting) {
        $d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')
        // entry.target.classList.add("active")
      } else {
        $d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active')
        // console.log(entry)
      }
    })
  }

  const observer = new IntersectionObserver(cb, options)
  // asignar cada observer a cada etiqueta de la lista de nodos
  $sections.forEach(el => observer.observe(el))

}
