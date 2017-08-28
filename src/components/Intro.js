import React from 'react'

const Intro = ({userName}) => {
	
	return(
		<div>
			<h1>Hello</h1>
			<h3>{userName.name}</h3>
		</div>
	)

}

export default Intro