import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../api/axiosPrivate';
import { useAuth } from '../redux/slice/authSlice';

const Home = () => {
  const { user } = useAuth();
  const axios = useAxiosPrivate();
  const [todos, setTodos] = useState([]);
  const [todoLoading, setTodoLoading] = useState(true);

  const getTodo = async () => {
    try {
      const response = await axios.get('/todo');
      setTodos(response.data);
      setTodoLoading(false);
    } catch (error) { }
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <h1>This is Homepage Show Some Items</h1>
      <p>{user?.id}</p>
      <p>{user?.username}</p>

      <h1>Here Some Todo</h1>
      {
        todoLoading ? <h1>LoadingTodo ...</h1> :
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))
      }
    </div>
  )
}

export default Home