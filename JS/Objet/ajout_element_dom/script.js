/*let liste = document.getElementById('liste')
let li = document.createElement('li')
    /*li.innerText = 'item 3'
    liste.append(li)
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
    //item2.remove()

liste.append(liste.removeChild(item2))*/
// Ajout du titre h3.


let h3 = document.createElement('h3')
h3.append('Titre de la section')
document.body.prepend(h3)

// Suppression des items de la liste.
let items = document.getElementsByTagName('li')

for (item of Array.from(items)) {
    item.remove()
}

// Inversion des paragraphes.
let contenu = document.getElementById('contenu')
let premierParagraphe = contenu.firstElementChild
premierParagraphe.remove()

contenu.append(premierParagraphe)