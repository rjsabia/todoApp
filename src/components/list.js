import React from 'react'

const List = ({ todos }) => (
	
	<ul>
		{todos.map((todo, index) => (

			<li key={index}>{todo.id} - {todo.text}</li>
		))}
	</ul>

)

export default List