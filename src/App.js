import React, { useState, useRef } from 'react';
import './App.css';
import marked from 'marked';
import { DEFAULT, REPO } from './default';

const App = () => {
	const [ input, setInput ] = useState(DEFAULT);
	const [ copyText, setcopyText ] = useState('Copy markdown');
	const textAreaRef = useRef(null);
	let updateInput = (e) => {
		setInput(e.target.value);
		inputToMD(input);
	};

	let inputToMD = (input) => {
		var rawMarkup = marked(input, { sanitize: true });
		return { __html: rawMarkup };
	};

	let copyToClipboard = (e) => {
		textAreaRef.current.select();
		document.execCommand('copy');
		e.target.focus();
		setcopyText('Copied!');
	};

	let redirect = () => {
		window.location.replace(REPO);
	};

	return (
		<div>
			<div className="top">
				<h1>
					react-md-example - by @luispagarcia <button onClick={copyToClipboard}>{copyText}</button>{' '}
					<button onClick={redirect}>repo</button>{' '}
				</h1>
			</div>
			<div className="content">
				<textarea
					ref={textAreaRef}
					className="split1 left input"
					type="text"
					onChange={updateInput}
					value={input}
				/>
				<div className="split2 right output" dangerouslySetInnerHTML={inputToMD(input)} />
			</div>
		</div>
	);
};

export default App;
