/* Crearemos varias clases para la app
Ingresos: propio id y hereda de Dato
egresos: propio id y hereda de Dato
Padre es Dato los elementos que se compartiran entre ingresos y egresos  */
const $d = document

const incomes = [
  new Ingreso('Salario', 2100.00),
  new Ingreso('Venta coche', 1500)
  // new Ingreso('Nuevo Ingreso', 1200)
]

const expenses = [
  new Egreso('Renta departamento', 900),
  new Egreso('Ropa', 400)
]

/* Functions */
/* Carga los datos al iniciar la app */
let chargeApp = () => {
  chargeHeader()
  chargeIncome()
  chargeExpenses()
}

let chargeHeader = () => {
  // Budget = presupuesto
  let totalBudget = totalIncome() - totalExpenses()
  // graduationPercentage = porcentaje de egreso
  let graduationPercentage = totalExpenses() / totalIncome()
  $d.getElementById('budget').innerHTML = moneyFormat(totalBudget)
  $d.getElementById('percentage').innerHTML = percentFormat(graduationPercentage)
  $d.getElementById('income').innerHTML = moneyFormat(totalIncome())
  $d.getElementById('expenses').innerHTML = moneyFormat(totalExpenses())

}
/* income = Ingresos
Funcion que suma el total de ingresos */
let totalIncome = () => {
  let totalIncome = 0

  for (let income of incomes) {
    // console.log(income)
    totalIncome += income.value
  }
  return totalIncome
}

/* expenses = egresos
funcion que suma el total de egresos*/
let totalExpenses = () => {
  let totalExpenses = 0

  for (let expense of expenses) {
    totalExpenses += expense.value
  }
  return totalExpenses
}

/* funcion de internacionalizacion de moneda */
/* const moneyFormat = value => value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }) */
const moneyFormat = value => value.toLocaleString('en-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 })

const percentFormat = value => value.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 })

/* Funcion de cargar ingresos en el HTML */
const chargeIncome = () => {
  let incomesHTML = ''
  for (let income of incomes) {
    incomesHTML += createIncomeHTML(income)
  }
  $d.getElementById('income-list').innerHTML = incomesHTML
}

/* Crea un elemento en HTML */
const createIncomeHTML = income => {
  // console.log(income)
  let incomeHTML = `
    <div class="element clean-style">
      <div class="description-element">${income.description}</div>
      <div class="right clean-style">
        <div class="value-element">${moneyFormat(income.value)}</div>
        <div class="delete-element">
          <button class="btn-delete-element">
            <ion-icon
              name="close-circle-outline"
              onclick="deleteIncome(${income.id})"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  `
  return incomeHTML
}

// Elimina un ingreso, recibe el id del ingreso a ser eliminado
const deleteIncome = id => {
  // nos retorna el indice del objeto que coincida con el id pasado, si coincide devuelve el indice si no no devuelve nada
  let indexDelete = incomes.findIndex( income => income.id === id)
  // elimina el objeto con el indice pasado y solo una cioincidencia
  incomes.splice(indexDelete, 1)
  // cargamos de nuevo los parametros
  chargeHeader()
  chargeIncome()
}

/* Funcion de cargar egresos en el HTML */
let chargeExpenses = () => {
  let expensesHTML = ''
  for (let expense of expenses) {
    expensesHTML += createExpenseHTML(expense)
  }
  $d.getElementById('expenses-list').innerHTML = expensesHTML
}

const createExpenseHTML = expense => {
  // console.log(expense)
  let expenseHTML = `
  <div class="element clean-style">
    <div class="description-element">${expense.description}</div>
    <div class="right clean-style">
      <div class="value-element">${moneyFormat(expense.value)}</div>
      <div class="percentage-element">${percentFormat(expense.value/totalExpenses())}</div>
      <div class="delete-element">
        <button class="btn-delete-element">
          <ion-icon
            name="close-circle-outline"
            onclick='deleteExpense(${expense.id})'></ion-icon>
        </button>
      </div>
    </div>
  </div>
  `
  return expenseHTML
}

const deleteExpense = id => {
  let indexDelete = expenses.findIndex( expense => expense.id === id)
  expenses.splice(indexDelete, 1)
  chargeHeader()
  chargeExpenses()
}

let addData = () => {
  // const $form = $d.getElementById('form')
  const $form = $d.forms['form'],
    $type = $form['type'],
    $description = $form['description'],
    $value = $form['value']

  if ($description.value === '')
    return alert('Ingresa una descripción')
  if ($value.value === '')
    return alert('Ingresa un valor')
  if ($type.value === 'income') {
    // +$value.value es lo mismo que Number($value.value)
    incomes.push(new Ingreso($description.value, +$value.value))
    chargeHeader()
    chargeIncome()
    $description.value = ''
    $value.value = ''
  } else if ($type.value === 'expense') {
    expenses.push(new Egreso($description.value, +$value.value))
    chargeHeader()
    chargeExpenses()
    $description.value = ''
    $value.value = ''
  }


  // console.log($value)
}