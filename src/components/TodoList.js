// The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect(<function>, <dependency>)
import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
// import { getTodos } from '../redux/todoSlice';
// The useSelector hooks allow you to extract data or the state from the Redux store using a selector function. It is equivalent to the mapStateToProps argument used in the connect() function conceptually.
// useSelector and useDispatch are a set of hooks to use as alternatives to the existing connect() higher-order component.

const TodoList = () => {
	const todos=useSelector((state)=>state.todos);

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
