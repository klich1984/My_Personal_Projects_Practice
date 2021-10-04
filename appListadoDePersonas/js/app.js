/* Arreglo de objetos de tipo persona
  - Como estamos en la misma carpeta podemos acceder a la clase persona sin problemas*/
const personas = [
  // Crear un objeto de tipo Persona
  new Persona('Carlos', 'Usuga'),
  new Persona('Erica', 'Orrego')
]

const $d = document,
  $ulPersonas = $d.getElementById('persona'),
  $form = $d.getElementById('form'),
  // otra forma usando el objeto forms
  $form1 = $d.forms['form'],
  $name = $form['name'],
  $lastName = $form1['last-name']

// Muestra las personas del arreglo personas en etiquetas li
function mostrarPersonas() {
  // console.log('Ejecutandose mostrarpersona')
  // Guradara cada uno de los objetos de tipo persona que hay en nuestro arreglo de personas
  let texto = ''
  for (let persona of personas) {
    // console.log(persona)
    // Mostrarlo dentro del HTML
    texto += `<li>${persona.name} ${persona.lastName}</li>`
    $ulPersonas.innerHTML = texto
  }
  // console.log($ulPersonas)
}

function addPersona() {
  // console.log($name)
  if ($name.value === '' || $lastName.value === '') {
    alert('Ingresa los datos namobre y apellido para agregarlos')
  } else {
    const persona = new Persona($name.value, $lastName.value)
    personas.push(persona)
    mostrarPersonas()
    $name.value = ''
    $lastName.value = ''
  }

}
