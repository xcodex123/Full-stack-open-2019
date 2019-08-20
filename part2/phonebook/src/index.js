import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Add from './Components/Add'
import Show from './Components/Show'
const App = () => {
  const [ persons, setPersons] = useState([
    { 
	  name: 'Arto Hellas',
	  number: '040-1234567'
	}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  
  const handleNameChange = (event) => {
	  setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
	  setNewNumber(event.target.value)
  }
  
  const handleSubmit = (event) => {
	  event.preventDefault()
	  if(persons.filter(person => person.name===newName).length!==0){
		  alert(`${newName} is already added to phonebook`)
	  }
	  else{
	  const newPerson = [{
		  name: newName,
		  number: newNumber
		}]
	  setPersons(persons.concat(newPerson))
	  setNewName('')
	  setNewNumber('')
	  }
  }
  
  return (
    <div>
	
      <h2>Phonebook</h2>
	  <Add newName={newName} newNumber={newNumber} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Show persons={persons} />
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))
