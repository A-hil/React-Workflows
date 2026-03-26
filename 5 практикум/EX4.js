

function createFreezer(obj) {

  const changedFlags = {};

  return Object.keys(obj).reduce((acc, key) => {
    changedFlags[key] = false;
    acc[`get_${key}`] = () => {
      return obj[key]; 
    };
    acc[`set_${key}`] = (newValue) => {
      if (!changedFlags[key]) { 
        obj[key] = newValue;
        changedFlags[key] = true; 
        console.log(`Свойство '${key}' изменено на '${newValue}'`);
      } else {
        console.warn(`Свойство '${key}' уже было изменено и больше не может быть изменено.`);
      }
    };

    return acc;
  }, {});
}

const myObject = {
  name: "Alice",
  age: 30,
  city: "Unknown"
};

const freezer = createFreezer({ name: 'Alice' }); 

freezer.set_name("New Name");
console.log(freezer.get_name()); 

freezer.set_name("Another Name");
console.log(freezer.get_name());