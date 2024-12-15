import React, { useState, useEffect } from 'react';

const Test = ({ topic, userId }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Načítanie stavu testu z backendu
    fetch(`/api/tests/status?topic=${encodeURIComponent(topic)}&userId=${encodeURIComponent(userId)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.completed) {
          setIsCompleted(true);
        }
      })
      .catch((error) => console.error('Error loading test status:', error));
  }, [topic, userId]);

  const handleTestCompletion = () => {
    // Označenie testu za dokončený
    setIsCompleted(true);
    fetch('/api/tests/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, userId }),
    }).catch((error) => console.error('Error saving test status:', error));
  };

  return (
    <div>
      <h3>Test pre tému: {topic}</h3>
      {isCompleted ? (
        <p>Test bol úspešne dokončený!</p>
      ) : (
        <div>
          {/* Pridaj otázky a tlačidlo na ukončenie testu */}
          <button onClick={handleTestCompletion}>Dokončiť test</button>
        </div>
      )}
    </div>
  );
};

export default Test;
