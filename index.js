function addTask() {
    const taskInput = document.getElementById('taskInput'); // Retrieve the value from the input field
    const taskText = taskInput.value.trim(); // Get the value and trim any whitespace
    // Check if the Input is Not Empty
    if(taskText !== '') {
         // Proceed with creating the new task
        const listElement = document.createElement('li'); // Create a new <li> element
        listElement.textContent = taskText; // Set the text content to the input value
        const taskList = document.getElementById('taskList');
        taskList.append('listElement'); // Append the new task to the task list
    }
     
};