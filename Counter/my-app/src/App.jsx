import React from 'react'
import './App.css'
import Counter from './Counter'; 

function App() {
  return (
    <div className="App">
      <h2>Счетчик</h2>
      <h4>Доступные функции:</h4>
      <ul>
        <li>Убавить 1</li>
        <li>Прибавить 1</li>
        <li>Обнулить</li>
      </ul>
      <Counter />
    </div>
  );
}

export default App;