import React from "react";
import { Link } from "react-router-dom";
import WeeklyContest from "./Weeklycontest";
const ContestPage = () => {
  return (
    <>
      <section>
        <h1> <strong>Contests</strong></h1>
        <div>
          
          <WeeklyContest startNowForTesting={true} />
          <Link to="/contest/weekly">
            <button>Go to Weekly Contest</button>
          </Link>
        </div>
        <div>
          <h2> <strong>Create Your Own Contest</strong></h2>
          <Link to="/contest/create">
            <button>Create a Contest</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ContestPage;
