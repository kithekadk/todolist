// import { pickName } from "../test.js"

let todosContainer = document.querySelector('.todos')

let todos = []

let todoform = document.querySelector('#todoform')
let newtodo = document.getElementById("createtodo")
let checkedstatus = document.querySelector(".checkbox")

todoform.addEventListener("submit", (e)=>{
    e.preventDefault()

    if(newtodo.value.trim() !== ""){
        let todo = {
            id: todos.length + 1,
            taskname: newtodo.value.trim(),
            status: checkedstatus.checked
        }

        todos.push(todo)

        console.log(todos);

        localStorage.setItem('todos', JSON.stringify(todos))

        displayTodos("")
    }
})


let displayTodos = function(state){
    
    let taskItems = localStorage.getItem("todos")

    taskItems = JSON.parse(taskItems)

    // console.log(taskItems);
    // count
    let res = taskItems.filter(el=>{
        return el.status === false
    })
    let count = document.querySelector('.count')
    count.textContent = `${res.length} items left`

    console.log(res);

    let tasks = document.querySelectorAll('.todos .todo')

    tasks.forEach(el=>{
        el.remove()
    })


    taskItems = taskItems.filter(el =>{
        if(state !== ""){
            return el.status == state
        }else if(state == ""){
            return el
        }
    })

    console.log(taskItems);


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


    // filter todos

    let all = document.querySelector('.all')
    all.addEventListener("click", ()=>{
        displayTodos("")
    })

    let active = document.querySelector('.active')
    active.addEventListener("click", ()=>{
        displayTodos(false)
    })

    let complete = document.querySelector('.completed')
    complete.addEventListener("click", ()=>{
        displayTodos(true)
    })

    // clear completed
    let clearCompleted = document.querySelector(".clear")
    clearCompleted.addEventListener("click", ()=>{
        let allTasks = localStorage.getItem("todos")

        allTasks = JSON.parse(allTasks)
        console.log(allTasks);
        let uncompleted = allTasks.filter((el)=>{
            return el.status === false
        })
        todos = todos.filter((el)=> el.status == false)
        
        localStorage.setItem('todos', JSON.stringify(uncompleted))

        displayTodos("")

    })


displayTodos("")