import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";

import { Provider } from "react-redux";
import { store } from "./src/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
};

export default App;
