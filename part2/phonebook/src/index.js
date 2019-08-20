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
	  const regexp = new RegExp("^"+newName+"$",'g')
	  const regexplower = new RegExp("^"+newName.toLowerCase()+"$",'g')
	  const regexpupper = new RegExp("^"+newName.toUpperCase()+"$",'g')
	  if(persons.filter(person => (regexp.test(person.name))||(regexplower.test(person.name.toLowerCase()))||(regexpupper.test(person.name.toUpperCase()))).length!==0){
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
