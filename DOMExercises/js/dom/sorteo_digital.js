const $d = document

export default function sorteoDigital(btnDawn, selector) {

  function getWinner(selector) {
    const $list = $d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $list.length),
      winner = $list[random].textContent

    return winner
  }

  $d.addEventListener('click', e => {
    if (e.target.matches(btnDawn)) {
      const winner = getWinner(selector)
      alert(`El ganador es: ${winner}`)
    }
  })
}
