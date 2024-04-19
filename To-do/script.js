const localTasks = localStorage.getItem('tasks');
let tasks = JSON.parse(localTasks) || [];

function addTask() {
    const input = document.getElementById('input');
    const taskName = input.value.trim();
    const category = document.getElementById('category').value;
    if (taskName !== '') {
        const task = { name: taskName, category: category, completed: false };
        tasks.push(task);
        save();
        if (category === getCurrentCategory()) {
            renderTask(task);
        }
        input.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function renderTask(task) {
    const currentCategory = getCurrentCategory();
    if (task.category === currentCategory) {
        const listItem = document.createElement('li');
        const taskNameSpan = document.createElement('span');
        taskNameSpan.textContent = task.name;
        taskNameSpan.classList.add('task-name');
        listItem.appendChild(taskNameSpan);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () {
            task.completed = checkbox.checked;
            if (checkbox.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
            save();
        });
        listItem.appendChild(checkbox);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            listItem.remove();
            tasks = tasks.filter(t => t !== task);
            save();
        });
        listItem.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.textContent = '🖉';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', function () {
            const newTaskName = prompt('Edit task:', task.name);
            if (newTaskName !== null && newTaskName.trim() !== '') {
                taskNameSpan.textContent = newTaskName;
                task.name = newTaskName;
                save();
            }
        });
        listItem.appendChild(editButton);

        if (task.completed) {
            listItem.classList.add('completed');
        }

        document.getElementById('list').appendChild(listItem);
    }
}

function getCurrentCategory() {
    return document.getElementById('category').value;
}

function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTaskList() {
    const list = document.getElementById('list');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

window.addEventListener('load', function () {
    tasks.forEach(renderTask);
});

document.getElementById('category').addEventListener('change', function () {
    const currentCategory = getCurrentCategory();
    clearTaskList();
    tasks.forEach(task => {
        if (task.category === currentCategory) {
            renderTask(task);
        }
    });
});

document.getElementById('save-btn').addEventListener('click', save);
