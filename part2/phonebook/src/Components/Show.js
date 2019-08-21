import React from 'react'
import ShowOne from './ShowOne'
const Show = (props) => {
	const {persons, delEntry} = props
	return (
		<div>
			{persons.map((person) => <ShowOne person={person} delEntry={delEntry(person.id)}/>)}
	  </div>
	)
}

export default Show