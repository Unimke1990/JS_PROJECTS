const todoList = [];
   // {name: 'given',
   //  dueDate: '2024-09-06'},

   //  {name: 'agim',
   //  dueDate:'2024-09-06'}
   // ];

renderTodoList();

function renderTodoList() {
   let todoListHTML = '';

   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const name = todoObject.name;
      const dueDate = todoObject.dueDate;

      // generate the html
      const html = 
      `<div>${name}</div>
       <div>${dueDate}</div>
       <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList()
       " class="delete-todo-button">Delete</button>
      `;
      todoListHTML+= html;
   }
   // console.log(todoListHTML);
   document.querySelector('.js-todo-list')
   .innerHTML = todoListHTML
   }

function addTodo () {
   const inputElement = document.querySelector('.get-input'); 
   const valueInput = inputElement.value;
   const dateInputElement = document.querySelector('.js-due-date');
   const dueDateInput = dateInputElement.value;


   todoList.push({
      name: valueInput,
      dueDate: dueDateInput
   });
   
   // console.log(todoList);
   // reset the input to empty each time the add button is clicked
   inputElement.value = '';

   renderTodoList();
}













// const todoList = [];

// const todoList = ['given', 'agim', 'unimke', 'peter'];

// function addTodo () {

//    let todoListHTML = '';

//    const inputElement = document.querySelector('.get-input'); 
//    const valueInInput = inputElement.value;
//    todoList.push(valueInInput);
//    for (let i = 0; i < todoList.length; i++) {
//       const todo = todoList[i];
//       const html = `<p>${todo}</p>`;
//       todoListHTML+= html;
//    }
//    document.querySelector('.js-todo-list')
//    .innerHTML = todoListHTML
   
//    inputElement.value = '';
// }



// array accumulation/returning double values of an array
// const myArray = [1, 2,3,4];
// let all = [];

// for (i = 0; i < myArray.length; i++) {
//    all.push(myArray[i] * 2)
// }
// console.log(all);
