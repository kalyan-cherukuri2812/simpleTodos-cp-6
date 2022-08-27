import './index.css'

const TodoItem = props => {
  const {initialTodosDetails, updateDelete} = props
  const {title, id} = initialTodosDetails
  const deleteBtn = () => {
    updateDelete(id)
  }
  return (
    <li className="list">
      <p className="para">{title}</p>
      <button className="btn" type="button" onClick={deleteBtn}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
