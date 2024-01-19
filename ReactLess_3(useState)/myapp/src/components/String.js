import { useState } from "react"




function String(){

    const [theme, setTheme] = useState('light')

    // Сделайте кнопку, которая будет меня состояние строковоо типа на dark

    function changeTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const light = {
        backgroundColor: 'gray',
        color: 'black',
    }

    const dark = {
        backgroundColor: 'darkblue',
        color: 'white',
    }

    const style = (theme === 'light') ? light : dark

    return(
        <div style={style}>
            <h1>Theme</h1>
            <h2>{theme}</h2>
            <div>
                <button onClick={changeTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default String