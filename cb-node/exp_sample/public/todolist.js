$(function () {
  let newTodoBox = $("#newTodo");
  let addTodoBtn = $("#addTodoBtn");
  let todoList = $("#todoList");

  addTodoBtn.click(() => {
    let newTodo = newTodoBox.val();
    console.log(newTodo);
    $.post("/todos", { task: newTodo }, (data) => {
        todoList.empty();
        console.log(data)
        for(todo of data){
            todoList.append("<li>"+todo.task+"</li>")
        }
      console.log(data);
    });
  });
});
