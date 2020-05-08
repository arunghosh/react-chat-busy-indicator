import React, { useState } from "react";
import BusyIndicator from "./BusyIndicator";
import "./App.css"

function App() {
  const [delay, setDelay] = useState(250);
  const [length, setLength] = useState(5);
  const [busy, setBusy] = useState(true);

  return (
    <div>
      <BusyIndicator busy={busy} length={length} delay={delay} />
      <div>
        <label>Length</label>
        <input
          value={length}
          onChange={e => setLength(e.target.value)}
          type="number"
        />
      </div>
      <div>
        <label>Delay</label>
        <input
          value={delay}
          onChange={e => setDelay(e.target.value)}
          type="number"
        />
      </div>
      <div>
        <label>Busy</label>
        <input
          value={busy}
          defaultChecked={true}
          onChange={() => setBusy(!busy)}
          type="checkbox"
        />
      </div>
    </div>
  );
}

export default App;
