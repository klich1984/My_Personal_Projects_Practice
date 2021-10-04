const showClock = () => {
  let date = new Date(),
    // hour = date.getHours(),
    hour = timeFormat(date.getHours()),
    // minutes = date.getMinutes(),
    minutes = timeFormat(date.getMinutes()),
    // seconds = date.getSeconds()
    seconds = timeFormat(date.getSeconds())

    const $hour = document.getElementById('hour'),
      $date = document.getElementById('date'),
      months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']
    // Extraemos el dia de la semana dependiendo de lo que traiga getDay que devuelve el dia de la semana en valor numerico igual que getMonth. ej date.[4] = Vie
    let dayWeek = days[date.getDay()],
    // Obtenemos el dia
      day = date.getDay(),
      month = months[date.getMonth()],
      textDate = `${dayWeek}/${day}/${month}`

    $hour.innerHTML = `${hour}:${minutes}:${seconds}`
    $date.innerHTML = textDate

    // Me trae todas las clases que se estan aplicando a este elemento
    document.getElementById('container').classList.toggle('effect')


}
/* Formato de la hora agrega un 0 a la izquierda */
const timeFormat = (hour) => {
  if (hour < 10 )
    hour = `0${hour}`
  return hour
}

setInterval(showClock, 1000)