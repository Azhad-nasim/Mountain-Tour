import React from "react";
import "./Team.css";
function Table1() {
  return (
    <>
      <div className="element" id="team">
        <h3>SCHEDULE-1</h3>
        <table>
          <tbody>
            <tr>
              <th>25 Nov 2016</th>
              <th>Vestibulum viverra</th>
            </tr>
            <tr>
              <th>28 Nov 2016</th>
              <th>Vestibulum viverra</th>
            </tr>
            <tr>
              <th className="gap">18 Dec 2016</th>
              <th className="gap">Vestibulum viverra</th>
            </tr>
            <tr>
              <th className="gap">7 Jan 2017</th>
              <th className="gap">Vestibulum viverra</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table1;
