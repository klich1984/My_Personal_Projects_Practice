const $d = document

let x = 0,
  y = 0

// recibe el selector html de la pelota y el selector del escenario
export function moveBall(e, ball, stage) {
  const $ball = $d.querySelector(ball),
    $stage = $d.querySelector(stage),
    $limitBall = $ball.getBoundingClientRect(),
    $limitStage = $stage.getBoundingClientRect()

  // console.log(e.keyCode)
  // console.log($limitBall)
  // console.log($limitStage)
  // up = 38, dowun = 40, left = 37, right = 39

  switch (e.keyCode) {
    case 37:
      // Delimitar a la izqueirda
      if ($limitBall.left > $limitStage.left) {
        e.preventDefault()
        x--;
      }
      break;
    case 38:
      // Delimitar a la izqueirda
      if ($limitBall.top > $limitStage.top) {
        e.preventDefault()
        y--;
      }
      break;
    case 39:
      if ($limitBall.right < $limitStage.right) {
        e.preventDefault()
        x++;
      }
      break;
    case 40:
      if ($limitBall.bottom < $limitStage.bottom) {
        e.preventDefault()
        y++;
      }
      break;

    default:
      break;
  }
  // Mover la pelota en x y y dinamicamente
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
}

export function shorcuts(e) {
  // console.log(e.type)
  // console.log(e.keyCode)
  // console.log('Control', e.ctrlKey)
  // console.log('key', e.altKey)
  // console.log('Shift', e.shiftKey)
  // console.log(e)

  if (e.key === 'a' && e.altKey) {
    alert('Has presionado alt + a y lanzaste una alerta')
  }

  if (e.key === 'c' && e.altKey) {
    confirm('Has presionado alt + c y lanzaste una confirmación')
  }

  if (e.key === 'p' && e.altKey) {
    prompt('Has presionado alt + p y lanzaste un aviso')
  }
}