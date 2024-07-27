

class TodoList{

    constructor(){
        this.tasklist = []
    }

    getFormData(){
        let checkbox = document.querySelector('.checkbox')
        let createtodoInput = document.querySelector('#createtodo')

        let arrayLength = this.tasklist.length

            let id = arrayLength+1
            let status = checkbox.checked
            let todoname = createtodoInput.value.trim()

            if(todoname !== ''){
                this.task = {
                    id, 
                    todoname, 
                    status
                }
               
            }else{
                console.log('Todoname is required');
            } 
        
    }

    addTodo(){

        this.getFormData()

        if(this.task){        
            this.tasklist.push(this.task)
            console.log(this.tasklist);

            this.displayTodos(this.tasklist)
        }

        console.log(`Await form submission`)
        
    }

    displayTodos(tasksArray){
        
        
        let todosContainer = document.querySelector('.todos')

        let allTodos = document.querySelectorAll('.todos .todo')
        allTodos.forEach(el=>{
            el.remove()
        })

        tasksArray.forEach((task, index)=>{

            const todoItemContainer = document.createElement('div')
            todoItemContainer.className = 'todo'

            const todoItemLeft = document.createElement('div')
            todoItemLeft.className = 'todo-inputs'

            const taskname = document.createElement('div')
            taskname.textContent = task.todoname

            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.className ="checkbox"
            checkbox.checked = task.status

            const deleteBtn = document.createElement('button')
            deleteBtn.className = 'deletebtn'
            deleteBtn.textContent = 'X'
            deleteBtn.onclick = () => this.removeTodo(index)

            todoItemLeft.appendChild(checkbox)
            todoItemLeft.appendChild(taskname)
            

            // todoItemContainer.appendChild(checkbox)
            todoItemContainer.appendChild(todoItemLeft)
            todoItemContainer.appendChild(deleteBtn)

            todosContainer.appendChild(todoItemContainer)
        })
    }

    removeTodo(index){
        this.tasklist.splice(index, 1)
        this.displayTodos(this.tasklist)
    }

    filterStatus(status){
        let filteredArray = this.tasklist.filter(todo=>{
            return todo.status == status
        })

        this.displayTodos(filteredArray)
    }

}

let item = new TodoList()

let todoform = document.querySelector('#todoform')

todoform.addEventListener('submit', (e)=>{
    e.preventDefault()

    item.addTodo()
})

let active = document.querySelector('.active')
let completed = document.querySelector('.completed')

active.addEventListener('click', ()=>{
    item.filterStatus(false)
})

completed.addEventListener('click', ()=>{
    item.filterStatus(true)
})

// class Todo{

//     constructor(id, name, isCompleted){
//         this.id = id
//         this.name = name
//         this.isCompleted = isCompleted
//     }

// }

// item.addTodo(30, 'Eat code sleep', false)
// item.addTodo(33, 'Eat code ', true)
// item.addTodo(34, 'Eat code ', true)



// let task1 = new Todo(1, 'Code', false)
// let task3 = new Todo(3, 'Sleep', true)

// task1.id = 1
// task1.name = 'Code'
// task1.isCompleted = false

// let task2 = new Todo()

// task2.id = 2
// task2.name = 'Eat'
// task2.isCompleted = true


// console.log(task1);
// console.log(task3);