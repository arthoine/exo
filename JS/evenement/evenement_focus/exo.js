let inputTodo = document.getElementById('todo-task')
let submitButton = document.getElementById('add-button')
let list = document.getElementById('todo-list')

submitButton.addEventListener('click', (event) => {
    if (inputTodo.value !== '') {
        var listElement = document.createElement("li")
        text = document.createTextNode(inputTodo.value)

        listElement.appendChild(text)
        list.appendChild(listElement)
    }
})