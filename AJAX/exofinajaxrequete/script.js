function askUsername() {
    return prompt('Quel est votre nom d\'utilisateur ?')
}

function askMathOperation() {
    return prompt('Combien font 6 x 7')
}

function success() {
    console.log('Vous pouvez accéder à l\'application')
}

function error() {
    console.log('Accès refusé')
}

function checkUsername() {
    return new Promise((resolve, reject) => {
        let username = askUsername()

        if ('admin' === username) {
            resolve()
        } else {
            reject()
        }
    })
}

function checkIfIsBot() {
    return new Promise((resolve, reject) => {
        let result = askMathOperation()
        if (42 === parseInt(result)) {
            resolve()
        } else {
            reject()
        }
    })
}

function manageResearch() {
    Promise.all([checkUsername(), checkIfIsBot()]).then(success, error)
}