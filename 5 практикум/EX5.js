function createProtectedResource(password) {
  let currentPassword = password;
  return {
    access(inputPassword) {
      return inputPassword === currentPassword 
        ? "Доступ разрешен" 
        : "Доступ запрещен";
    },
    changePassword(newPassword, oldPassword) {
      if (oldPassword === currentPassword) {
        currentPassword = newPassword;
      } else {
        return "Неверный текущий пароль";
      }
    }
  };
}
const resource = createProtectedResource('mySecret');
console.log(resource.access('wrongPassword')); 
console.log(resource.access('mySecret'));   

resource.changePassword('newSecret', 'mySecret');

console.log(resource.access('newSecret'));      
console.log(resource.access('mySecret'));