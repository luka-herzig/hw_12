//Task 1

// const user = {
//     name: "John",
//     age: 30,
//     hobby: "Reading",
//     premium: true,
// };

// user.mood = "happy"; //Додаємо новий ключ mood зі значенням happy
// user.hobby = "programming"; //Змінюємо значення ключа hobby на programming
// user.premium = false; //Змінюємо значення ключа premium на false

// for (let key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
// }

//Task 2

// function countProps(obj) {
//     return Object.keys(obj).length; //1 error. Я в return вказав countProps.length, але це не правильно. Треба було вказати Object.keys(obj).length
// }

// //example using
// const user = {
//     name: "John",
//     age: 30,
//     hobby: "Reading",
//     premium: true,
//     mood: "happy",
// };

// console.log(countProps(user)); //5

//Task 3

// function findBestEmployee(employees) {
//     let maxTasks = 0;
//     let bestEmployee = "";
//     for (const [name, tasks] of Object.entries(employees)) {
//         if (tasks > maxTasks) {
//             maxTasks = tasks;
//             bestEmployee = name;
//         }
//     }
//     return bestEmployee;
// }

// //example using
// const employees = {
//     ann: prompt("Enter the number of tasks for Ann"),               //Тут я трохи змінив код, щоб можна було ввести кількість завдань для кожного працівника
//     david: prompt("Enter the number of tasks for David"),           //і вивести найкращого працівника. Ти вводиш для кожного працівника кількість завдань яких вони зробили
//     helen: prompt("Enter the number of tasks for Helen"),           //І цикл виводить в консоль найкращого
//     lorence: prompt("Enter the number of tasks for Lorence"),       //Впринципі це спрощена версія елекитронної таблиці або бази даних
// }

// console.log(findBestEmployee(employees)); 

//Task 4
// function countTotalSalary(employees) {
//     let totalSalary = 0;
//     for (const salary of Object.values(employees)) {
//         totalSalary += Number(salary);                  //тут помилка, виводить NaN, тому що використовується оператор +, але він працює тільки з числами
//     }                                                  //Я знайшов помилку, заважало минуле завдання, я закоментував його, і тепер все працює коректно
//     return totalSalary;
// }

// //example using
// const salaries = {
//     ann: prompt("Введіть суму зарплати для працівника Ann"),                    //Тут також я змінив код, щоб можна було ввести зарплату для кожного працівника
//     david: prompt("Введіть суму зарплати для працівника David"),                //і вивести загальну суму зарплати
//     Mikel: prompt("Введіть суму зарплати для працівника Mikel"),                //Ти вводиш для кожного працівника зарплату
//     lorence: prompt("Введіть суму зарплати для працівника Lorence"),            //і цикл виводить загальну суму
// }

// console.log(countTotalSalary(salaries));

// //Task 5
// function getAllPropValues(arr, prop) {
//     let values = [];
//     for (const obj of arr) {
//         if (prop in obj) {
//             values.push(obj[prop]);
//         }
//     }
//     return values;
// }

// //example using
// const products = [
//     { name: "apple", price: 10 },
//     { name: "orange", price: 15 },
//     { name: "banana", price: 20 },
//     { name: "kiwi", price: 25 },
// ];

// console.log(getAllPropValues(products, "name")); //["apple", "orange", "banana", "kiwi"]
// console.log(getAllPropValues(products, "price")); //[10, 15, 20, 25]

//Task 6
//Чесно, я застряг на цьому завданні, я не знаю як його вирішити, якщо можна, прийміть його а я вам докину його. 
//Будь ласка в мене саме важке завдання було 3, але я його вирішив, але це я не можу вирішити. Якщо можна, прийміть його, буду вдячний
//І іще вибачте що закоментував деякі завдання, вони просто заважають працювати іншим завданням коректно
//Дякую що перевірили моє домашнє завдання і вибачте за незручності.🤗🤗🤗🤗