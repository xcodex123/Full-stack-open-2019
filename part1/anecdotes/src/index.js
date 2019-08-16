import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0) 
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))
  
  const setRandom = () => {
		let newSelected = null
		do{
			newSelected = Math.floor(Math.random()*6)
		}while(newSelected === selected)
		setSelected(newSelected)
  };
  
  const setVotesArray = () => {
		const newVotes = [...votes]
		newVotes[selected] += 1
        setVotes(newVotes)
  };
  
  const value = Math.max(...votes)
  const index = votes.indexOf(value)
  
  return (
  <div>
	<h1>Anecdote of the day</h1>
    <div>
		{props.anecdotes[selected]}
    </div>
	<div>
		has {votes[selected]} votes
	</div>
	<button onClick={setVotesArray}>vote</button>
	<button onClick={setRandom}>next anecdote</button>
	<h1>Anecdote having most votes</h1>
    <p>{props.anecdotes[index]}</p>
	<p>has {votes[index]} votes</p>
  </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
