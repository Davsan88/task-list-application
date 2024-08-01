// Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskButton = document.getElementById('addTaskButton');

function addTask() {
    const taskText = taskInput.value.trim(); // Get the value and trim any whitespace
    console.log("Task Text: ", taskText); // Debugging: Log the task text


    // Check if the Input is Not Empty
    if(taskText !== '') {
         // Proceed with creating the new task
        const newTask = document.createElement('li'); // Create a new <li> element
        newTask.textContent = taskText; // Set the text content to the input value
        newTask.classList.add('task'); // Add the 'task' class for styling

        console.log("New Task:", newTask); // Debugging: Log the new task element

        taskList.appendChild(newTask); // Append the new task to the task list

        taskInput.value = ''; // Clear the input field
    }
};



// Add an event listener to the button to call addTask when clicked
taskButton.addEventListener('click', addTask);

taskList.addEventListener('click', removeTask)