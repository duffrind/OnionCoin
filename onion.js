var onions = document.getElementById('coinAmount')
var cost = document.getElementById('price')

onions.addEventListener('change', updatePrice)

function updatePrice () {
  cost.value = onions.value * 5
}
