const localTaskName = localStorage.getItem('taskName');

let taskName = JSON.parse(localTaskName) || [];

const category = document.getElementById('category')

function addTask() {
    const input = document.getElementById('input');
    const taskName = input.value;
    if (taskName !== '') {
        const listItem = document.createElement('li');
        const taskNameSpan = document.createElement('span');
        taskNameSpan.textContent = taskName;
        taskNameSpan.classList.add('task-name');
        listItem.appendChild(taskNameSpan);

        //                             Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox')
        checkbox.addEventListener('click', function () {
            if (checkbox.checked) {
                listItem.classList.add('completed');
            }
        });
        listItem.appendChild(checkbox);

        //                              Delete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.classList.add('delete-btn')  //add class for CSS
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        //                               Edit
        const editButton = document.createElement('button');
        editButton.textContent = '🖉';
        editButton.classList.add('edit-btn')
        editButton.addEventListener('click', function () {
            const newTaskName = prompt('Edit task:', taskName);
            if (newTaskName !== null && newTaskName !== '') {
                listItem.querySelector('span.task-name').textContent = newTaskName;
            }
        });

        listItem.appendChild(editButton);

        document.getElementById('list').appendChild(listItem);
        input.value = '';
    }
    save();

}

document.getElementById('input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


/*   


                   Save button


const saveButton = document.createElement ('button');
 saveButton.addEventListener('click', function () => {

 });


function save() {
    localStorage.setItem ('taskName', JSON.stringify(taskName))
};



*/




