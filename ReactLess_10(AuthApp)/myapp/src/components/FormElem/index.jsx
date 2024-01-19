import { Link } from "react-router-dom"
import Button from "../../UI/Button"
import Input from "../../UI/input"
import { useForm } from 'react-hook-form'
import s from './FormElem.module.css'



function FormElem(props) {
    const { title, link, button, input, type } = props
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
        watch
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <h2>{title}</h2>

                <p>{input.email}</p>
                <Input {...register('email', {
                    required: 'Почта должна быть заполнена',
                    pattern: {
                        mesage: 'Указана неверная почта',
                        value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/
                    }
                })} />
                {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}

                {type !== 'reset' &&
                    <>
                        <p>{input.password}</p>
                        <Input {...register('password', {
                            required: 'Пароль должен быть заполнен',
                            pattern: {
                                message: 'Пароль должен содержать минимум 8 букв и 1 цыфру',
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                            }
                        })} />
                    </>

                }
                {errors.password && <p className={s.warning_text}>{errors.password.message}</p>}
                {type === 'reg' &&
                    <>
                        <p>{input.secondPassword}</p>
                        <Input {...register('secondPassword', {
                            required: 'Поле должно быть заполнена',
                            validate: (value) => value === watch('password') || 'Пароли не совподают'
                        })} />

                    </>
                }
                {errors.secondPassword && <p className={s.warning_text}>{errors.secondPassword.message}</p>}
                {type === 'login' &&
                    <Link to={'/reset'}>
                        <p>Востоновить доступ</p>
                    </Link>}

                <Button text={button.submit} color={'yellow'} />
                <Link to={link}>
                    <Button text={button.redirect} color={'white'} />
                </Link>
            </form>
        </div>
    )
}
export default FormElem