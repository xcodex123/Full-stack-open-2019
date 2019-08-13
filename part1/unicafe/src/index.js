import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
	return(
	<button onClick={props.handleClick}>{props.text}</button>
	)
}

const Statistics = (props) => {
	
	const total = (props) => {
		return props.good + props.neutral + props.bad
	};
	
	const average = (props) => {
		if(total(props)===0){
			return 0;
		}
		else{
			return (props.good - props.bad) / total(props)
		}
	};
	
	const positives = (props) => {
		if(total(props)===0){
			return 0;
		}
		else{
			return props.good / total(props)
		}
	};
	
	if(total(props)===0){
		return (
			<div>
				<h2>Statistics</h2>
				<div>
					<p>No feedback given</p>
				</div>
			</div>
		)
	}
	
	return (
	<div>
	<h2>Statistics</h2>
	<table>
		<tbody>
			<Statistic text="good" value={props.good}/>
			<Statistic text="neutral" value={props.neutral}/>
			<Statistic text="bad" value={props.bad}/>
			<Statistic text="all" value={total(props)}/>
			<Statistic text="average" value={average(props)}/>
			<Statistic text="positives" value={positives(props)*100}/>
		</tbody>
	</table>
	</div>
	)
}

const Statistic = (props) => {
	return (
	<tr>
		<td>{props.text}</td>
		<td>{props.value}</td>
	</tr>
	)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (value) => setGood(value);
  const setNeutralValue = (value) => setNeutral(value);
  const setBadValue = (value) => setBad(value);
  
  return (
    <div>
      <h1>give feedback</h1>
	  <Button handleClick={() => setGoodValue(good + 1)} text="good"/>
	  <Button handleClick={() => setNeutralValue(neutral + 1)} text="neutral"/>
	  <Button handleClick={() => setBadValue(bad + 1)} text="bad"/>
	  <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)