import React from 'react'

const AddTodo = ({ addTodo }) => {
	
	return (
		
		<form onSubmit={(event) => {
			event.preventDefault()

			const userInput = event.target.userInput.value

			addTodo(userInput)

			event.target.userInput.value = ''
		}}>
			<input type="text" name="userInput" placeholder="Enter a todo item" />
			<button>Add</button>
		</form>

	)
}

export default AddTodo

