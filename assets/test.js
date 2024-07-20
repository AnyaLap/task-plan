//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11 и вызовите ее.(все данные которые хранятся в local storage вы можете увидеть в console storage)

function makeOne() {
    localStorage.setItem('games', 11);
  }
  makeOne();

  //Создайте функцию makeFive, создайте в ней переменную key, в которую поместите строковое значение 'item', добавьте в Local Storage значение null, а ключ заберите из переменной key и вызовите функцию.

  function makeFive() {
    const key = 'item';
    localStorage.setItem(`${key}`, null);
  }
  makeFive();

  //Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Для преобразования объекта в строку используйте метод JSON.stringify()

  function makeSix() {
    const obj = { name: "Алиса", age: 30 };
    const jsonObj = JSON.stringify(obj);
    localStorage.setItem('objectSix', `${jsonObj}`);
  }
  makeSix();

  //Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [{ name: "Алиса", age: 30 },{ name: "Филин", age: 35 },{ name: "Кот", age: 40 }]. Вызовите функцию Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

  function makeEleven() {
    const arr = [
  { name: "Алиса", age: 30 },
  { name: "Филин", age: 35 },
  { name: "Кот", age: 40 }
  ];
    const jsonObj = JSON.stringify(arr);
    localStorage.setItem('arrayEleven', `${jsonObj}`);
  }
  makeEleven();

  //Вам нужно будет создать две функции: addLocalStorageEleven и renderLocalStorage.Функция addLocalStorageEleven должна записать в localStorage arr = [{ name: "Алиса", age: 30 },{ name: "Филин", age: 35 },{ name: "Кот", age: 40 }] под ключом arrTwelve.После чего создаем вторую функциию renderLocalStorage.Она должна находить span c классом practicum12, который чуть ниже задания, и в него с помощью метода TextContent должно записываться имя пользователя из localStorage name первого пользователя из массива .Вызываем функцию addLocalStorageEleven renderLocalStorage и нажимаем кнопку Проверить.

  function addLocalStorageEleven(){
    const arr = [
    { name: "Алиса", age: 30 },
    { name: "Филин", age: 35 },
    { name: "Кот", age: 40 }
    ];
    localStorage.setItem('arrTwelve',JSON.stringify(arr));
  }
  function renderLocalStorage(){
      const arr = JSON.parse(localStorage.getItem('arrTwelve'));
      const span = document.querySelector('.practicum12');
      span.textContent =  arr[0].name;
  }
  addLocalStorageEleven();
  renderLocalStorage();

//Функция addLocalStorage записывает массив в localStorage под ключом arrLocal.Ваша задача создать функцию showTen, которая получит из Local Storage сохраннённый массив.Найти элемент с классом practicum13 и записать в него все элементы из массива через запятую.Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для преобразования массива в нужную строку используйте метод join().

function  addLocalStorage() {
	localStorage.setItem('arrLocal',JSON.stringify(["яблоко","банан","апельсин"]))
}

function showTen(){
      const arr = JSON.parse(localStorage.getItem('arrLocal'));
      const span = document.querySelector('.practicum13');
      span.textContent =  ["яблоко","банан","апельсин"].join(', ');
}
addLocalStorage();
showTen();

//У вас есть функция addLocalStorage, которая записывает в localStorage массив. Нужно создать функцияю calcArr, которая будет получать массив из localStorage. Получить сумму элементов массива и записать его в тег span c классом practicum14.Подсказка: для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.
function addLocalStorage (){
	localStorage.setItem("arrLocal",JSON.stringify([1,2,3,4,5]));
}
function calcArr(){
  const arr = JSON.parse(localStorage.getItem('arrLocal'));
  let sum = 0;
  arr.forEach(item =>{
	sum +=item
  });
  const span = document.querySelector('.practicum14');
  span.textContent = sum;
}
addLocalStorage();
calcArr();

//У вас есть функция addLocalStorage, которая записывает обьект в Local Storage под ключом objLoсal Вам нужно получить этот обьект и вывести строку в тег span с классом practicum15 а таком формате:name:Cat; age:20; work:ItGirls Не забываем про методы parse и stringify, для преобразования обьекта в нужную строчку используем цикл for in.
function addLocalStorageSet() {
    localStorage.setItem(
      "objLoсal",
      JSON.stringify({ name: "Cat", age: 20, work: "ItGirls" })
    );
  }
  function renderUser() {
      const obj = JSON.parse(localStorage.getItem("objLoсal"));
      let str = "";
      for (let key in obj) {
      str += `${key}: ${obj[key]};`;
  }
      const span = document.querySelector('.practicum15');
      span.textContent =  str;
  }
  addLocalStorageSet();
  renderUser();

//У вас есть функция addLocalStorageSixteen, которая запиcывает в localStorage обьект под ключом objLocal. В функции renderString вам нужно в переменной obj получить обьект из localStorage.Найти тег span по классу practicum16 и поместить туда такую строку 'Город Лондон имеет население 8900000 человек' Лондон и 8900000 должны подставляться из обьекта с Local Storage как переменные в строку. Подсказка: Для склеивания строки лучше всего использоваьть шаблонные строки.
function addLocalStorageSixteen() {
    localStorage.setItem(
      "objLocal",
      JSON.stringify({
        city: "Лондон",
        country: "Великобритания",
        population: 8900000,
        language: "английский",
      })
    );
  }
  
  function renderString (){
  const obj = JSON.parse(localStorage.getItem("objLoсal"));
  const str = `Город ${obj.city} имеет население ${obj.population} человек`;
  }
  const span = document.querySelector('.practicum16');
  span.textContent =  str;
  addLocalStorageSixteen();
  renderString();

  //У вас есть функция addLocalStorageSixteen, которая запиcывает в localStorage обьект под ключом objLocal.В функции renderString вам нужно в переменной obj получить обьект из localStorage.Найти тег span по классу practicum16 и поместить туда такую строку 'Город Лондон имеет население 8900000 человек'Лондон и 8900000 должны подставляться из обьекта с Local Storage как переменные в строку.Подсказка: Для склеивания строки лучше всего использоваьть шаблонные строки.

  function addLocalStorageSixteen() {
    localStorage.setItem(
      "objLocal",
      JSON.stringify({
        city: "Лондон",
        country: "Великобритания",
        population: 8900000,
        language: "английский",
      })
    );
  }
  function renderString (){
    const obj = JSON.parse(localStorage.getItem("objLocal"));
    document.querySelector(
      ".practicum16"
    ).textContent = `В ${obj.city} живёт ${obj.population} человек`;
  }
  addLocalStorageSixteen();
  renderString();

//У вас есть две функции: createUser, в которой вы должны создать обьект любого пользователя и в нем обязательно должны быть поля: nameUser,ageUser, workUser, emailUser, phoneUser.Этот объект вы должны записать в localStorage под ключом objLocalUser.Поля не должны оставаться пустыми, их нужно заполнить рандомной информацией.И функция renderCardUser, в ней вы должны получить обьект этого пользователя из localStorage.После чего найти div с классом practicum17 и положить туда с помощью метода innerHTML шаблонную строку.Шаблонная строка должна содержать в себе верстку, где userName является заголовком первого порядка, а остальные данные должны быть обернуты в тег <p></p>.

function createUser(){
  const objUser = { nameUser: "Cat",
               ageUser: 30,
               workUser: "itGirls",
               emailUser: "catEmail@gamil.com",
               phoneUser: "+7946138520",
              };
   localStorage.setItem('objLocalUser', JSON.stringify(objUser))
}
function renderCardUser(){
  const obj = JSON.parse(localStorage.getItem('objLocalUser'))
  document.querySelector('.practicum17').innerHTML =  
   `<h1>${obj.nameUser}</h1>
	<p>Возраст:${obj.ageUser}</p>
	<p>Место работы:${obj.workUser}</p>
	<p>Почта:${obj.emailUser}</p>
	<p>Номер телефона:${obj.phoneUser}</p>`
};
createUser();
renderCardUser();

//Написана функция addToNumbers, которая находит инпут на странице и забирает с него то, что ввел пользователь.Эти данные она округляет до целого числа с помощью parseInt и записывает в переменную number.Если данные не были введены, то функция не сработает, для этого там стоит одно из условий.Для вас написано условие, которое проверяет, есть ли в localStorage массив с числами под ключом task19 или нет.В переменной arr записывается результат поиска этого массива.Ваша задача написать условие: если этого массива нет, то создать его, положить туда число, что ввел пользователь и записать в localStorage под ключом task19.Если этот массив там есть, то нужно обратиться к нему и записать туда новое число, и этот измененный массив с новым числом записать в localStorage.После того как напишете код, введите в input число и нажмите кнопку проверить.

function addToNumbers() {
  const numberInput = document.getElementById("numberInput");
  const number = parseInt(numberInput.value);
  if (number) {
    const arr = JSON.parse(localStorage.getItem("task19"));
    if (arr) {
      arr.push(number);
      localStorage.setItem("task19", JSON.stringify(arr));
  } else {
      const arr = [];
      arr.push(number);
      localStorage.setItem("task19", JSON.stringify(arr));
    }
    numberInput.value = "";
  }
}
addToNumbers();

//Создайте функцию removeLastElement, которая получает массив из localStorage под ключом task19 и записывает его в переменную После получения массива функция должна удалять последний элемент массива и возвращать обновленный массив в localStorage под тем же ключом Важно предусмотреть условия, если в массиве больше нет элементов и он пуст, функция не должна сработать, для удаления используйте метод pop.
function removeLastElement() {
  const arr = JSON.parse(localStorage.getItem("task19"))
  if (arr.length === 0) { //пишем условие, которое проверяет есть ли в массиве элементы.
    console.log('массив пуст')
  } else {
    arr.pop()
  }
  localStorage.setItem('task19',JSON.stringify(arr));
}
removeLastElement();

//У вас есть функция addToCart, она должна:- Забрать данные из localStorage и записать их в переменную arr под ключом cartItems.- Если в localStorage не окажется такого ключа, то нужно вывести в консоль сообщение о том, что такой переменной не существует и остановить функцию.-После чего нужно найти инпут и также написать условие, если на момент выполнения функции input будет пустым, то вывести в консоль фразу о том что нужно заполнить input и остановить функцию.- Если все хорошо и все условия соблюдены, то нужно записать те данные, которые ввел пользователь в инпуты нашего массив arr.- Обновленный массив записать в localStorage под тем же ключом.Порядок действий проверки задания:1.Написать рабочую функцию.2.Заполнить input.3.Нажать кнопку 'проверить(сохранить)'.Задание будет считаться выполненым, если не сработало ни одно условие, а в массив записались данные из инпута.Подсказки :-добавлять элемент нужно через метод push.- return останавливает функцию.

function addToCart(){
	const arr = JSON.parse(localStorage.getItem('cartItems'))
	if(!arr){
		console.log('в localStorage такого массива нету.')
		return
	}
	const input = document.querySelector('#task21')
	if(input.value.trim() === ''){
		console.log('введите значение в input')
		return
	}
	arr.push(input.value)
	localStorage.setItem('cartItems',JSON.stringify(arr))
}
addToCart();

//У нас есть функция removeToCart, она должна:-Получать данные из LocalStorage по ключу 'task22'-Останавливать свою работу, если данных нет по этому ключу.-После проверки данных, функция должна находить selector по id и забирать его значение.-Необходимо дописать условие, что если пользователь не выбрал нужный индекс в селекторе, то функцию также нужно остановить.-Дальше функция с помощью метода filter удаляет элемент согласно выбранному index в селекторе.-После она должна записать новый масссив под тем же ключом в localStorage.

function removeToCart() {
  const arr = JSON.parse(localStorage.getItem("task22"));
  if (!arr) {
    console.log("такого массива не существует.");
    return;
  }
  const valueId = document.querySelector("#task22").value;
  if (valueId === "") {
    console.log("не выбран index");
    return;
  }
  const newArr = arr.filter((item, index) => index !== +valueId);
  localStorage.setItem("task22", JSON.stringify(newArr));
}
removeToCart();

//У нас есть функция addNewUserLocalStorage, она должна:-Находить форму с помощью id task23 и записать в переменную myForm-Забрать из localStorage массив и записать его в переменную arr- Воспользоваться классом myForm и получить эту форму-Создать пустой обьект user и с помощью цикла for of перебрать объект, который мы получили от класса FormData-Внутри цикла написать условие, которое будет заканчивать цикл, если хотя бы одно из полей формы будет не заполнено и выводить в консоль сообщение об этом. Если мы зашли в это условие, функция также должна прекращать свою работу.- Полученный обьект добавить в конец массива arr и записать arr в localStorage под ключом 'task23'.

addNewUserLocalStorage()
function addNewUserLocalStorage() {
  const myForm = document.querySelector("#task23");
  const arr = JSON.parse(localStorage.getItem("task23"));
  const formData = new FormData(myForm);
  const user = {};
  for (let [name, value] of formData) {
    if (value === "") {
      console.log("не все поля заполнены");
      return;
    }
    user[name] = value;
  }
  arr.push(user);
  localStorage.setItem("task23", JSON.stringify(arr));
}
addNewUserLocalStorage();

//Создайте функцию clearArr, которая очистит весь массив task23 в Local Storage.

function  clearArr(){
  localStorage.setItem("task23", JSON.stringify([]));
}
 clearArr();










