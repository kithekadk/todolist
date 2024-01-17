let todosContainer = document.querySelector('.todos')

let todos = []

let todoform = document.querySelector('#todoform')
let newtodo = document.getElementById("createtodo")
let checkedstatus = document.querySelector(".checkbox")

todoform.addEventListener("submit", (e)=>{
    e.preventDefault()

    if(newtodo.value.trim() !== ""){
        let todo = {
            taskname: newtodo.value.trim(),
            status: checkedstatus.checked
        }

        todos.push(todo)

        console.log(todos);

        localStorage.setItem('todos', JSON.stringify(todos))

        displayTodos()
    }
})

let displayTodos = function(){

    let taskItems = localStorage.getItem("todos")

    taskItems = JSON.parse(taskItems)

    let tasks = document.querySelectorAll('.todos .todo')

    tasks.forEach(el=>{
        el.remove()
    })


    taskItems.forEach((el, index)=>{
        let todo = document.createElement('div')
        todo.className = "todo"

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className ="checkbox"
        checkbox.checked = el.status

        let taskname = document.createElement('div')
        taskname.textContent = el.taskname

        todo.appendChild(checkbox)
        todo.appendChild(taskname)

        todosContainer.appendChild(todo)
    })
}

displayTodos()