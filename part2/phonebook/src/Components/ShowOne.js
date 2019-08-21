import React from 'react'

const ShowOne = (props) => {
	const {person, delEntry} = props
	
	return (
		<div key={person.id}>{person.name} {person.number} <button onClick={delEntry}>delete</button></div>
	)
}

export default ShowOne