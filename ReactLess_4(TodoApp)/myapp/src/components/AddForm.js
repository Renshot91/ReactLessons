

function AddFrom(props){

    const {addTodo} = props

    function inputHandle(e){
        if (e.key === 'Enter' && e.target.value !== ''){
            addTodo(e.target.value)
        }
    }

    return(
        <div className="input_elem">
            <input onKeyDown={inputHandle}/>
        </div>
    )
}

export default AddFrom