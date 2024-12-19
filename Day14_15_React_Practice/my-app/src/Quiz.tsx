import { useState } from "react";

interface Quiz {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
}

const quizzes: Quiz[] = [
  {
    id: 1,
    question: "What is the capital of Germany?",
    choices: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    correctAnswer: "Berlin",
  },
  {
    id: 2,
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    id: 3,
    question: "What is the capital of the USA?",
    choices: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
    correctAnswer: "Washington, D.C.",
  },
];

export const QuizApp = () => {
  // State to store selected answers by quiz id
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  // State to track if the quiz has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Function to handle the change of selected answer for each quiz
  const handleOptionChange = (quizId: number, answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [quizId]: answer, // Update selected answer for this specific quiz
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    setSubmitted(true); // Set submitted state to true
  };

  // Function to calculate the score based on selected answers
  const calculateScore = () => {
    return quizzes.reduce((score, quiz) => {
      // Increase score if the selected answer matches the correct answer
      if (selectedAnswers[quiz.id] === quiz.correctAnswer) {
        score += 1;
      }
      return score;
    }, 0);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="question-container">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-item">
            <p style={{ color: "red" }}>{quiz.question}</p>
            {quiz.choices.map((choice) => (
              <div
                key={choice}
                style={{
                  display: "inline-block", // Align choices horizontally
                  marginTop: "1px",
                  marginBottom: "5px",
                }}
              >
                <input
                  type="radio"
                  value={choice}
                  checked={selectedAnswers[quiz.id] === choice} // Check if this choice is selected
                  onChange={() => handleOptionChange(quiz.id, choice)} // Handle selection change
                />
                <label>{choice}</label>
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>

        {/* Display results after submission */}
        {submitted && (
          <div className="results-container">
            <h2>Quiz Complete!</h2>
            <p>
              You scored {calculateScore()} out of {quizzes.length}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
