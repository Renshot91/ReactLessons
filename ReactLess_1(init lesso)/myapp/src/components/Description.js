

function Description(){

    let a = 11
    let result = Math.round(Math.pow(3 + a * 10 / 10.5, 2))
    let random_num = Math.ceil(Math.random() * 100)
    let string = 'product_wrapper'
  
    return(
      <>
        <p className={(a === 10) ? string : 'empty'}>Цена: 200$</p>
        <p className={string}>Рейтинг: 5.5</p>
        <p>Result Math: {result}</p>
        <p>Random num: {random_num}</p>

        {/* Применение тернарного оператор */}
        {(a > 10) ? <h1>a больше 10</h1> : <button>а меньше или равен 10</button>}

        {/* Применение логического оператора */}
        { a > 10 && <h1>a больше 10</h1>}
   
      </>
    )
  }

export default Description
