import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Add from './Components/Add'
import Show from './Components/Show'
import personService from './Services/persons'
const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const hook = () => {

  console.log('effect')
  axios
    .get('http://localhost:3002/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }

  useEffect(hook, [])
  
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
	  const newPerson = {
		  name: newName,
		  number: newNumber
		}
	  personService.create(newPerson).then(response => {
		  setPersons(persons.concat(response))
		  setNewName('')
		  setNewNumber('')
	  })
  }}
  
  console.log(persons)
  
  const delEntry = (id) => {
	  return () => {
		  const person = persons.find(person => person.id === id)
		if(window.confirm(`Delete ${person.name}?`)){
			personService.del(id).
			then(response => {
				const newPersons = persons.filter(person => person.id !== id)
				setPersons(newPersons)
			})
		}
	}
  }
  
  return (
    <div>
	
      <h2>Phonebook</h2>
	  <Add newName={newName} newNumber={newNumber} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Show persons={persons} delEntry={delEntry}/>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))