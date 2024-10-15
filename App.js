import React, { useState } from 'react';
function App() {
    const [input, setInput] = useState('');
    const [largest, setLargest] = useState('');
    const findLargest = () => {
        const array = input.split(',');
        let max = Number(array[0]); // Start with the first element
        for (let i = 1; i < array.length; i++) {
            const num = Number(array[i]); 
            if (num > max) max = num; }
        setLargest(max);
    return (
        <div><h1>Largest Element Finder</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}placeholder="Enter numbers with commas"/>
            <button onClick={findLargest}>Find Largest</button>
            <p>Largest: {largest}</p></div> );}}
export default App;
