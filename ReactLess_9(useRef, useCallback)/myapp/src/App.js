import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Content from './components/Content';



function App() {
  // useRef позволяет не пересоздавать выражение (переменную) после
  // обновление компонента
  // useRef также далее заменяет querySelector (<ul ref={ulRef}>)
  let ulRef = useRef()
  let numbersRef = useRef()

  // Для передачи рефа как пропа необходимо использовать forwardRef (см компонент Content)
  let hRef = useRef()

  const [numbers, setNumbers] = useState([1,2,3,4,5])
  numbersRef.current = numbers

  // useCallback - это хук, который позволит не пересоздавать 
  // функцию в момент обновления компонента. 
  // useCallback ссылаться на зависиомтси, также как и useEffect

  const handle = useCallback(() => {
    console.log('scroll!!!!!')
    // всегда будет [1,2,3,4,5]
    console.log(numbers)
    // numbersRef всегда будет передавать актуальное значение стейта внутри callback'a
    // console.log(numbersRef.current)
  }, [])

  useEffect(() => {
    ulRef.current.addEventListener('scroll', handle)
  },[])

  const stopScroll = () => {
    ulRef.current.removeEventListener('scroll', handle)
  }

  const refHandle = () => {
    console.log(hRef.current.innerText)
  }

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map(elem => 
          <li key={elem}>{elem}</li>
        )}
      </ul>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>Добавить новый элемент</button>
      <button onClick={stopScroll}>Остановить событие</button>
      <button onClick={refHandle}>Получить в консоль ссылку на узел</button>
      <Content ref={hRef}/>
    </div>
  );
}

export default App;
