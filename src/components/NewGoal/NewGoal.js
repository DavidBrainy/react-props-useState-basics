import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredtext] = useState("");

  const textChangeHandler = (event) => {
    setEnteredtext(event.target.value);
  };

  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredtext("");

    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
