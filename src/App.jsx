import { useEffect, useState } from "react";
import questionsData from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  console.log(questions);
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question, id) => {
          return <SingleQuestion key={id} {...question} />;
        })}
      </div>
    </main>
  );
};
export default App;
