/*const request = fetch('https://jsonplaceholder.typicode.com/users');

request
    .then((response) => {
        console.log(response);
        const data = response.json();

        data.then((jsonData) => {
            console.log(jsonData)
        })
    })
    .catch((Error) => {
        console.log(Error);
    })
*/



/*
function manageResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log(response.status)
    }
}

function displayData(data) {
    console.log(data)
}

fetch('https://reqres.in/api/users/2')
    .then(manageResponse)
    .then(displayData)

*/




let urls = [
    'https://reqres.in/api/users/2',
    'https://reqress.in/api/users/3',
    'https://reqres.in/api/users/23'
]

function fetchUrl(url) {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log('Une erreur est survenue, code erreur ' + response.status)
                return {}
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error(error)); //Traitement de l'erreur dans l'appel
}

urls.forEach(url => fetchUrl(url))








////////////////Exercice : Appliquez la notion///////////////////////////////////