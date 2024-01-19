
function AddForm({addTodo, days}) {

    const formHandler = (e) => {
        e.preventDefault()
        let form_data = new FormData(e.target)
        let data = Object.fromEntries(form_data)
        data.idDay = +data.idDay
        data.priority = +data.priority
        // console.log(data)
        addTodo(data)
    }

    return (
      <form onSubmit={formHandler}>
        <select name="idDay">
            {days.map((elem, ind) => <option value={ind + 1} key={ind}>{elem}</option>)}
        </select>

        <select name='priority'>
            <option value={0}>Важный</option>
            <option value={1}>Не важный</option>
        </select>

        <input name="title"/>

        <input type="submit"/>
      </form>
    );
  }
  
  export default AddForm;
  