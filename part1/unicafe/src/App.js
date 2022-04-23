import { useState } from 'react'

const Button = ({text, handleClick }) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const StatisticLine = ({ text, value }) => (
	<tr>
		<td>
			{text} 
		</td>
		<td>
			{value}
		</td>
	</tr>
)

const Statistics = ({good, bad, neutral, all, avg, pos}) => {
	if (all === 0) {
		return (
			<p>No gathered statistics yet</p>
		)
	}
	return (
			<table>
				<tbody>
					<StatisticLine text="good" value={good} />
					<StatisticLine text="neutral" value={neutral} />
					<StatisticLine text="bad" value={bad} />
					<StatisticLine text="all" value={all} />
					<StatisticLine text="average" value={avg} />
					<StatisticLine text="positive" value={pos + '%'} />
				</tbody>
			</table>
	)
}

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const all = good + neutral + bad;
	const avg = (good - bad) / all;
	const pos = (good / all) * 100;

	return (
		<div>
			<h1>Give feedback</h1>
			<Button text="good" handleClick={() => setGood(good + 1)}/>
			<Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
			<Button text="bad" handleClick={() => setBad(bad + 1)}/>
			<h1>Statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}/>
		</div>
	)
}

export default App
