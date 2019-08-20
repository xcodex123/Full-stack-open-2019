import React from 'react'

const ShowOne = (props) => {
	const {person,i} = props
	return (
		<p key={i}>{person.name} {person.number}</p>
	)
}

export default ShowOne