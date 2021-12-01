let checkbox = document.getElementById('consentement')
let radio = document.getElementsByName('btn-radio')
let pays = document.getElementById('pays')
let message = document.querySelector('#message')

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    alert('Vous acceptez de recevoir la newsletter')
    for(item of radio) {
      if (item.value == 'oui') {
        item.checked = true
      }
    }
  } else {
    for(item of radio) {
      item.checked = (item.value === 'non');
    }
  }
})

pays.addEventListener('change', (event) => {
  message.innerText = `Vous avez indiqué être en ${event.target.value}`
})



