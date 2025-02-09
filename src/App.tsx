import { Provider } from "react-redux";

import { Repos } from "./components/Repos";
import "./index.css";
import store from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Repos />
      </main>
    </Provider>
  );
};
