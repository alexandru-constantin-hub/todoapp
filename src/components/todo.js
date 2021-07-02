import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';


function ToDo({index, text, status, completed, completeTodo}) {
    
  
    return (
    <>
        <ListItem status={status} completed={completed} >
          <ListItemText style={{ textDecoration: completed === "true" ? "line-through" : "" }}>{index} {text}</ListItemText>
            <Button onClick={()=>completeTodo(index)} variant="outline" color="primary">{completed === "true" ? "Delete":"Complete"}</Button>
        </ListItem>
    </>
    );
};
  
  export default ToDo;