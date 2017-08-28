import React from 'react'

const AddName = ({addUsername, userName}) => {

	return(

		<form onSubmit={(event) => {

			event.preventDefault()

			const userName = event.target.userName.value

			//add function here
			addUsername(userName)

			event.target.userName.value = ''
		}}>

			<label>Enter your name: </label>	
			<input type="text" name="userName" placeholder="Enter your name..."/>
			<button>Submit</button>

		</form>
	)
}

export default AddName