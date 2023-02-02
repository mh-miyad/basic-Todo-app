// ---------------------------------
//  Time Function Start here
// ---------------------------------

const cDay = document.getElementById("day");
const cDate = document.getElementById("date");
const cYear = document.getElementById("year");

function timeForTodo() {
  const myInterval = setInterval(() => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let d = new Date();

    cDay.innerHTML = weekday[d.getDay()];
    cDate.innerHTML = `${d.getDate()} ${month[d.getMonth()]}`;
    cYear.innerHTML = d.getFullYear();
  }, 1000);
}
timeForTodo();
// ---------------------------------
//  Time Function  End Here
// ---------------------------------
const todoInput = document.getElementById("list-text-item");
const todoInputButton = document.getElementById("add-list-btn");
const todoList = document.getElementById("todo-list");

todoInputButton.addEventListener("click", function (e) {
  e.preventDefault();
  const listDiv = document.createElement("div");
  // const itemDiv = document.createElement('div');
  const completeItem = document.createElement("button");
  const deleteItem = document.createElement("button");
  const listItem = document.createElement("li");
  completeItem.classList.add("bi", "bi-check-lg");
  deleteItem.classList.add("bi", "bi-trash");
  if (!todoInput.value) return;

  listItem.innerHTML = ` ${todoInput.value}`;

  listDiv.classList.add("list-div");
  todoList.appendChild(listDiv);
  listDiv.appendChild(listItem);
  listDiv.appendChild(completeItem);
  listDiv.appendChild(deleteItem);
  listItem.classList.add(
    "li-item",
    "text-2xl",
    "capitalize",
    "text-gray-600",
    "my-3"
  );
  todoInput.value = "";
  completeItem.addEventListener("click", function () {
    listItem.classList.toggle("line-th");
  });

  deleteItem.addEventListener("click", function () {
    listItem.remove();
    listDiv.remove();
  });
});
