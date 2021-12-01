/*
const lastname = document.getElementById('lastname')
    
    for (let attribute of lastname) {
        console.log(attribute.name)
        console.log(attribute.textContent)

    }

    const attributename = lastname.getAttribute('name')
    console.log(attributename)

    for (let attribute of lastname.getAttributeNames()) {
        console.log(attribute)
    }
console.log(lastname.getAttributeNode('id').value)

const elements = document.getElementsByTagName('div')
for (let element of elements) {
    if (element.hasAttribute('class')) {
        console.log(element.innerText)
    }
}

const checkbox = document.getElementById('box')
checkbox.removeAttribute('checked')
    //checkbox.setAttribute('checked', 'checked')
*/

let inputText = document.getElementById('email')

for (let attribut of inputText.attributes) {
    console.log(attribut)
}

let inputTextId = inputText.getAttribute('id')
console.log(inputTextId)

let checkbox = document.getElementById('connexion')

if (checkbox.hasAttribute('checked')) {
    console.log(checkbox.getAttribute('checked'))
    checkbox.removeAttribute('checked')
}

let form = document.querySelector('form')

for (element of form.elements) {
    if (!element.hasAttributes()) {
        console.log(`Cette élément n'a pas d'attributs : ${element}`);
    }
}