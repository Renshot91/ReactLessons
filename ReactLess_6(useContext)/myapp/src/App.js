// Сам контекст необходимо создать используя фукнцию createContext 
// см. файл Context.js

import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { Context } from './context/Context';

function App() {

  const [string, setString] = useState('Default string')

  const reverseState = () => {
    setString(string.split('').reverse().join(''))
  }

  // В компоненте Сontent реалйзуйте кнопку, которая будет вызывать функцию reverseState

  // Provider - компонент, позволяющий передать значение в зону области контекста. 
  // Парный тег также определяет, какие компоненты должны будут получить доступ к контексту
  return (
    <Context.Provider value={{string, reverseState}}>
      <div >
        App
        <Main/>
      </div>
    </Context.Provider>
  );
}

export default App;
