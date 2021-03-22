
export default function TodoItems({ todoList, removeTodo, finishTodo }) {
  return (
    <div>
      <ul>
        {todoList.map((name, index) => {
          return (
            <li
              key={index}
              style={{ textDecoration: name.isCompleted ? 'line-through' : '' }}
            >
              {name.item}
              <span className='todo-btn'>
                <button className='btn btn-outline-primary' onClick={() => removeTodo(index)}>X</button>
                <button className='btn btn-outline-primary' onClick={() => finishTodo(index)}>Finish</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
