// Хуки - это функции, которые позволяют осуществить лоигику работы над жизненным циклом компонента
// useState - это хук, который предназначен для формирования динамики внутри компонента
// useState позволяет принудительно ОБНОВИТЬ компонент 

import { useState } from "react";

function Counter() {

  // useState возвращает массив с 2 элементами
  // где первый state, второй setState

  // const [state, setState] = useState(defaultState)

  // state - выражение (переменная, состояние), которое передает значение состояния 
  // setState - функция, которая заставляет компонент перейти в этам ОБНОВЛЕНИЯ
  // Функция передавая в качестве аргумента значение перезаписывает занчение стейта

  // Примечание: 
  // state ни в коем случае нельзя переопределять. 
  // state меняется (ПЕРЕЗАПИСЫВАЕТСЯ) только через функцию setState

  const [count, setCount] = useState(0)

  // Задание 1. 
  // Реализуйте кнопку, которая будет декреметнировать значение стейта на 1 единицу

  // Задание 2. 
  // Реализуйте кнопку, которая будет обнулять занчение стейта

  // Задание 3. 
  // Реализуйте кнопку, которая будет запускать модальное окно prompt, и перезаписывать значение стейте на результат работы модального окна


  function promptCount(){
    let promptResult = +prompt()
    if (isNaN(promptResult)){
      alert('указано не число')
    } else {
      setCount(promptResult)
    }
  }

  return (
    <div>
      <h1>Counter</h1>  
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Инкремент</button>
      <button onClick={() => setCount(count - 1)}>Декремент</button>
      <button onClick={() => setCount(0)}>Обнулить</button>
      <button onClick={promptCount}>Применить новое значение</button>
    </div>
  );
}

export default Counter;
