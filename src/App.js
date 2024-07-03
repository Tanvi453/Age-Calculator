
import './App.css';
import { useState } from 'react';

const Age = () => {
  const [d1, setD1] = useState('');
  const [m1, setM1] = useState('');
  const [y1, setY1] = useState('');
  const [Age, setAge] = useState({ d: "", m: "", y: "" });

  const handleSubmit = () => {
    console.log(d1);
    console.log(m1);
    console.log(y1);

    var date = new Date();

    var d2 = date.getDate();
    console.log(d2);

    var m2 = 1 + date.getMonth();
    console.log(m2);

    var y2 = date.getFullYear();
    console.log(y2);

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      console.log(d2);
      m2 = m2 - 1;
      console.log(m2);
    }

    if (m1 > m2) {
      m2 = m2 + 12;
      console.log(m2);
      y2 = y2 - 1;
      console.log(y2);
    }

    const d = d2 - d1;
    console.log(d + " Days");

    const m = m2 - m1;
    console.log(m + " Month");

    const y = y2 - y1;
    console.log(y + " Years");

    setAge({ d, m, y });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", justifyContent: "center" }}>
      <h1>Age Calculator:</h1>

      <div>
        <label htmlFor="datee">Date:</label>
        <input type="text" name="datee" id="datee" value={d1} placeholder="dd" onChange={(e) => setD1(e.target.value)} />
      </div>

      <div>
        <label htmlFor="month">Month:</label>
        <input type="text" name="month" id="month" value={m1} placeholder="mm" onChange={(e) => setM1(e.target.value)} />
      </div>

      <div>
        <label htmlFor="year">Year:</label>
        <input type="text" name="year" id="year" value={y1} placeholder="yyyy" onChange={(e) => setY1(e.target.value)} />
      </div>

      <button type="submit" onClick={handleSubmit}>Submit</button>


      <h2>
        Your age is {Age.d} Days, {Age.m} Months, {Age.y} Years.
      </h2>

    </div>
  );
};

export default Age;

