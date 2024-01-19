import { Link, Route, Routes } from 'react-router-dom'
import s from './Modal.module.css'
import Button from '../../UI/Button'
import FormElem from '../FormElem'
import xMark from '../../icons/xmark-solid.svg'

function Modal({active, setActive}){
    return(
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
                <img className={s.xmark_img}onClick={() => setActive(false)} src={xMark}/>
                <Routes>
                    <Route path='/login' element={
                        <FormElem
                        title= 'Авторизация'
                        link = '/registration'
                        button= {{submit: 'Авторизация', redirect: 'Регистрация'}}
                        type = 'login'
                       input ={{email: 'Почта', password: 'Пароль'}}
                        />
                    }/>
                    <Route path='/registration' element={
                        <FormElem
                            title='Регистрация'
                            link='/login'
                            button={{ submit: 'Зарегистрироваться', redirect: 'Авторизация' }}
                            type = 'reg'
                            input={{ email: 'Почта', password: 'Пароль', secondPassword: 'Повторить пароль' }}
                        />
                        
                      
                    }/>
                    <Route path='/reset' element={
                        <FormElem
                            title='Вспомнить пароль'
                            link='/login'
                            button={{ submit: 'Сбросить пароль', redirect: 'Авторизация' }}
                            type='reset'
                            input={{ email: 'Почта', password: 'Пароль', secondPassword: 'Повторить пароль' }}
                        />
                        } />
                </Routes>
            </div>
        </div>
    )
}


export default Modal