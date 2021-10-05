const $d = document

export default function countDown(id, limitDate, finalMsg) {
  const $countdown = $d.getElementById(id),
    // Guardamos la fecha en milisegundos para poder hacer calculos con ella, esta fecha es estatica
    countdowneDate = new Date(limitDate).getTime()

    console.log(new Date())

  let countdownTempo = setInterval(() => {
    // console.log(countdowneDate)
    let now = new Date().getTime(),
      limitTime = countdowneDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = ('0' + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
      minutes = ('0' + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2),
      seconds = ('0' + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2)

    $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`

    if (limitTime < 0) {
      clearInterval(countdownTempo)
      $countdown.innerHTML = `<h3>${finalMsg}</h3>`
    }

  }, 1000);
}