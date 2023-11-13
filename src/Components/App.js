import React from "react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Exercises from "../Pages/Exercises";
import ExerciseNew from '../Pages/ExerciseNew'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Exercises} />
        <Route path="exercise/new" Component={ExerciseNew} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
