const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

//const taskData = []; //store all tasks along with their details and associated data including title, due date, description
//This storage enable you to keep track of tasks, display them and save them to localStorage
const taskData = JSON.parse(localStorage.getItem("data")) || []; //retrieve existing tasks from localStorage or initialize as an empty array if none exist

//FCC example
// const removeSpecialChars = (val) => {
//   return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
// }

const removeSpecialChars = (str) => {
  const regex = /[^A-Za-z0-9 ]+/g;
  return str.replace(regex, "");
};

let currentTask = {}; //state tracker when editing or updating a task

//this function will handle both adding a new task and updating an existing task
const addOrUpdateTask = () => {
  if (!titleInput.value.trim()) {
    //Here we are checking if the title input is empty or contains only whitespace
    alert("Please provide a title");
    return;
  }
  //identify if task in array is existign or not, use findIndex
  //findIndex finds and returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns -1.
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: removeSpecialChars(titleInput.value),
    date: dateInput.value,
    description: removeSpecialChars(descriptionInput.value),
  };
  console.log(taskObj);
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj); //add new task to the beginning of the array
  } else {
    taskData[dataArrIndex] = taskObj; //update existing task at the found index with the new task object
  }
  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer();
  reset();
};

const updateTaskContainer = () => {
  //forEach method executes a provided function once for each array element.
  //here we are using destructuring to extract id, title, date, description from each task object in taskData array
  tasksContainer.innerHTML = ""; //clear existing tasks before re-rendering
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
    <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
    </div> `;
  });
};

const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
};

const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;
  addOrUpdateTaskBtn.innerText = "Update Task";
  taskForm.classList.toggle("hidden");
};

const reset = () => {
  addOrUpdateTaskBtn.innerText = "Add Task"; //reset button text to "Add Task" when form is closed or reset
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {}; //reset currentTask to an empty object, so any new task is created, the object is fresh and not carrying over any previous task data
};

// Initial Render of tasks if any exist in localStorage
if (taskData.length) {
  updateTaskContainer();
}

//el.classList.add("class-name") - adds a class to an element
//el.classList.remove("class-name") - removes a class from an element
//el.classList.contains("class-name") - checks if an element has a specific class
//el.classList.toggle("class-name") - toggles a class on or off for an element

// Event Listeners
openTaskFormBtn.addEventListener("click", () => {
  taskForm.classList.toggle("hidden");
});
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;
  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
    confirmCloseDialog.close();
  }
});
cancelBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
});
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});
