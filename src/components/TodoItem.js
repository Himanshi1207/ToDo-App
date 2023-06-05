import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete,deleteTodo } from '../redux/todoSlice';
const TodoItem = ({ id, title, completed }) => {
	// this will add dispatch actions 
	// Dispatching actions in Redux is the fundamental method of updating a Redux store's state . Actions are used to store relevant information for the state , and they reach the store through the dispatch() method available on the store object. You can use either store. dispatch() directly or this. props.
	const dispatch=useDispatch(); 
	const handleDeleteClick=()=>{
		dispatch(deleteTodo({id:id}))
	}
	const handleCompleteClick=()=>{
		// our reducer needs to know the id of the todo we are changing and the state of the completed variable
		// completed:!completed means that if it is true it will give reducer a false value and vice versa
		dispatch(
			toggleComplete({id:id, completed:!completed}, console.log("user entered "+completed))
		);
	};
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed}
					onChange={handleCompleteClick}
					></input>
					{title}
				</span>
				<button className='btn btn-danger'
				onClick={handleDeleteClick}
				>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
