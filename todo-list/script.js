let inpNewTask = $("#inpNewTask");
let btnAdd = $("#btnAdd");
let btnSort = $("#btnSort");
let btnReset = $("#btnReset");
let ulTasks = $("#ulTasks");
let btnCleanup = $("#btnCleanup");

btnAdd.click(addItem);

inpNewTask.keypress((e) => {
  if (e.which == 13) addItem();
});

function addItem() {
  let listItem = $("<li>", {
    class: "list-group-item",
    text: inpNewTask.val(),
  });
  listItem.click(() => {
    listItem.toggleClass("done");
  });
  ulTasks.append(listItem);
  inpNewTask.val("");
  toggleInputButtons();
}

function toggleInputButtons() {
  btnReset.prop("disabled", inpNewTask.val() == "");
  btnAdd.prop("disabled", inpNewTask.val() == "");
  btnSort.prop("disabled", ulTasks.children().length < 1);
  btnCleanup.prop('disabled', ulTasks.children().length < 1)
}

inpNewTask.on("input", toggleInputButtons);

function clearDone() {
  $('#ulTasks .done').remove()
}
function sortTask() {
  $('#ulTasks .done').appendTo(ulTasks)
}

btnCleanup.click(clearDone);
btnReset.click(() => inpNewTask.val(""));
btnSort.click(sortTask)
