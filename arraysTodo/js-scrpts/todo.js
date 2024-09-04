const todoList = [];

function addTodo () {
   const inputElement = document.querySelector('.get-input'); 
   const valueInInput = inputElement.value;
   todoList.push(valueInInput);
   console.log(todoList);

   // reset the input to empty each time the add button is clicked
   inputElement.value = '';
   
}