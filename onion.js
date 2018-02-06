var onions = document.getElementById('coinAmount')
var cost = document.getElementById('price')
var amount = document.getElementById('amount')
var wallet = document.getElementById('wallet')
var item = document.getElementById('item_number')

wallet.addEventListener('change', updateWallet)
onions.addEventListener('change', updatePrice)

function updatePrice () {
  cost.value = (parseFloat(onions.value * 5).toPrecision(2))
  amount.value = (parseFloat(onions.value * 5).toPrecision(2))
}

function updateWallet () {
  item.value = wallet.value
  // document.getElementById('item_name').value = wallet.value
}
