// Завдання 1

// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
//  В prototype функції-конструктора добав метод getInfo(),
//   який виводить в консоль значення полів login і email об'єкта який його викликав.

function Account({ login, email }) {
    this.login = login;
    this.email = email;
  }
  
 
  Account.prototype.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  
  
  console.log(Account.prototype.getInfo);
  
  const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
  });
  
  mango.getInfo(); 
  
  const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
  });
  
  poly.getInfo(); 
  
  
//   Завдання 2

//   Напиши клас User для створення користувача з наступними властивостями:
  
  
  
//   name — рядок
//   age — число
//   followers — число
  
  
//   Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
  

class User {
    constructor({ name, age, followers }) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }
  
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
  }
  
  
  const mango1 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  mango1.getInfo(); 
  
  const poly1 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  poly1.getInfo();
  

//   Завдання 3

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент -
//  початковий масив товарів, і записувати його у властивість items.



// Додай методи класу:



// getItems() — повертає масив поточних товарів
// addItem(item) — отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних

class Storage {
    constructor(items) {
      this.items = items;
    }
  
 
    getItems() {
      return this.items;
    }
  
 
    addItem(item) {
      this.items.push(item);
    }
  
   
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
  
 
  const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); 
  
  storage.addItem('Дроїд');
  console.table(storage.items);
  
  storage.removeItem('Пролонгер');