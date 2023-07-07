import React from "react";
import { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGols, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn more about the course main Topic" },
    { id: "cg3", text: "Help other student in the course Q&A " },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className="course-goal">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGols} />
    </div>
  );
};

export default App;
