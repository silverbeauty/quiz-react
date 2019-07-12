import React from "react";
import { Progress } from 'reactstrap';
import "../scss/variables.scss";

export const QuizScoreProgressBar = ({
  current_step,
  total_step,
  score
}) => {

  const remaining_step = total_step - current_step;
  const max_percentage = (score + remaining_step) *100/total_step
  const min_percentage = score *100/total_step
  const current_percentage = score / current_step*100

  return (
    <div className="quiz-score-progress-container-fluid">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>{`Score: ${current_percentage.toFixed(2)}%`}</p>
        <p>{`Max Score: ${max_percentage.toFixed(2)}%`}</p>
      </div>
      <Progress multi>  
        <Progress bar color="black" value={min_percentage} />
        <Progress bar color="darkGray" value={current_percentage-min_percentage} /> 
        <Progress bar color="lightGray" value={max_percentage-current_percentage} />
      </Progress>
    </div>
  );
};

export default QuizScoreProgressBar;