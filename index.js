import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};c

export default MarkdownEditor;

const input = "Hello, World!";
const reversedInput = input.split('').reverse().join('');
const capitalizedInput = reversedInput.charAt(0).toUpperCase() + reversedInput.slice(1);

console.log(capitalizedInput);

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
];

const transformedData = data.flatMap((group) => group.map((person) => person.name));

console.log(transformedData);
const sentence = "Hello, World!";
const reversedSentence = sentence.split('').reverse().join('');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);