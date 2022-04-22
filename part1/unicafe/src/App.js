import { useState } from 'react'


const Button = ({text, handleClick }) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const Statistics = ({good, bad, neutral, all, avg, pos}) => {
	if (all === 0) {
		return (
			<h1>No gathered statistics yet</h1>
		)
	}
	return (
		<div>
			<h1>Statistics</h1>
			<div>good {good}</div>
			<div>neutral {neutral}</div>
			<div>bad {bad}</div>
			<div>all {all}</div>
			<div>average {avg}</div>
			<div>positive {pos}%</div>
		</div>
	)
}

const App = () => {
  // save clicks of each button to its own state
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
			<Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}/>
		</div>
  )
}

export default App
