//Находим необходимые элементы
const toDoInput = document.getElementById('toDoInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const toDoList = document.getElementById('toDoList');

 //Создаем пустой массив задач
 let tasks = [];

 //Создаем функцию добавления задач в список задач
 function renderTasks() {

   toDoList.innerHTML = '';

   //Условие для списка задач
   if (tasks.length === 0) {
     toDoList.innerHTML = '<div class="noTasks">Нет задач</div>';//Добавляем уведомление об отсутствии задач

     clearButton.disabled = true;//Кнопка очистки задач не активна 
   } 
    else {
     tasks.forEach((task) => {
       const listTasks = document.createElement('div');//Добавляем блок списка задач
       listTasks.classList.add('item');

       if (task.completed) {
        listTasks.classList.add('completed');
      }

       const checkbox = document.createElement('input');//Добавляем чекбокс
       checkbox.type = 'checkbox';
       checkbox.checked = task.completed;

       
   //Обработчик события при выбора чекбокса 
          checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            listTasks.classList.toggle('completed', task.completed);
          });

       const label = document.createElement('span');//Добавляем label для чекбокса
       label.textContent = task.text;

       //Добавляем все элементы в список задач в нужном порядке
       listTasks.appendChild(label);
       listTasks.appendChild(checkbox);
       toDoList.appendChild(listTasks);
     });
     clearButton.disabled = false;//Активируем кнопку очистки
   }
 }
 
 //Сохранение задач в LS
 function saveTasks() {
  localStorage.setItem('listOfTasks', JSON.stringify(tasks));
}
 // Загружаем список задач из LS при загрузке страницы
function loadTasks() {
  const storedTasks = localStorage.getItem('listOfTasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}
loadTasks();

 //Обработчик события нажатия на кнопку Добавить
 addButton.addEventListener('click', () => {
   const taskText = toDoInput.value.trim();
   if (taskText !== '') {
     tasks.push({ text: taskText, completed: false });
     toDoInput.value = '';
     renderTasks();
     saveTasks();
   }
 });

 //Обработчик события нажатия на кнопку Очистить 
 clearButton.addEventListener('click', () => {
   tasks = [];
   renderTasks();
   saveTasks();
 });
 renderTasks();//Вызываем функции





  // // Сохраняем состояние чекбокса в Local Storage
  // function saveCheck() {
  //   localStorage.setItem('checkboxState', checkbox.checked);
  // }
  // // Загружаем состояние чекбокса из Local Storage
  // function loadCheck(){
  // const storedCheck = localStorage.getItem('checkboxState');
  // if (storedCheck !== null) {
  //   checkbox.checked = JSON.parse(storedCheck);
  //   renderTasks();
  //   }
  // }
  // loadCheck();
//     // Сохраняем состояние чекбокса в Local Storage
// checkbox.addEventListener('change', () => {
//   localStorage.setItem('checkboxState', checkbox.checked);
// });

// // Загружаем состояние чекбокса из Local Storage
// window.addEventListener('load', () => {
//   const checkboxState = localStorage.getItem('checkboxState');
//   if (checkboxState !== null) {
//     checkbox.checked = JSON.parse(checkboxState);
//   }
// });
//  Обновление состояния задач при изменении чекбокса
// toDoList.addEventListener('change', (evt) => {
//   if (evt.target.type === 'checkbox') {
//     const index = Array.from(toDoList.children).indexOf(evt.target.parentElement);
//     tasks[index].completed = evt.target.checked;
//     saveTasks();
//   }
// });

