import React from 'react'
import Remember from '../remember.jpg'
import './header.css'

const header = () => (

	<div className="header-bg">
		<div className="header-image">
			<img className="the-image" src={Remember} alt="header image" />
		</div>
	</div>
)

export default header