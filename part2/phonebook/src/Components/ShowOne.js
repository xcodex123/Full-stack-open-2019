import React from 'react'

const ShowOne = (props) => {
	const {person, delEntry} = props
	
	return (
		<div style={{
			textAlign: "center", fontFamily: 'Montserrat, sans-serif'
		}} key={person.id}><span style={{fontWeight: "bold"}}>{person.name}</span> => <span style={{fontWeight: "bold"}}>{person.number}</span> <button style={{
			fontFamily: 'Montserrat, sans-serif', borderRadius: "5px", background: "#000000", color: "#ffffff"
		}} onClick={delEntry}>delete</button></div>
	)
}

export default ShowOne