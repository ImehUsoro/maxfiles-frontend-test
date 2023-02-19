import React, { useState } from "react";
import { QuestionStyle } from "./QuestionStyles";

const Question = ({ text, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <QuestionStyle>
      <div className="text-group">
        <p className="text">{text}</p>

        {showAnswer && <p className="answer">{answer}</p>}
      </div>
      {showAnswer ? (
        <img
          src="/images/collapse_icon.png"
          alt=""
          className="icon"
          onClick={() => setShowAnswer(false)}
        />
      ) : (
        <img
          src="/images/add_icon.png"
          alt=""
          className="icon"
          onClick={() => setShowAnswer(true)}
        />
      )}
    </QuestionStyle>
  );
};

export default Question;
