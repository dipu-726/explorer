import { createContext } from "react";

import { initial_state } from "@reducer/index";
import noop from "@utils/noop";

const default_value = {
  state : initial_state,
  dispatch: noop
}

const RepositoryContext = createContext(default_value);

export default RepositoryContext;
