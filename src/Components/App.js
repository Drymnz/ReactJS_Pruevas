import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Exercises from "../Pages/Exercises";
import ExerciseNew from "../Pages/ExerciseNew";
import NotFound from "../Pages/NotFound";

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" Component={Exercises} />
    <Route path="exercise/new" Component={ExerciseNew} />
    <Route path="*" Component={NotFound}></Route>
  </Routes>
</BrowserRouter>
)
/* 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Exercises} />
        <Route path="exercise/new" Component={ExerciseNew} />
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
} */
export default App;
