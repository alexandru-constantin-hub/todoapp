import React from "react";

function TodoForm({addTodo}, /* status,  */) {
    const [value, setValue] = React.useState("");
    //const [statusTask, setStatusTask] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
        //status(statusTask);
        //setStatusTask("");
      };

 
  
    return (
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <select /*onChange={e => setStatusTask(e.target.value)} */>
            <option value="IU">Important and urgent</option>
            <option value="NIU">Non important and urgent</option>
            <option value="INU">Important and non urgent</option>
            <option value="NINU">Non important and non urgent</option>
        </select>
        <button type="submit">Add</button>
      </form>
      
        
    );
};
  
  export default TodoForm;