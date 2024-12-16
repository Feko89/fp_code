import React, { useState } from 'react';

const Test = ({ topic, questions, onComplete }) => {
  // Inicializácia odpovedí pre každú otázku
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [testResult, setTestResult] = useState(null); // Pre uloženie výsledku testu

  // Spracovanie zmeny odpovede
  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };
  const displayLastTestResult = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/tests/last', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) throw new Error('Failed to fetch last test result');
        const data = await response.json();
        console.log(`Last test success rate: ${data.successRate}%`);
    } catch (error) {
        console.error('Error fetching last test result:', error);
    }
};

  // Odoslanie odpovedí na server
  const handleSubmit = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/tests/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ topic, answers }),
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        alert(`Test submitted! Success rate: ${data.successRate}%`);
        displayLastTestResult(); // Aktualizujte posledný výsledok
    } catch (error) {
        console.error('Error submitting test:', error);
        alert('Failed to submit test.');
    }
};


  return (
    <div>
      <h3>Test pre tému: {topic}</h3>
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '1em' }}>
          <p>{q.question}</p>
          {q.options.map((option, optIndex) => (
            <label key={optIndex} style={{ display: 'block' }}>
              <input
                type="radio"
                name={`question-${index}`} // Skupina pre správnu selekciu
                value={option.charAt(0)} // "A", "B", "C"
                onChange={(e) => handleInputChange(index, e.target.value)} // Uloženie odpovede
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Odovzdať test</button>
      {/* Zobrazenie výsledku, ak existuje */}
      {testResult !== null && (
        <div>
          <h4>Vaša úspešnosť: {testResult}%</h4>
        </div>
      )}
    </div>
  );
};

export default Test;
