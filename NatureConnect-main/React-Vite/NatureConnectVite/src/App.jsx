import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import VisitorHomePage from "./components/VisitorHomePage";
import SignUpForm from "./components/SignUpForm";
import VisitorGoalsPage from "./components/VisitorGoalsPage";
import ExpandedGoalCard from "./components/ExpandedGoalCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <MainHeader />
        <div className="appBody">
          <Routes>
            <Route path="/" element={<VisitorHomePage />} />
            <Route
              path="/SignUpForm"
              element={
                <>
                  <SignUpForm />
                  <MainFooter />
                </>
              }
            />
            <Route
              path="/VisitorGoalsPage"
              element={
                <>
                  <VisitorGoalsPage />
                  <MainFooter />
                </>
              }
            />
            <Route
              path="/ExpandedGoalCard"
              element={
                <ExpandedGoalCard
                  goalResources="resource1"
                  endDate="11/19/24"
                  goalType="Daily"
                  name="Eat a local fruit or vegetable"
                  longDesc="Buying produce that is in season or grown locally can often be a more healthy and sustainable choice. Support local growers by buying their produce or enjoy a juicier and tastier bite by buying in season!"
                  steps="Eat a local fruit or vegetable"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
