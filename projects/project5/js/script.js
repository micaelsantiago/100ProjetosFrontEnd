const cloneTaskModel = () => {
    const taskModel = document.querySelector('.models .todo__listItem');
    const taskModelClone = taskModel.cloneNode(true);
    return taskModelClone;
}

const setTaskContent = (task, value) => {
    const textTask = task.querySelector('.todo__listText');
    textTask.textContent = value;
}

const setTaskOnScreen = () => {
    const input = document.querySelector('.todo__searchInput');
    const value = input.value.trim();
    if (value !== '') {
        const task = cloneTaskModel();
        setTaskContent(task, value);
        document.querySelector('.todo__list').appendChild(task);
        input.value = '';
        addDoneTaskListener();
    }
}

const doneTaskListener = (item) => {
    const input = item.querySelector('.input');
    const text = item.querySelector('.todo__listText');
    input.addEventListener('change', (event) => {
        text.style.textDecoration = event.target.checked ? 'line-through' : 'none';
    });
}

const addDoneTaskListener = () => {
    document.querySelectorAll('.todo__listItem').forEach(item => doneTaskListener(item));
}

document.querySelector('.todo__searchInput').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') setTaskOnScreen();
});

document.querySelector('.todo__searchIcon').addEventListener('click', setTaskOnScreen);
