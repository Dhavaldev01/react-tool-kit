import { useState } from "react";
import { useEffect } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-dtails";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMesg, setErrorMesg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodo() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      // console.log(result);
      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMesg("");
      }
    } catch (error) {
      console.log(error);
      setErrorMesg("Some error occured");
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    // console.log(getCurrentTodoId)
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const result =  await apiResponse.json();

      // console.log(result);
      if(result){
        setTodoDetails(result);
        setOpenDialog(true);
      }else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfTodo();
  }, []);

  if(loading) return <Skeleton variant="rectangulat" width={650} hight={650}/>

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Todo App Using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoitem  , index) => <TodoItem key={index}
          fetchDetailsOfCurrentTodo = {fetchDetailsOfCurrentTodo}
          todo={todoitem} />)
          : null}
      </div>
      <TodoDetails
      openDialog={openDialog}
      todoDetails={todoDetails}
      setOpenDialog={setOpenDialog}
      />
    </div>
  );
}

export default App;