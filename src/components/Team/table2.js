import "./Team.css";
import React from "react";

function Table2() {
  return (
    <>
      <div className="element">
        <h3>SCHEDULE-2</h3>
        <table>
          <tbody>
            <tr>
              <th>20 Jan 2017</th>
              <th>Vestibulum viverra</th>
            </tr>
            <tr>
              <th>17 Feb 2017</th>
              <th>Vestibulum viverra</th>
            </tr>
            <tr>
              <th className="gap">25 Mar 2017</th>
              <th className="gap">Vestibulum viverra</th>
            </tr>
            <tr>
              <th className="gap">4 Apr 2017</th>
              <th className="gap">Vestibulum viverra</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table2;
