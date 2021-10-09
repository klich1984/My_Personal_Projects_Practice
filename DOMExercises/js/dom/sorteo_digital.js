const list = [
    'JavaScript',
    'PHP',
    'JAVA',
    'C',
    'Python',
    'Ruby',
    'Go',
    'Visual Basic',
    'Rust',
    'Perl',
    'MySQL',
  ],
  $d = document


export default function sorteoDigital(btnId, listId) {
  const $list = $d.querySelector(listId),
    $fragment = $d.createDocumentFragment(),
    $ul = $d.createElement('ul')

    list.forEach(el => {
      const $li = $d.createElement('li')
      $li.textContent = el
      $fragment.appendChild($li)
    })
    $ul.appendChild($fragment)
    $list.appendChild($ul)

  $d.addEventListener('click', e => {
    if (e.target.matches(btnId)) {
      const randomNumber = Math.floor(Math.random() * list.length)
      console.log(randomNumber);
      alert(`El ganador es ${list[randomNumber]}`)
      // $list.insertAdjacentHTML('beforeend', `<h2>El ganador es: <b>${list[randomNumber]}</b></h2>`)
    }
  })
}
