const $d = document
// Sin pasarle propiedades, realizo 2 addEventListener
export function digitalWatch() {
    const $container = $d.getElementById('container-watch'),
    $startWatch = $d.getElementById('start-clock'),
    $stopWatch = $d.getElementById('stop-clock')

  let clockTempo;

  const showClock = () => {
    // let Date = new Date().toLocaleTimeString()
    let date = new Date(),
      hour = timeFormat(date.getHours()),
      minutes = timeFormat(date.getMinutes()),
      seconds = timeFormat(date.getSeconds())


    $container.innerHTML = `<h3>${hour}:${minutes}:${seconds}</h3>`
  }

  /* Formato de la hora agrega un 0 a la izquierda */
const timeFormat = (hour) => {
  if (hour < 10 )
    hour = `0${hour}`
  return hour
}

  $startWatch.addEventListener('click', e => {
    clockTempo = setInterval(showClock, 1000)
    e.target.disabled = true
  })

  $stopWatch.addEventListener('click', () => {
    clearInterval(clockTempo)
    $container.innerHTML = ''
    $startWatch.disabled = false
  })
}

// Le paso como parametros los selectores que voy a utilizar en cadena de texto, y solo adiciono un addEventListener
export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo
  // Etiqueta de tipo audio
  const $alarm = $d.createElement('audio')
  $alarm.src = sound
  // $alarm.controls = true

  $d.addEventListener('click', e => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play()
      }, 2000)
      e.target.disabled = true
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo)
      $alarm.pause()
      $alarm.currentTime = 0
      $d.querySelector(btnPlay).disabled = false
    }
  })

}