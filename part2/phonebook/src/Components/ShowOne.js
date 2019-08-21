import React from 'react'

const ShowOne = (props) => {
	const {person} = props
	return (
		<p key={person.id}>{person.name} {person.number}</p>
	)
}

export default ShowOne