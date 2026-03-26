const user = {
    name: 'Иван',
    age: 30,
    city: 'Москва'
};

const { name, age, city } = user;
console.log("Задание 1:")
console.log(name); 
console.log(age); 
console.log(city);

console.log("Задание 2:")

const book = {
    title: 'Война и мир',
    author: "Лев Николаевич Толстой",
    year: 666
};

const { title: bookTitle, author: bookAuthor , year: bookYear} = user;

console.log(bookTitle); 
console.log(bookAuthor); 

console.log("Задание 3:")

const settings  = {
    theme : 'Иван',
    layout: true
};

const { theme, layout, language = "en" } = settings;

console.log(theme); 
console.log(layout);
console.log(language);