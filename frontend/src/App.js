import { useState } from "react";
import axios from "axios";

function App() {
  const [hours, setHours] = useState("");
  const [result, setResult] = useState(null);

  const predictScore = async () => {
    const res = await axios.post("http://localhost:5000/predict", {
      hours: Number(hours),
    });
    setResult(res.data.score);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Score Predictor</h1>

      <input
        type="number"
        placeholder="Enter hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <br /><br />

      <button onClick={predictScore}>Predict</button>

      {result && <h2>Predicted Score: {result}</h2>}
    </div>
  );
}

export default App;