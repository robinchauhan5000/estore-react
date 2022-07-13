import React from "react";
import { UserContext } from "./App";

export const TabbarTask = () => {
  const [state, setState] = React.useState([true, false, false]);

  return (
    <div>
      <div className='tabs'>
        <button
          disabled={state[0]}
          className={state[0] === true ? "btn btn-active" : "btn"}
          onClick={() => setState([true, false, false])}>
          Section title 1
        </button>

        <button
          disabled={state[1]}
          className={state[1] === true ? "btn btn-active" : "btn"}
          onClick={() => setState([false, true, false])}>
          Section title 2
        </button>
        <button
          disabled={state[2]}
          className={state[2] === true ? "btn btn-active" : "btn"}
          onClick={() => setState([false, false, true])}>
          Section title 3
        </button>
        <div className='view'>
          {state[0] && <p>Content of section 1</p>}
          {state[1] && <p>Content of section 2</p>}
          {state[2] && <p>Content of section 3</p>}
        </div>
      </div>
    </div>
  );
};
