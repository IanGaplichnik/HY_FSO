import { useState } from 'react'

const Button = ({handleClick, text}) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without a extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

	const nextAnecdote = () => {
		let rand = selected;
		while (rand === selected) //this loop avoid displying same anecdote twice in a row
				rand = Math.floor(Math.random() * 7);
		setSelected(rand);
	}

	const addVote = () => { //adding vote at certain index of array copy, using copy as state
		const copy = [...points];
		copy[selected] += 1;
		setPoints(copy);
	}

	const [selected, setSelected] = useState(0);
	const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
	
	const checkLargest = () => { //iterating through poins arr to find index with highest score
		let largest_index = 0;
		let index = 0;
		if (points.every(item => item === 0)) //if no votes yet, return -1
			return (-1);
		while (index < points.length) // if at least one vote, return index of largest vote
		{
			if (points[index] > points[largest_index])
				largest_index = index;
			index++;
		}
		return (largest_index);
	}

	let largest = checkLargest();

	return (
		<div>
			<h1>Anecdote of the day</h1>
			<p>{anecdotes[selected]}</p>
			<p> Votes: {points[selected]}</p>
			<Button handleClick={nextAnecdote} text="Next anecdote"/>
			<Button handleClick={addVote} text="Vote"/>
			{
				largest > -1 &&
				<div>
				<h1>Anecdote with most votes</h1>
				<p>{anecdotes[largest]}</p>
				</div>
			}
    </div>
  )
}

export default App
