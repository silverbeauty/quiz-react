import React from "react";
import { Progress } from 'reactstrap';
import "../scss/variables.scss";

export const QuizProgressBar = ({
  current_step,
  total_step
}) => {

  const current_percentage = current_step / total_step*100

  return (
    <div className="quiz-progress-container-fluid">
        <Progress color="lightGray" value={current_percentage} />
    </div>
  );
};

export default QuizProgressBar;