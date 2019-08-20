import React from 'react'

const Header = (props) => {
	return (
		<h2>{props.name}</h2>
	)
};

const Content = (props) => {
	return (
		<div>
			{props.parts.map(part => <Part part={part}/>)}
		</div>
	)
};

const Total = (props) => {
	let sum = props.parts.reduce((sum,part) => {
		return sum + part.exercises
	},0)
	
	return (
		<p><strong>total of {sum} exercises</strong></p>
	)
};

const Part = (props) => {
	return (
		<p>{props.part.name} {props.part.exercises}</p>
	)
};

const Course = (props) => {
	return (
	<div>
		<h1>Web development curriculum</h1>
		{props.courses.map(course => {
			return (
			<div>
			<Header name={course.name}/>
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
			</div>
			)
		})}
	</div>
	)
}

export default Course