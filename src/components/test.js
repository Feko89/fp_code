import React, { useState, useEffect } from "react";
import styles from "./Test.module.css";

const Test = ({ topic, questions }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [feedback, setFeedback] = useState(Array(questions.length).fill(null));
  const [resultShown, setResultShown] = useState(false);
  const [successRate, setSuccessRate] = useState(null);

  useEffect(() => {
    // Reset state when topic or questions change
    setAnswers(Array(questions.length).fill(""));
    setFeedback(Array(questions.length).fill(null));
    setResultShown(false);
    setSuccessRate(null);
  }, [topic, questions]);

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);

    const isCorrect =
      questions[index].answer?.trim().toUpperCase() ===
      value?.trim().toUpperCase();
    const updatedFeedback = [...feedback];
    updatedFeedback[index] = isCorrect
      ? "Správne"
      : `Nesprávne, správna odpoveď: ${questions[index].answer}`;
    setFeedback(updatedFeedback);
  };

  const handleSubmit = () => {
    const correctAnswers = questions.map((q) => q.answer);
    const totalQuestions = correctAnswers.length;
    const correctCount = answers.filter(
      (answer, index) =>
        correctAnswers[index]?.trim().toUpperCase() ===
        answer?.trim().toUpperCase()
    ).length;

    const successRate = Math.round((correctCount / totalQuestions) * 100);
    setSuccessRate(successRate);
    setResultShown(true);
  };

  const handleRetry = () => {
    setAnswers(Array(questions.length).fill(""));
    setFeedback(Array(questions.length).fill(null));
    setResultShown(false);
    setSuccessRate(null);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Test pre tému: {topic}</h3>

      {questions.map((q, index) => (
        <div key={index} className={styles.question}>
          <p>{q.question}</p>
          {q.options.map((option, optIndex) => (
            <label key={optIndex} className={styles.label}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option.charAt(0)}
                className={styles.radio}
                onChange={(e) => handleInputChange(index, e.target.value)}
                disabled={resultShown} // Disable inputs after submission
              />
              {option}
            </label>
          ))}
          {resultShown && feedback[index] && (
            <p
              className={
                feedback[index] === "Správne" ? styles.correct : styles.incorrect
              }
            >
              {feedback[index]}
            </p>
          )}
        </div>
      ))}

      {!resultShown ? (
        <button className={styles.button} onClick={handleSubmit}>
          Odovzdať test
        </button>
      ) : (
        <>
          <p className={styles.successRate}>Vaša úspešnosť: {successRate}%</p>
          <button className={styles.button} onClick={handleRetry}>
            Skúsiť znova
          </button>
        </>
      )}
    </div>
  );
};

export default Test;
