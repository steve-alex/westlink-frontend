import React, { useState } from "react";
import { ReportIssuePage } from './ReportIssuePage'

export const HomePage = () => {
  const [selected, setSelected] = useState(undefined);
  return (
    <div>
      <button onClick={() => setSelected(true)}>Report an issue</button>
      {selected &&
        <ReportIssuePage />
      }
    </div>
  );
};
