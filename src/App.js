import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div>
        <Link to="/newbuildsheet">New BuildSheet</Link>
      </div>
      <div>
        <Link to="/tracktable">Track Table</Link>
      </div>
      <div>
        <Link to="/housingbracketoptiontable">
          Housing bracket option Table
        </Link>
      </div>
      <div>
        <Link to="/halfotiontable">Half Option table</Link>
      </div>
      <div>
        <Link to="/dowelltable">Dowell table</Link>
      </div>
      <div>
        <Link to="/brkflgoption">brkflgoption table</Link>
      </div>
      <div>
        <Link to="/bracketoptiontable">Bracket Option table</Link>
      </div>
      <div>
        <Link to="/baredrawingnumber">Bare Drawing Number</Link>
      </div>
      <div>
        <Link to="/abstable">Abs</Link>
      </div>
      <div>
        <Link to="/buildsheettable">Build Sheet Table</Link>
      </div>
    </div>
  );
};

export default App;
