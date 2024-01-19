import { useState } from 'react';
import './App.css';
import Button from './UI/Button';
import Modal from './components/Modal';
import {Link} from 'react-router-dom'

function App() {

  const [active, setActive] = useState(false)

  return (
    <div>
      <Link to={'/login'}>
        <Button onClick={() => setActive(true)} text={'Авторизация / Регистрация'} color={'yellow'}/>
      </Link>
      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
