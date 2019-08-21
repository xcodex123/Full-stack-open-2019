import React from 'react'
import ShowOne from './ShowOne'
const Show = (props) => {
	const {persons} = props
	return (
		<div>
			{persons.map((person) => <ShowOne person={person}/>)}
	  </div>
	)
}

export default Show