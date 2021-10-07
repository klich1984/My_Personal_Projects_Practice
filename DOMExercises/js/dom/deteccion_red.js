const $d = document,
  $w = window,
  $n = navigator

export default function networkStatus() {
  // Agregar eventos online y offline al window
  const isOnline = () => {
    const $div = $d.createElement('div')

    if ($n.onLine) {
      $div.textContent = 'Conecxíon Reestablecida'
      $div.classList.add('online')
      $div.classList.remove('offline')
    } else {
      $div.textContent = 'Conecxíon Perdida'
      $div.classList.add('offline')
      $div.classList.remove('online')
    }
  $d.body.insertAdjacentElement('afterbegin', $div)
  setTimeout(() => $d.body.removeChild($div), 3000);
  }
  $w.addEventListener('online', e => isOnline())
  $w.addEventListener('offline', e => isOnline())
}