var onions = document.getElementById('coinAmount')
var cost = document.getElementById('price')
var amount = document.getElementById('amount')

onions.addEventListener('change', updatePrice)

function updatePrice () {
  cost.value = onions.value * 5
  amount.value = onions.value * 5
}
