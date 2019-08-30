import React from 'react'

const Add = (props) => {
	const {newName,newNumber,handleSubmit,handleNameChange,handleNumberChange} = props
	return (
		<form style={{
			textAlign: "center"
		}} onSubmit={handleSubmit}>
        <div style={{
			fontFamily: 'Montserrat, sans-serif', margin: "10px auto", fontWeight: "bold"
		}}>
          name: <input style={{
			  borderRadius: "5px", 
			  fontFamily: 'Montserrat, sans-serif'
		  }} onChange={handleNameChange} value={newName}/>
        </div>
		<div style={{
			fontFamily: 'Montserrat, sans-serif', margin: "10px auto", fontWeight: "bold"
		}}>
		  number: <input style={{
			  borderRadius: "5px", 
			  fontFamily: 'Montserrat, sans-serif'
		  }} onChange={handleNumberChange} value={newNumber}/>
		</div>
        <div>
          <button style={{
			fontFamily: 'Montserrat, sans-serif', borderRadius: "5px", background: "#000000", color: "#ffffff"
		}} type="submit">add</button>
        </div>
		</form>
	)
}

export default Add