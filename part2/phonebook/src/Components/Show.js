import React from 'react'
import ShowOne from './ShowOne'
const Show = (props) => {
	const {persons} = props
	return (
		<div>
			{persons.map((person,i) => <ShowOne person={person} i={i} />)}
	  </div>
	)
}

export default Show