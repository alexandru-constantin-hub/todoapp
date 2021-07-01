function ToDo({index, text, status, completed, completeTodo}) {
    
  
    return (
    <>
        <li status={status} completed={completed}>
          {index} {text}
          <button onClick={()=>completeTodo(index)}>Complete</button>
  
        </li>
    </>
    );
};
  
  export default ToDo;