// https://react-hook-form.com/docs/useform/register 
import {useForm} from 'react-hook-form'

function Form(){

    let {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch
    } = useForm()
    
    // Режим работы
    // } = useForm({mode: 'onBlur'})

    let onSubmit = (data) => {
        console.log(data)
        reset()
    }

    // Значение любого указанного инпут поля
    // console.log(watch('last_name'))

    let first_name_input = register('first_name', {
        required: 'Имя обязательно к заполнению',
        minLength: {
            value: 3,
            message: 'Минимальня длина имени - 3 символа'
        },
        pattern: {
            value: /^[A-ZА-Я]/g,
            message: 'Имя должно начинаться с заглавной буквы'
        }
    })
    let last_name_input = register('last_name', {
        required: 'Фамилия должна быть заполнена',
        maxLength: {
            value: 5,
            message: 'Длина фамилии не может быть более 5 символов'
        }
    })

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label> Имя:
                    <input className={errors.first_name && 'inp_error'} {...first_name_input}/>
                </label>
                {errors.first_name && <p style={{color: 'red'}}>{errors.first_name.message}</p>}
            </div>
            <div>
                <label> Фамилия:
                    <input className={errors.last_name && 'inp_error'} {...last_name_input}/>
                </label>
                {errors.last_name && <p style={{color: 'red'}}>{errors.last_name.message}</p>}
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}

export default Form