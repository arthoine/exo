/*function Personne() {

}

class Humain {

}

let personne1 = new Personne()
console.log(personne1)

let personne2 = new Humain()
console.log(personne2)





// Version ES6
class Personne2 {
    constructor(nom, prenom, age, sexe, adresse) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.sexe = sexe
        this.adresse = adresse
    }
}

let personne2 = new Personne2('Doe', 'John', 31, 'M', 'Rue du JavaScript')

console.log(personne2.nom, personne2.prenom, personne2.age, personne2.sexe, personne.adresse)

personne2.age = 41
personne2.adresse = 'Rue des classes en JavaScript'

console.log(personne2.nom, personne2.prenom, personne2.age, personne2.sexe, personne.adresse)


*/

// Version ES6
class Personne {
    constructor(nom, prenom, age, sexe, adresse) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.sexe = sexe
        this.adresse = adresse
    }
    identite() {
        let identite = `${this.prenom.substring(0,1)}. ${this.nom}`
        console.log(identite)
    }
    gender() {
        if (this.sexe === 'M') {
            console.log(`Monsieur ${this.nom}`)
            return;
        }
        console.log(console.log(`Madame ${this.nom}`))
    }
}

Personne.prototype.changeAge = function(age) {
    this.age = age
    console.log(`${this.prenom} a ${this.age} ans`)
}

let personne1 = new Personne('Doe', 'John', 31, 'M', 'Rue du JavaScript')
let personne2 = new Personne('Doe', 'Ann', 28, 'F', 'Avenue des classes et objets')

personne1.identite()
personne2.identite()

personne1.gender()
personne2.gender()


personne1.changeAge(41)