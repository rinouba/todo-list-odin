import { Constructer } from "./constructer";
import rerender from "./rernder";

const createNewTodo = (title, arr) => {
  const todo1 = new Constructer(title);
  arr.push({ title: todo1.title });
  rerender(arr);
};

export default createNewTodo;
